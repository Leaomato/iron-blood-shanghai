import { motion } from 'framer-motion';
import type { GameState, Card as CardType, VisibleStatKey } from '../../types';
import { StatsBar } from '../game/StatsBar';
import { DateDisplay } from '../game/DateDisplay';
import { Card } from '../game/Card';

interface GameScreenProps {
    gameState: GameState;
    currentCard: CardType | null;
    isPreviewingChoice: 'L' | 'R' | null;
    affectedStats: Set<VisibleStatKey>;
    lastStatChanges: Partial<{ ELITE: number; INTL: number; SUPPLY: number; MORALE: number }> | null;
    onChoice: (direction: 'L' | 'R') => void;
    onPreview: (direction: 'L' | 'R' | null) => void;
}

const colors = {
    paper: '#f4efe5',
    paperDark: '#e8e0d2',
    inkLight: '#6b6560',
    blood: '#8c3d3d',
};

export function GameScreen({
    gameState,
    currentCard,
    isPreviewingChoice,
    affectedStats,
    lastStatChanges,
    onChoice,
    onPreview,
}: GameScreenProps) {
    // 检查是否处于危机状态
    const isInCrisis = gameState.visible.ELITE <= 30 ||
        gameState.visible.MORALE <= 30 ||
        gameState.visible.SUPPLY <= 30 ||
        gameState.visible.INTL <= 30;

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: colors.paper,
            }}
        >
            {/* 边缘暗角 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    boxShadow: 'inset 0 0 80px rgba(0,0,0,0.08)',
                    pointerEvents: 'none',
                    zIndex: 5,
                }}
            />

            {/* 危机状态边框 */}
            {isInCrisis && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        border: `2px solid ${colors.blood}`,
                        opacity: 0.3,
                        pointerEvents: 'none',
                        zIndex: 6,
                    }}
                />
            )}

            {/* 状态栏 */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <StatsBar
                    stats={gameState.visible}
                    affectedStats={affectedStats}
                    isPreviewing={isPreviewingChoice !== null}
                    lastChanges={lastStatChanges}
                />
            </div>

            {/* 日期显示 */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <DateDisplay
                    date={gameState.currentDate}
                    phase={gameState.phase}
                    turn={gameState.turn}
                />
            </div>

            {/* 卡片区域 */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 8px 24px',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {currentCard ? (
                    <Card
                        key={currentCard.id}
                        card={currentCard}
                        onChoice={onChoice}
                        onPreview={onPreview}
                    />
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center' }}
                    >
                        <p
                            style={{
                                fontSize: '12px',
                                color: colors.inkLight,
                                letterSpacing: '0.2em',
                            }}
                        >
                            战局演变中...
                        </p>
                    </motion.div>
                )}
            </div>

            {/* 底部提示 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    zIndex: 10,
                }}
            >
                <p
                    style={{
                        fontSize: '9px',
                        color: colors.inkLight,
                        letterSpacing: '0.4em',
                    }}
                >
                    ← 滑动抉择 →
                </p>
            </div>
        </div>
    );
}
