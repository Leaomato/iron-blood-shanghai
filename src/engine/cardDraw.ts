import type {
    Card,
    GameState,
    CardCondition,
    VisibleStatKey,
    HiddenStatKey,
} from '../types';
import {
    allAnchorCards,
    allRandomCards,
    allSpecialCards,
    cardMap,
} from '../data/cards';
import { formatDateForComparison, anchorDateToFull } from './gameState';

// Get anchor cards that should have been triggered by now but haven't been played
export function getPendingAnchorCards(state: GameState): Card[] {
    const currentDateStr = formatDateForComparison(state.currentDate);

    return allAnchorCards.filter(card => {
        // Skip if already played
        if (state.playedCards.has(card.id)) {
            return false;
        }

        // Check if the anchor date has been reached or passed
        if (card.date) {
            const anchorFullDate = anchorDateToFull(card.date);
            return anchorFullDate <= currentDateStr;
        }

        return false;
    }).sort((a, b) => {
        // Sort by date to ensure anchors are played in chronological order
        if (!a.date || !b.date) return 0;
        return anchorDateToFull(a.date).localeCompare(anchorDateToFull(b.date));
    });
}

// Check if a card condition is met
export function checkCardCondition(condition: CardCondition, state: GameState): boolean {
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

        case 'cardPlayed':
            if (!condition.cardId) return false;
            return state.playedCards.has(condition.cardId);

        default:
            return false;
    }
}

// Get eligible special cards (not yet played)
export function getEligibleSpecialCards(state: GameState): Card[] {
    return allSpecialCards.filter(card => {
        // Skip if already played (special cards are once-only by default)
        if (state.playedCards.has(card.id)) {
            return false;
        }

        // Check all conditions
        if (card.conditions && card.conditions.length > 0) {
            return card.conditions.every(cond => checkCardCondition(cond, state));
        }

        // Cards without conditions are always eligible
        return true;
    });
}

// Get eligible random cards for the current phase (not yet played in this game)
export function getEligibleRandomCards(state: GameState): Card[] {
    return allRandomCards.filter(card => {
        // Check phase
        if (card.phase !== 'ALL' && card.phase !== state.phase) {
            return false;
        }

        // Skip if already played - NO DUPLICATES unless pool is empty
        if (state.playedCards.has(card.id)) {
            return false;
        }

        // Check conditions if any
        if (card.conditions && card.conditions.length > 0) {
            return card.conditions.every(cond => checkCardCondition(cond, state));
        }

        return true;
    });
}

// Get fallback random cards (allow replaying non-once cards when pool is exhausted)
export function getFallbackRandomCards(state: GameState): Card[] {
    return allRandomCards.filter(card => {
        // Check phase
        if (card.phase !== 'ALL' && card.phase !== state.phase) {
            return false;
        }

        // Only allow non-once cards to repeat
        if (card.once) {
            return false;
        }

        // Check conditions if any
        if (card.conditions && card.conditions.length > 0) {
            return card.conditions.every(cond => checkCardCondition(cond, state));
        }

        return true;
    });
}

// Calculate weight for a card based on game state
export function calculateCardWeight(card: Card, state: GameState): number {
    let weight = 100; // Base weight

    // High-stat backlash: increase weight of negative event cards when stats are high
    const visibleKeys: VisibleStatKey[] = ['ELITE', 'INTL', 'SUPPLY', 'MORALE'];
    for (const key of visibleKeys) {
        if (state.visible[key] >= 95) {
            // Check if card has negative effects on this stat
            const hasNegativeEffect = card.choiceL.effects.stats.some(
                e => e.stat === key && e.value < 0
            ) || card.choiceR.effects.stats.some(
                e => e.stat === key && e.value < 0
            );
            if (hasNegativeEffect) {
                weight *= 1.5; // 50% more likely
            }
        }
    }

    // Special cards get slightly higher weight to make them more likely to appear
    if (card.type === 'SPECIAL') {
        weight *= 1.3;
    }

    return weight;
}

// Weighted random selection
export function weightedRandomSelect<T>(items: T[], weights: number[]): T {
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < items.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return items[i];
        }
    }

    return items[items.length - 1];
}

// Draw the next card
export function drawNextCard(state: GameState): Card | null {
    // 1. Check for pending anchor cards first (highest priority)
    const pendingAnchors = getPendingAnchorCards(state);
    if (pendingAnchors.length > 0) {
        return pendingAnchors[0];
    }

    // 2. Get eligible random and special cards (not yet played)
    const randomCards = getEligibleRandomCards(state);
    const specialCards = getEligibleSpecialCards(state);

    // Combine pools
    let allEligible = [...randomCards, ...specialCards];

    // 3. If pool is empty, allow fallback (non-once cards can repeat)
    if (allEligible.length === 0) {
        const fallbackCards = getFallbackRandomCards(state);
        if (fallbackCards.length > 0) {
            allEligible = fallbackCards;
        } else {
            return null; // Truly no cards available
        }
    }

    // Calculate weights
    const weights = allEligible.map(card => calculateCardWeight(card, state));

    // Weighted random selection
    return weightedRandomSelect(allEligible, weights);
}

// Mark a card as played
export function markCardPlayed(state: GameState, card: Card): GameState {
    const newState = { ...state };
    newState.playedCards = new Set(state.playedCards);
    newState.playedCards.add(card.id);
    return newState;
}

// Get the first card (C_001) - MUST be C_001
export function getFirstCard(): Card {
    const firstCard = cardMap.get('C_001');
    if (!firstCard) {
        throw new Error('First card C_001 not found');
    }
    return firstCard;
}
