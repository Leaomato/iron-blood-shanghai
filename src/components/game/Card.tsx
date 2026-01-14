import { useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import type { Card as CardType } from '../../types';

interface CardProps {
    card: CardType;
    onChoice: (direction: 'L' | 'R') => void;
    onPreview: (direction: 'L' | 'R' | null) => void;
}

const colors = {
    paper: '#f4efe5',
    paperDark: '#e8e0d2',
    paperAged: '#d8d0c2',
    ink: '#2a2622',
    inkLight: '#6b6560',
    inkFaded: '#9a958e',
    blood: '#8c3d3d',
    bloodDark: '#6b2c2c',
    bronze: '#786e5c',
};

export function Card({ card, onChoice, onPreview }: CardProps) {
    const [currentDirection, setCurrentDirection] = useState<'L' | 'R' | null>(null);
    const [exitDirection, setExitDirection] = useState<'L' | 'R' | null>(null);

    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 0, 200], [-4, 0, 4]);
    const opacity = useTransform(x, [-350, -200, 0, 200, 350], [0, 1, 1, 1, 0]);

    useEffect(() => {
        x.set(0);
        setCurrentDirection(null);
        setExitDirection(null);
    }, [card.id, x]);

    const handleDrag = useCallback((_: unknown, info: PanInfo) => {
        const threshold = 40;
        if (info.offset.x < -threshold && currentDirection !== 'L') {
            setCurrentDirection('L');
            onPreview('L');
        } else if (info.offset.x > threshold && currentDirection !== 'R') {
            setCurrentDirection('R');
            onPreview('R');
        } else if (Math.abs(info.offset.x) < threshold && currentDirection !== null) {
            setCurrentDirection(null);
            onPreview(null);
        }
    }, [currentDirection, onPreview]);

    const handleDragEnd = useCallback((_: unknown, info: PanInfo) => {
        const threshold = 100;

        if (info.offset.x < -threshold) {
            setExitDirection('L');
            onPreview(null);
            setTimeout(() => onChoice('L'), 180);
        } else if (info.offset.x > threshold) {
            setExitDirection('R');
            onPreview(null);
            setTimeout(() => onChoice('R'), 180);
        } else {
            setCurrentDirection(null);
            onPreview(null);
        }
    }, [onChoice, onPreview]);

    // 处理卡片正文的换行
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
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 16px',
            }}
        >
            <motion.div
                drag={exitDirection === null ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                style={{
                    x,
                    rotate,
                    opacity,
                    width: '100%',
                    maxWidth: '360px',
                    maxHeight: '85vh',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: colors.paper,
                    borderRadius: '4px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)',
                    cursor: 'grab',
                    position: 'relative',
                    overflow: 'hidden',
                }}
                animate={
                    exitDirection === 'L'
                        ? { x: -450, opacity: 0, rotate: -8 }
                        : exitDirection === 'R'
                            ? { x: 450, opacity: 0, rotate: 8 }
                            : {}
                }
                transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 35,
                    mass: 0.6,
                }}
            >


                {/* 机密印章 */}
                {card.type === 'ANCHOR' && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            fontSize: '9px',
                            fontWeight: 600,
                            color: colors.blood,
                            border: `1.5px solid ${colors.blood}`,
                            padding: '2px 8px',
                            letterSpacing: '0.15em',
                            transform: 'rotate(-3deg)',
                            opacity: 0.85,
                        }}
                    >
                        机密
                    </div>
                )}

                {/* 卡片头部 */}
                <div
                    style={{
                        padding: '32px 20px 16px',
                        borderBottom: `1px solid ${colors.paperDark}`,
                    }}
                >
                    <span
                        style={{
                            fontSize: '11px',
                            color: colors.blood,
                            letterSpacing: '0.2em',
                            display: 'block',
                            marginBottom: '6px',
                        }}
                    >
                        {card.speaker}
                    </span>
                    <h2
                        style={{
                            fontSize: '24px',
                            fontWeight: 600,
                            color: colors.ink,
                            letterSpacing: '0.1em',
                            lineHeight: 1.3,
                            fontFamily: "'Noto Serif SC', serif",
                        }}
                    >
                        {card.title}
                    </h2>
                </div>

                {/* 卡片正文 */}
                <div
                    style={{
                        padding: '16px 20px',
                        backgroundColor: colors.paper,
                        flex: 1,
                        overflow: 'hidden',
                    }}
                >
                    <p
                        style={{
                            fontSize: '13px',
                            color: colors.inkLight,
                            lineHeight: 1.8,
                            letterSpacing: '0.03em',
                        }}
                    >
                        {formatBody(card.body)}
                    </p>
                </div>

                {/* 选项区域 */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        borderTop: `1px solid ${colors.paperDark}`,
                    }}
                >
                    {/* 左选项 */}
                    <div
                        style={{
                            padding: '16px',
                            borderRight: `1px solid ${colors.paperDark}`,
                            backgroundColor:
                                currentDirection === 'L'
                                    ? 'rgba(140, 61, 61, 0.1)'
                                    : 'transparent',
                            transition: 'background-color 0.2s ease',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span
                                style={{
                                    fontSize: '10px',
                                    color: colors.blood,
                                    marginTop: '2px',
                                }}
                            >
                                ◀
                            </span>
                            <div>
                                <h3
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        color: colors.ink,
                                        marginBottom: '4px',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    {card.choiceL.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '11px',
                                        color: colors.inkFaded,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {card.choiceL.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 右选项 */}
                    <div
                        style={{
                            padding: '16px',
                            backgroundColor:
                                currentDirection === 'R'
                                    ? 'rgba(120, 110, 92, 0.1)'
                                    : 'transparent',
                            transition: 'background-color 0.2s ease',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '6px',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <div style={{ textAlign: 'right' }}>
                                <h3
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        color: colors.ink,
                                        marginBottom: '4px',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    {card.choiceR.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '11px',
                                        color: colors.inkFaded,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {card.choiceR.description}
                                </p>
                            </div>
                            <span
                                style={{
                                    fontSize: '10px',
                                    color: colors.bronze,
                                    marginTop: '2px',
                                }}
                            >
                                ▶
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
