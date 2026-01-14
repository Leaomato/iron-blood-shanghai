import { phase1Anchors } from './phase1Anchors';
import { phase1Random } from './phase1Random';
import { phase2Anchors } from './phase2Anchors';
import { phase2Random } from './phase2Random';
import { phase3Anchors } from './phase3Anchors';
import { phase3Random } from './phase3Random';
import { specialCards } from './special';
import type { Card } from '../../types';

// Export all cards organized by type
export const allAnchorCards: Card[] = [
    ...phase1Anchors,
    ...phase2Anchors,
    ...phase3Anchors,
];

export const allRandomCards: Card[] = [
    ...phase1Random,
    ...phase2Random,
    ...phase3Random,
];

export const allSpecialCards: Card[] = specialCards;

// Export all cards as a single array
export const allCards: Card[] = [
    ...allAnchorCards,
    ...allRandomCards,
    ...allSpecialCards,
];

// Export card lookup map
export const cardMap: Map<string, Card> = new Map(
    allCards.map(card => [card.id, card])
);

// Phase-specific exports
export const phase1Cards = {
    anchors: phase1Anchors,
    random: phase1Random,
};

export const phase2Cards = {
    anchors: phase2Anchors,
    random: phase2Random,
};

export const phase3Cards = {
    anchors: phase3Anchors,
    random: phase3Random,
};

// Re-export individual modules
export {
    phase1Anchors,
    phase1Random,
    phase2Anchors,
    phase2Random,
    phase3Anchors,
    phase3Random,
    specialCards,
};
