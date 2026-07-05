import { TestModule, Vitest, type Reporter } from 'vitest/node';
import type { SlownessConfig, SlowTest } from '../types/slowness';
import { SlownessMapping } from '../constants';

class SlownessReporter implements Reporter {

    _slowTestThreshold: number = -1;
    _testTimeout: number = -1;

    _slowTests: Record<string, SlowTest> = {};

    private _getSlownessLevel(duration: number): SlownessConfig {
        const percentage = Number(duration / this._testTimeout * 100);
        return Object.values(SlownessMapping).find(mapping => percentage <= mapping.min) ?? SlownessMapping.low;
    }

    onInit(vitest: Vitest): void {
        this._slowTestThreshold = vitest.config.slowTestThreshold;
        this._testTimeout = vitest.config.testTimeout;
    }

    onTestModuleEnd(testModule: TestModule): void {
        const { duration } = testModule.diagnostic();
        if (duration > this._slowTestThreshold) {
            const { level } = this._getSlownessLevel(duration);
            const slowTest: SlowTest = { duration, level };
            this._slowTests[testModule.relativeModuleId] = slowTest;
        }
    }

    onTestRunEnd(): void {
        const slowTestKeys = Object.keys(this._slowTests);
        if (slowTestKeys.length === 0) {
            return;
        }

        console.log("---------------------------------------------------");
        console.log("Slow Tests Report...");
        console.log("---------------------------------------------------");
        slowTestKeys.forEach(testPath => {
            const slowTestValue = this._slowTests[testPath];
            const color = 31;
            const testDuration = Number(slowTestValue?.duration).toFixed(2);
            console.log(`\x1b[${color}m [${slowTestValue?.level}] ${testPath} \x1b[0m` + "  " + `\x1b[${color}m (${testDuration}ms) \x1b[0m`);
        });
    }
}

export default SlownessReporter;