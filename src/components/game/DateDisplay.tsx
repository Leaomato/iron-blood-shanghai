interface DateDisplayProps {
    date: Date;
    phase: number;
    turn: number;
}

const colors = {
    paper: '#f4efe5',
    paperDark: '#e8e0d2',
    ink: '#2a2622',
    inkLight: '#6b6560',
    blood: '#8c3d3d',
    bronze: '#786e5c',
};

const PHASE_INFO = [
    { name: '序幕', color: colors.bronze },
    { name: '血战', color: colors.blood },
    { name: '溃退', color: colors.blood },
];

// 格式化日期为 YYYY.MM.DD
function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

export function DateDisplay({ date, phase, turn }: DateDisplayProps) {
    const phaseInfo = PHASE_INFO[phase - 1] || PHASE_INFO[0];
    const formattedDate = formatDate(date);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 16px',
                backgroundColor: colors.paper,
                borderBottom: `1px solid ${colors.paperDark}`,
            }}
        >
            {/* 日期 */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '8px',
                }}
            >
                <span
                    style={{
                        fontSize: '13px',
                        fontFamily: 'monospace',
                        color: colors.ink,
                        letterSpacing: '0.05em',
                    }}
                >
                    {formattedDate}
                </span>
                <span
                    style={{
                        fontSize: '11px',
                        color: colors.inkLight,
                    }}
                >
                    第{turn}日
                </span>
            </div>

            {/* 阶段 */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                }}
            >
                <span
                    style={{
                        fontSize: '11px',
                        color: colors.inkLight,
                        letterSpacing: '0.15em',
                    }}
                >
                    {phaseInfo.name}
                </span>
                <span
                    style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: phaseInfo.color,
                        opacity: 0.8,
                    }}
                />
            </div>
        </div>
    );
}
