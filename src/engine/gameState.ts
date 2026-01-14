import type {
    GameState,
    VisibleStats,
    StatEffect,
    ChoiceEffects,
    Card,
    ConditionalEffect,
    VisibleStatKey,
    HiddenStatKey,
} from '../types';
import {
    INITIAL_VISIBLE_STATS,
    INITIAL_HIDDEN_STATS,
    INITIAL_FLAGS,
} from '../types';

// Create initial game state
export function createInitialGameState(): GameState {
    return {
        visible: { ...INITIAL_VISIBLE_STATS },
        hidden: { ...INITIAL_HIDDEN_STATS },
        flags: { ...INITIAL_FLAGS },
        currentDate: new Date('1937-08-09'),
        phase: 1,
        turn: 0,
        playedCards: new Set<string>(),
        cardCooldowns: new Map<string, number>(),
        pendingAnchors: [],
        currentCard: null,
        currentEnding: null,
        isGameOver: false,
        lastChoiceDirection: null,
        statChanges: null,
    };
}

// Clamp a value between 0 and 100
export function clampStat(value: number): number {
    return Math.max(0, Math.min(100, Math.round(value)));
}

// Calculate battle loss multiplier based on JAP_AGGRO
export function calculateBattleLossMultiplier(japAggro: number): number {
    return 1 + (japAggro / 100);
}

// Check if a condition is met
export function checkCondition(
    condition: ConditionalEffect['condition'],
    state: GameState
): boolean {
    if (condition.flag !== undefined) {
        return state.flags[condition.flag] === condition.flagValue;
    }

    if (condition.stat !== undefined && condition.comparison !== undefined && condition.value !== undefined) {
        const statValue = condition.stat in state.visible
            ? state.visible[condition.stat as VisibleStatKey]
            : state.hidden[condition.stat as HiddenStatKey];

        switch (condition.comparison) {
            case 'gt': return statValue > condition.value;
            case 'lt': return statValue < condition.value;
            case 'gte': return statValue >= condition.value;
            case 'lte': return statValue <= condition.value;
            case 'eq': return statValue === condition.value;
            default: return false;
        }
    }

    return false;
}

// Apply stat effects to game state
export function applyEffects(
    state: GameState,
    effects: ChoiceEffects,
    card: Card
): { newState: GameState; visibleChanges: Partial<VisibleStats> } {
    const newState = { ...state };
    newState.visible = { ...state.visible };
    newState.hidden = { ...state.hidden };
    newState.flags = { ...state.flags };

    const visibleChanges: Partial<VisibleStats> = {};
    const battleMultiplier = calculateBattleLossMultiplier(state.hidden.JAP_AGGRO);

    // Helper to apply a single stat effect
    const applyStat = (effect: StatEffect) => {
        let value = effect.value;

        // Apply battle multiplier if applicable
        if (effect.isBattleDamage && !effect.isFixed && value < 0) {
            value = Math.round(value * battleMultiplier);
        }

        // Apply SpyCaught butterfly effect modifiers
        if (!state.flags.SpyCaught) {
            // C_005: Extra ELITE -2, JAP_AGGRO +2
            if (card.id === 'C_005' && effect.stat === 'ELITE') {
                value -= 2;
            }
            // C_009: Success probability halved (handled in cardDraw)
            // C_013: NANJING_DEFENSE bonus halved
            if (card.id === 'C_013' && effect.stat === 'NANJING_DEFENSE' && value > 0) {
                value = Math.round(value / 2);
            }
            // C_046: Extra NANJING_DEFENSE -4 if choosing to ignore
            if (card.id === 'C_046' && effect.stat === 'NANJING_DEFENSE' && value < 0) {
                value -= 4;
            }
        }

        if (effect.stat in newState.visible) {
            const key = effect.stat as VisibleStatKey;
            const oldValue = newState.visible[key];
            newState.visible[key] = clampStat(oldValue + value);
            visibleChanges[key] = (visibleChanges[key] || 0) + value;
        } else if (effect.stat in newState.hidden) {
            const key = effect.stat as HiddenStatKey;
            newState.hidden[key] = newState.hidden[key] + value;
            // Special handling for TIME_DELAY (no clamp, can go negative conceptually but display as 0)
            if (key !== 'TIME_DELAY') {
                newState.hidden[key] = clampStat(newState.hidden[key]);
            }
        }
    };

    // Apply main stat effects
    for (const effect of effects.stats) {
        applyStat(effect);
    }

    // Apply conditional effects
    if (effects.conditionalEffects) {
        for (const conditional of effects.conditionalEffects) {
            const conditionMet = checkCondition(conditional.condition, state);
            const effectsToApply = conditionMet ? conditional.thenEffects : (conditional.elseEffects || []);
            for (const effect of effectsToApply) {
                applyStat(effect);
            }
        }
    }

    // Apply flag effects
    if (effects.flags) {
        for (const flagEffect of effects.flags) {
            newState.flags[flagEffect.flag] = flagEffect.value;
        }
    }

    // Apply extra time delay
    if (effects.extraTimeDelay) {
        newState.hidden.TIME_DELAY += effects.extraTimeDelay;
    }

    // Handle success probability (e.g., IzumoSunk)
    if (effects.successProbability !== undefined && effects.successFlag) {
        let probability = effects.successProbability;

        // SpyCaught butterfly: C_009 success probability halved
        if (!state.flags.SpyCaught && card.id === 'C_009') {
            probability = probability / 2;
        }

        if (Math.random() < probability) {
            newState.flags[effects.successFlag] = true;
            // Apply success effects
            if (effects.successEffects) {
                for (const effect of effects.successEffects) {
                    applyStat(effect);
                }
            }
        }
    }

    // Scorched Earth → Refugee Crisis linkage
    // Every 10 points of SCORCHED_EARTH adds 2 to REFUGEE_CRISIS
    const oldScorched = state.hidden.SCORCHED_EARTH;
    const newScorched = newState.hidden.SCORCHED_EARTH;
    const scorchIncrease = newScorched - oldScorched;
    if (scorchIncrease > 0) {
        const extraRefugee = Math.floor(scorchIncrease / 10) * 2;
        newState.hidden.REFUGEE_CRISIS = clampStat(newState.hidden.REFUGEE_CRISIS + extraRefugee);
    }

    return { newState, visibleChanges };
}

// Advance the game date by 0.5-1 day
export function advanceDate(state: GameState): GameState {
    const newState = { ...state };
    const advance = Math.random() < 0.5 ? 0.5 : 1;
    const newDate = new Date(state.currentDate);
    newDate.setTime(newDate.getTime() + advance * 24 * 60 * 60 * 1000);
    newState.currentDate = newDate;

    // Update phase based on date
    const dateStr = formatDateForComparison(newDate);

    if (dateStr >= '1937-10-27') {
        newState.phase = 3;
    } else if (dateStr >= '1937-08-23') {
        newState.phase = 2;
    } else {
        newState.phase = 1;
    }

    // Increment TIME_DELAY every turn
    newState.hidden = { ...state.hidden };
    newState.hidden.TIME_DELAY += 1;

    // Increment turn
    newState.turn += 1;

    return newState;
}

// Format date for comparison (YYYY-MM-DD)
export function formatDateForComparison(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format date for display (MM.DD)
export function formatDateForDisplay(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}.${day}`;
}

// Format full date for display
export function formatFullDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// Convert anchor date (MM.DD) to full date string
export function anchorDateToFull(anchorDate: string): string {
    return `1937-${anchorDate.replace('.', '-')}`;
}
