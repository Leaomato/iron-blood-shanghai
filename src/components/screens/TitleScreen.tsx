import { motion } from 'framer-motion';

interface TitleScreenProps {
    onStart: () => void;
}

// Style constants
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

export function TitleScreen({ onStart }: TitleScreenProps) {
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
            }}
        >
            {/* 暗角效果 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    boxShadow: 'inset 0 0 200px rgba(0,0,0,0.8)',
                    pointerEvents: 'none',
                }}
            />

            {/* 主内容 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 32px',
                    textAlign: 'center',
                    maxWidth: '420px',
                }}
            >
                {/* 档案编号 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    style={{ marginBottom: '40px' }}
                >
                    <span
                        style={{
                            fontSize: '10px',
                            letterSpacing: '0.5em',
                            color: colors.inkLight,
                            textTransform: 'uppercase',
                        }}
                    >
                        民国二十六年 · 机密档案
                    </span>
                </motion.div>

                {/* 主标题 */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    style={{
                        fontSize: '52px',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        color: colors.paper,
                        marginBottom: '8px',
                        fontFamily: "'Noto Serif SC', serif",
                    }}
                >
                    铁血淞沪
                </motion.h1>

                {/* 年份 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{
                        fontSize: '32px',
                        letterSpacing: '0.6em',
                        color: colors.blood,
                        fontWeight: 300,
                        fontFamily: 'monospace',
                        marginBottom: '48px',
                    }}
                >
                    1937
                </motion.p>

                {/* 分隔线 */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{
                        width: '120px',
                        height: '1px',
                        background: `linear-gradient(to right, transparent, ${colors.bronze}, transparent)`,
                        marginBottom: '40px',
                    }}
                />

                {/* 核心文案 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{ marginBottom: '48px' }}
                >
                    <p
                        style={{
                            fontSize: '16px',
                            color: colors.paperDark,
                            lineHeight: 1.8,
                            letterSpacing: '0.1em',
                            marginBottom: '16px',
                        }}
                    >
                        这不是一场你能赢的战争。
                    </p>
                    <p
                        style={{
                            fontSize: '14px',
                            color: colors.inkFaded,
                            lineHeight: 1.8,
                            letterSpacing: '0.08em',
                        }}
                    >
                        你唯一能决定的，是<br />
                        <span style={{ color: colors.blood }}>谁先死</span>，
                        <span style={{ color: colors.blood }}>谁后死</span>，
                        <span style={{ color: colors.blood }}>死多少</span>。
                    </p>
                </motion.div>

                {/* 数据 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    style={{
                        fontSize: '11px',
                        color: colors.inkLight,
                        letterSpacing: '0.2em',
                        marginBottom: '40px',
                    }}
                >
                    八十七天 · 二十五万条命 · 一座城
                </motion.p>

                {/* 开始按钮 */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                    whileHover={{
                        backgroundColor: 'rgba(140, 61, 61, 0.15)',
                        borderColor: colors.blood,
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onStart}
                    style={{
                        padding: '16px 48px',
                        border: `1px solid ${colors.inkLight}`,
                        backgroundColor: 'transparent',
                        color: colors.paperDark,
                        fontSize: '14px',
                        letterSpacing: '0.4em',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Noto Serif SC', serif",
                    }}
                >
                    翻开档案
                </motion.button>

                {/* 操作提示 */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.5 }}
                    style={{
                        fontSize: '10px',
                        color: colors.inkLight,
                        marginTop: '32px',
                        letterSpacing: '0.3em',
                    }}
                >
                    左右滑动 · 做出抉择
                </motion.p>
            </motion.div>

            {/* 底部警告 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                }}
            >
                <p
                    style={{
                        fontSize: '9px',
                        color: colors.bloodDark,
                        letterSpacing: '0.2em',
                    }}
                >
                    ⚠ 任一数值归零 = 全局崩溃
                </p>
            </motion.div>


        </div>
    );
}
