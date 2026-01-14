// ==================== VISIBLE STATS ====================
export interface VisibleStats {
    ELITE: number;    // 精锐战力 (0-100)
    INTL: number;     // 国际声望 (0-100)
    SUPPLY: number;   // 后勤财政 (0-100)
    MORALE: number;   // 军民士气 (0-100)
}

// ==================== HIDDEN STATS ====================
export interface HiddenStats {
    JAP_AGGRO: number;        // 日军侵略度 (0-100)
    GERMAN_TRUST: number;     // 德顾信任 (0-100)
    WARLORD_LOYALTY: number;  // 军阀忠诚 (0-100)
    REFUGEE_CRISIS: number;   // 难民危机 (0-100)
    TIME_DELAY: number;       // 阻滞天数 (累计)
    NANJING_DEFENSE: number;  // 南京防御 (0-100)
    COMMUNIST_INFL: number;   // 赤色影响 (0-100)
    SCORCHED_EARTH: number;   // 焦土指数 (0-100)
}

// ==================== FLAGS ====================
export interface Flags {
    IzumoSunk: boolean;         // 击沉出云
    SpyCaught: boolean;         // 抓获黄浚
    GasPrep: boolean;           // 防毒准备
    SihangHero: boolean;        // 四行孤军
    JinshanweiPrep: boolean;    // 防备金山卫
    TrautmannAccepted: boolean; // 接受调停
    PanayProvoked: boolean;     // 帕奈号煽动
    PreemptiveStrike: boolean;  // 先发制人
    FullWar: boolean;           // 全面开战
    ForeignPress: boolean;      // 外国记者
    WarehouseHeld: boolean;     // 四行仓库死守
    ScorchedEarth: boolean;     // 焦土政策
}

// ==================== STAT KEYS ====================
export type VisibleStatKey = keyof VisibleStats;
export type HiddenStatKey = keyof HiddenStats;
export type FlagKey = keyof Flags;
export type StatKey = VisibleStatKey | HiddenStatKey;

// ==================== EFFECTS ====================
export interface StatEffect {
    stat: StatKey;
    value: number;
    isBattleDamage?: boolean;  // If true, multiply by battle loss multiplier
    isFixed?: boolean;         // If true, don't apply multiplier (anchor fixed values)
}

export interface FlagEffect {
    flag: FlagKey;
    value: boolean;
}

export interface ConditionalEffect {
    condition: {
        flag?: FlagKey;
        flagValue?: boolean;
        stat?: StatKey;
        comparison?: 'gt' | 'lt' | 'gte' | 'lte' | 'eq';
        value?: number;
    };
    thenEffects: StatEffect[];
    elseEffects?: StatEffect[];
}

export interface ChoiceEffects {
    stats: StatEffect[];
    flags?: FlagEffect[];
    conditionalEffects?: ConditionalEffect[];
    unlockCards?: string[];        // Card IDs to add to pool
    triggerEnding?: string;        // Force ending on next turn
    extraTimeDelay?: number;       // Additional TIME_DELAY beyond the base +1
    successProbability?: number;   // For random success events (0-1)
    successFlag?: FlagKey;         // Flag to set on success
    successEffects?: StatEffect[]; // Effects on success
}

// ==================== CHOICE ====================
export interface Choice {
    title: string;
    description: string;
    effects: ChoiceEffects;
}

// ==================== CARD TYPES ====================
export type CardType = 'ANCHOR' | 'RANDOM' | 'SPECIAL' | 'ENDING';
export type Phase = 1 | 2 | 3 | 'ALL';

// ==================== CARD ====================
export interface Card {
    id: string;
    type: CardType;
    phase: Phase;
    date?: string;              // For ANCHOR cards, format: "MM.DD" e.g., "08.09"
    speaker: string;
    title: string;
    body: string;
    choiceL: Choice;
    choiceR: Choice;
    conditions?: CardCondition[];  // For SPECIAL cards
    once?: boolean;             // If true, can only appear once
    cooldown?: number;          // Turns before can appear again
}

// ==================== CARD CONDITION ====================
export interface CardCondition {
    type: 'stat' | 'flag' | 'cardPlayed';
    stat?: StatKey;
    comparison?: 'gt' | 'lt' | 'gte' | 'lte' | 'eq';
    value?: number;
    flag?: FlagKey;
    flagValue?: boolean;
    cardId?: string;
}

// ==================== ENDING ====================
export interface Ending {
    id: string;
    title: string;
    body: string;
    conditions: EndingCondition[];
    priority: number;  // Lower = higher priority
    buttonText: string;
    isLocked?: boolean;  // For E_11 钢铁长城
}

export interface EndingCondition {
    type: 'stat' | 'flag' | 'phase' | 'date' | 'default';
    stat?: StatKey;
    comparison?: 'gt' | 'lt' | 'gte' | 'lte' | 'eq';
    value?: number;
    flag?: FlagKey;
    flagValue?: boolean;
    phase?: number;
    afterDate?: string;
}

// ==================== GAME STATE ====================
export interface GameState {
    visible: VisibleStats;
    hidden: HiddenStats;
    flags: Flags;
    currentDate: Date;
    phase: 1 | 2 | 3;
    turn: number;
    playedCards: Set<string>;
    cardCooldowns: Map<string, number>;  // cardId -> turn when available
    pendingAnchors: string[];  // Anchor card IDs that need to be played
    currentCard: Card | null;
    currentEnding: Ending | null;
    isGameOver: boolean;
    lastChoiceDirection: 'L' | 'R' | null;
    statChanges: Partial<VisibleStats> | null;  // For displaying +/- after choice
}

// ==================== INITIAL VALUES ====================
export const INITIAL_VISIBLE_STATS: VisibleStats = {
    ELITE: 85,
    INTL: 40,
    SUPPLY: 60,
    MORALE: 50,
};

export const INITIAL_HIDDEN_STATS: HiddenStats = {
    JAP_AGGRO: 10,
    GERMAN_TRUST: 60,
    WARLORD_LOYALTY: 50,
    REFUGEE_CRISIS: 10,
    TIME_DELAY: 0,
    NANJING_DEFENSE: 20,
    COMMUNIST_INFL: 0,
    SCORCHED_EARTH: 0,
};

export const INITIAL_FLAGS: Flags = {
    IzumoSunk: false,
    SpyCaught: false,
    GasPrep: false,
    SihangHero: false,
    JinshanweiPrep: false,
    TrautmannAccepted: false,
    PanayProvoked: false,
    PreemptiveStrike: false,
    FullWar: false,
    ForeignPress: false,
    WarehouseHeld: false,
    ScorchedEarth: false,
};

// ==================== PHASE DATES ====================
export const PHASE_DATES = {
    1: { start: '1937-08-09', end: '1937-08-22' },
    2: { start: '1937-08-23', end: '1937-10-26' },
    3: { start: '1937-10-27', end: '1937-11-26' },
};

// ==================== STAT DISPLAY INFO ====================
export const STAT_DISPLAY: Record<VisibleStatKey, { name: string; icon: string }> = {
    ELITE: { name: '精锐', icon: '⚔️' },
    INTL: { name: '声望', icon: '🌐' },
    SUPPLY: { name: '后勤', icon: '📦' },
    MORALE: { name: '士气', icon: '🔥' },
};

// ==================== PHASE NAMES ====================
export const PHASE_NAMES: Record<1 | 2 | 3, string> = {
    1: '先发制人',
    2: '血肉磨坊',
    3: '崩溃与撤退',
};
