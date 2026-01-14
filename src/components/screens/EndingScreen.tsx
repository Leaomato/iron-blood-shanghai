import { motion } from 'framer-motion';
import type { Ending, GameState } from '../../types';

interface EndingScreenProps {
    ending: Ending;
    gameState: GameState;
    onDismiss: () => void;
}

const colors = {
    bgDark: '#1a1814',
    paper: '#f4efe5',
    paperDark: '#e8e0d2',
    ink: '#2a2622',
    inkLight: '#6b6560',
    inkFaded: '#9a958e',
    blood: '#8c3d3d',
    bloodDark: '#6b2c2c',
    bronze: '#786e5c',
};

export function EndingScreen({ ending, gameState, onDismiss }: EndingScreenProps) {
    // 处理正文换行
    const formatBody = (text: string) => {
        return text.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(to bottom, ${colors.bgDark} 0%, #0f0e0c 50%, ${colors.bgDark} 100%)`,
                padding: '24px',
            }}
        >
            {/* 暗角效果 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    boxShadow: 'inset 0 0 150px rgba(0,0,0,0.7)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '400px',
                    width: '100%',
                }}
            >
                {/* 结局类型标签 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ marginBottom: '24px' }}
                >
                    <span
                        style={{
                            fontSize: '10px',
                            letterSpacing: '0.4em',
                            color: colors.inkFaded,
                            textTransform: 'uppercase',
                        }}
                    >
                        档案封存
                    </span>
                </motion.div>

                {/* 结局标题 */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        fontSize: '32px',
                        fontWeight: 700,
                        color: colors.paper,
                        letterSpacing: '0.1em',
                        marginBottom: '32px',
                        textAlign: 'center',
                        fontFamily: "'Noto Serif SC', serif",
                    }}
                >
                    {ending.title}
                </motion.h1>

                {/* 分隔线 */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    style={{
                        width: '80px',
                        height: '1px',
                        background: `linear-gradient(to right, transparent, ${colors.bronze}, transparent)`,
                        marginBottom: '32px',
                    }}
                />

                {/* 结局正文 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{
                        marginBottom: '40px',
                        maxHeight: '200px',
                        overflowY: 'auto',
                        padding: '0 8px',
                    }}
                >
                    <p
                        style={{
                            fontSize: '14px',
                            color: colors.paperDark,
                            lineHeight: 2,
                            letterSpacing: '0.06em',
                            textAlign: 'center',
                        }}
                    >
                        {formatBody(ending.body)}
                    </p>
                </motion.div>

                {/* 数据统计 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '12px 24px',
                        marginBottom: '40px',
                        width: '100%',
                        maxWidth: '280px',
                    }}
                >
                    <StatItem label="最终精锐" value={gameState.visible.ELITE} />
                    <StatItem label="最终声望" value={gameState.visible.INTL} />
                    <StatItem label="最终后勤" value={gameState.visible.SUPPLY} />
                    <StatItem label="最终士气" value={gameState.visible.MORALE} />
                    <StatItem label="总回合数" value={gameState.turn} span={2} />
                </motion.div>

                {/* 重新开始按钮 */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    whileHover={{
                        backgroundColor: 'rgba(140, 61, 61, 0.2)',
                        borderColor: colors.blood,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onDismiss}
                    style={{
                        padding: '14px 40px',
                        border: `1px solid ${colors.inkLight}`,
                        backgroundColor: 'transparent',
                        color: colors.paperDark,
                        fontSize: '14px',
                        letterSpacing: '0.3em',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Noto Serif SC', serif",
                    }}
                >
                    重阅档案
                </motion.button>
            </motion.div>
        </div>
    );
}

// 统计项组件
function StatItem({ label, value, span }: { label: string; value: number; span?: number }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gridColumn: span ? `span ${span}` : undefined,
                padding: '8px 0',
                borderBottom: `1px solid rgba(107, 101, 96, 0.2)`,
            }}
        >
            <span
                style={{
                    fontSize: '11px',
                    color: colors.inkFaded,
                    letterSpacing: '0.1em',
                }}
            >
                {label}
            </span>
            <span
                style={{
                    fontSize: '16px',
                    fontFamily: 'monospace',
                    color: colors.paper,
                    fontWeight: 600,
                }}
            >
                {value}
            </span>
        </div>
    );
}
