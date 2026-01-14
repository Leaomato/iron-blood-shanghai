import type {
    Ending,
    EndingCondition,
    GameState,
    VisibleStatKey,
    HiddenStatKey,
} from '../types';
import { endings, endingMap } from '../data/endings';
import { formatDateForComparison } from './gameState';

// Check if an ending condition is met
export function checkEndingCondition(condition: EndingCondition, state: GameState): boolean {
    switch (condition.type) {
        case 'stat':
            if (!condition.stat || !condition.comparison || condition.value === undefined) {
                return false;
            }
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

        case 'flag':
            if (!condition.flag) return false;
            return state.flags[condition.flag] === condition.flagValue;

        case 'phase':
            if (condition.phase === undefined) return false;
            return state.phase >= condition.phase;

        case 'date':
            if (!condition.afterDate) return false;
            const currentDateStr = formatDateForComparison(state.currentDate);
            return currentDateStr >= condition.afterDate;

        case 'default':
            return true;

        default:
            return false;
    }
}

// Check all conditions for an ending (all must be met)
export function checkAllEndingConditions(ending: Ending, state: GameState): boolean {
    if (ending.isLocked) {
        return false;
    }

    if (ending.conditions.length === 0) {
        return false;
    }

    return ending.conditions.every(cond => checkEndingCondition(cond, state));
}

// Get the triggered ending, if any (returns highest priority ending that's triggered)
export function getTriggeredEnding(state: GameState): Ending | null {
    // Sort endings by priority (lower = higher priority)
    const sortedEndings = [...endings].sort((a, b) => a.priority - b.priority);

    for (const ending of sortedEndings) {
        if (checkAllEndingConditions(ending, state)) {
            return ending;
        }
    }

    return null;
}

// Check if game should end after the final anchor (11.26)
export function checkFinalEnding(state: GameState): Ending | null {
    const currentDateStr = formatDateForComparison(state.currentDate);

    // Only check after game end date
    if (currentDateStr < '1937-11-26') {
        return null;
    }

    // Check if C_076 has been played (final anchor)
    if (!state.playedCards.has('C_076')) {
        return null;
    }

    // Check for special endings in priority order
    return getTriggeredEnding(state);
}

// Get ending by ID
export function getEndingById(id: string): Ending | null {
    return endingMap.get(id) || null;
}

// Force trigger an ending by ID
export function forceTriggerEnding(endingId: string): Ending | null {
    return getEndingById(endingId);
}
