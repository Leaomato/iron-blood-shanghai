import { useState, useCallback } from 'react';
import type {
    GameState,
    Card,
    Ending,
    VisibleStats,
    Choice,
} from '../types';
import {
    createInitialGameState,
    applyEffects,
    advanceDate,
} from '../engine/gameState';
import {
    drawNextCard,
    markCardPlayed,
    getFirstCard,
} from '../engine/cardDraw';
import {
    getTriggeredEnding,
    checkFinalEnding,
    getEndingById,
} from '../engine/endings';

export type GameScreen = 'title' | 'game' | 'ending';

export interface UseGameEngineReturn {
    // State
    screen: GameScreen;
    gameState: GameState;
    currentCard: Card | null;
    currentEnding: Ending | null;
    isPreviewingChoice: 'L' | 'R' | null;
    affectedStats: Set<keyof VisibleStats>;
    lastStatChanges: Partial<VisibleStats> | null;

    // Actions
    startNewGame: () => void;
    makeChoice: (direction: 'L' | 'R') => void;
    previewChoice: (direction: 'L' | 'R' | null) => void;
    dismissEnding: () => void;
}

export function useGameEngine(): UseGameEngineReturn {
    const [screen, setScreen] = useState<GameScreen>('title');
    const [gameState, setGameState] = useState<GameState>(createInitialGameState);
    const [currentCard, setCurrentCard] = useState<Card | null>(null);
    const [currentEnding, setCurrentEnding] = useState<Ending | null>(null);
    const [isPreviewingChoice, setIsPreviewingChoice] = useState<'L' | 'R' | null>(null);
    const [affectedStats, setAffectedStats] = useState<Set<keyof VisibleStats>>(new Set());
    const [lastStatChanges, setLastStatChanges] = useState<Partial<VisibleStats> | null>(null);

    // Get affected stats from a choice
    const getAffectedStats = useCallback((choice: Choice): Set<keyof VisibleStats> => {
        const affected = new Set<keyof VisibleStats>();
        const visibleKeys: (keyof VisibleStats)[] = ['ELITE', 'INTL', 'SUPPLY', 'MORALE'];

        for (const effect of choice.effects.stats) {
            if (visibleKeys.includes(effect.stat as keyof VisibleStats)) {
                affected.add(effect.stat as keyof VisibleStats);
            }
        }

        // Check conditional effects too
        if (choice.effects.conditionalEffects) {
            for (const conditional of choice.effects.conditionalEffects) {
                for (const effect of conditional.thenEffects) {
                    if (visibleKeys.includes(effect.stat as keyof VisibleStats)) {
                        affected.add(effect.stat as keyof VisibleStats);
                    }
                }
                if (conditional.elseEffects) {
                    for (const effect of conditional.elseEffects) {
                        if (visibleKeys.includes(effect.stat as keyof VisibleStats)) {
                            affected.add(effect.stat as keyof VisibleStats);
                        }
                    }
                }
            }
        }

        return affected;
    }, []);

    // Preview a choice (show affected stats)
    const previewChoice = useCallback((direction: 'L' | 'R' | null) => {
        setIsPreviewingChoice(direction);

        if (direction && currentCard) {
            const choice = direction === 'L' ? currentCard.choiceL : currentCard.choiceR;
            setAffectedStats(getAffectedStats(choice));
        } else {
            setAffectedStats(new Set());
        }
    }, [currentCard, getAffectedStats]);

    // Start a new game - MUST start with C_001
    const startNewGame = useCallback(() => {
        const initialState = createInitialGameState();
        const firstCard = getFirstCard(); // Always C_001

        setGameState(initialState);
        setCurrentCard(firstCard);
        setCurrentEnding(null);
        setIsPreviewingChoice(null);
        setAffectedStats(new Set());
        setLastStatChanges(null);
        setScreen('game');
    }, []);

    // Make a choice
    const makeChoice = useCallback((direction: 'L' | 'R') => {
        if (!currentCard) return;

        const choice = direction === 'L' ? currentCard.choiceL : currentCard.choiceR;

        // Apply effects
        const { newState, visibleChanges } = applyEffects(gameState, choice.effects, currentCard);

        // Mark card as played
        let updatedState = markCardPlayed(newState, currentCard);

        // Clear preview
        setIsPreviewingChoice(null);
        setAffectedStats(new Set());

        // Store last stat changes for display (direction only, no values)
        setLastStatChanges(visibleChanges);

        // Clear stat changes after display
        setTimeout(() => {
            setLastStatChanges(null);
        }, 1200);

        // Check for forced ending from card effect
        if (choice.effects.triggerEnding) {
            const forcedEnding = getEndingById(choice.effects.triggerEnding);
            if (forcedEnding) {
                setCurrentEnding(forcedEnding);
                setGameState(updatedState);
                setCurrentCard(null);
                setScreen('ending');
                return;
            }
        }

        // Check for triggered ending based on state
        const triggeredEnding = getTriggeredEnding(updatedState);
        if (triggeredEnding) {
            setCurrentEnding(triggeredEnding);
            setGameState(updatedState);
            setCurrentCard(null);
            setScreen('ending');
            return;
        }

        // Advance date
        updatedState = advanceDate(updatedState);

        // Check for final ending after 11.26
        const finalEnding = checkFinalEnding(updatedState);
        if (finalEnding) {
            setCurrentEnding(finalEnding);
            setGameState(updatedState);
            setCurrentCard(null);
            setScreen('ending');
            return;
        }

        // Draw next card
        const nextCard = drawNextCard(updatedState);

        if (nextCard) {
            setCurrentCard(nextCard);
            setGameState(updatedState);
        } else {
            // No more cards - trigger default ending
            const defaultEnding = getEndingById('E_05');
            if (defaultEnding) {
                setCurrentEnding(defaultEnding);
                setGameState(updatedState);
                setCurrentCard(null);
                setScreen('ending');
            }
        }
    }, [currentCard, gameState]);

    // Dismiss ending and return to title
    const dismissEnding = useCallback(() => {
        setScreen('title');
        setCurrentEnding(null);
        setCurrentCard(null);
        setGameState(createInitialGameState());
        setLastStatChanges(null);
    }, []);

    return {
        screen,
        gameState,
        currentCard,
        currentEnding,
        isPreviewingChoice,
        affectedStats,
        lastStatChanges,
        startNewGame,
        makeChoice,
        previewChoice,
        dismissEnding,
    };
}
