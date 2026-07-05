import type { SlownessConfig, SlownessLevel } from "./types/slowness";

export const SlownessMapping: Record<SlownessLevel, SlownessConfig> = {
    
 'low': {
    min: 25,
    level: 'low'
 },

 'critical': {
    min: 90,
    level: 'critical'
 },

 'high': {
    min: 75,
    level: 'high'
 },

 'medium': {
    min: 50,
    level: 'medium'
 }

} as const;