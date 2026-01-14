import type { VisibleStats, VisibleStatKey } from '../../types';

interface StatsBarProps {
    stats: VisibleStats;
    affectedStats: Set<VisibleStatKey>;
    isPreviewing: boolean;
    lastChanges: Partial<VisibleStats> | null;
}

const colors = {
    paper: '#f4efe5',
    paperDark: '#e8e0d2',
    ink: '#2a2622',
    inkLight: '#6b6560',
    inkFaded: '#9a958e',
    blood: '#8c3d3d',
    bloodLight: '#a85555',
};

const STAT_CONFIG: { key: VisibleStatKey; label: string; icon: string }[] = [
    { key: 'ELITE', label: '精锐', icon: '⚔' },
    { key: 'INTL', label: '声望', icon: '🌐' },
    { key: 'SUPPLY', label: '后勤', icon: '📦' },
    { key: 'MORALE', label: '士气', icon: '🔥' },
];

export function StatsBar({ stats, affectedStats, isPreviewing, lastChanges }: StatsBarProps) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                padding: '16px 12px 12px',
                backgroundColor: colors.paper,
                borderBottom: `1px solid ${colors.paperDark}`,
            }}
        >
            {STAT_CONFIG.map(({ key, label, icon }) => {
                const value = stats[key];
                const isAffected = affectedStats.has(key);
                const change = lastChanges?.[key];
                const isDanger = value <= 30;
                const isCritical = value <= 15;

                return (
                    <div
                        key={key}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        {/* 数值 */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                        >
                            {/* 数值 */}
                            <span
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 600,
                                    fontFamily: 'monospace',
                                    color: isCritical
                                        ? colors.blood
                                        : isDanger
                                            ? colors.bloodLight
                                            : colors.ink,
                                    transition: 'color 0.3s ease',
                                    minWidth: '36px',
                                    textAlign: 'center',
                                }}
                            >
                                {value}
                            </span>

                            {/* 指示器容器 - 固定宽度防止跳动 */}
                            <span
                                style={{
                                    width: '16px',
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {/* 预览指示器 */}
                                {isPreviewing && isAffected && (
                                    <span
                                        style={{
                                            fontSize: '8px',
                                            color: colors.blood,
                                        }}
                                    >
                                        ●
                                    </span>
                                )}

                                {/* 变化指示 */}
                                {!isPreviewing && change !== undefined && change !== 0 && (
                                    <span
                                        style={{
                                            fontSize: '10px',
                                            fontWeight: 600,
                                            color: change > 0 ? '#4a7c4a' : colors.blood,
                                        }}
                                    >
                                        {change > 0 ? '▲' : '▼'}
                                    </span>
                                )}
                            </span>
                        </div>

                        {/* 标签 */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '3px',
                            }}
                        >
                            <span style={{ fontSize: '10px' }}>{icon}</span>
                            <span
                                style={{
                                    fontSize: '10px',
                                    color: colors.inkLight,
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {label}
                            </span>
                        </div>

                        {/* 危险条 */}
                        {isDanger && (
                            <div
                                style={{
                                    width: '32px',
                                    height: '2px',
                                    backgroundColor: colors.blood,
                                    opacity: isCritical ? 1 : 0.5,
                                    borderRadius: '1px',
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
