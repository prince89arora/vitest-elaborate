export type SlownessLevel = 'critical' | 'high' | 'medium' | 'low'; 

export interface SlownessConfig {
    min: number;
    level: SlownessLevel;
}

export interface SlowTest {
    duration: number;
    level: SlownessLevel;
}