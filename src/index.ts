import type { Reporter, Vitest } from 'vitest/node';


class CustomReporter implements Reporter {

    _slowTestThreshold: number = -1;
    _testTimeout: number = -1;

    // _slowTests: Record<string, SlowTest> = {};

    // private getSlownessLevel(duration: number) {
        // const percentage = Number(duration / this._testTimeout * 100);
    // }

    onInit(vitest: Vitest): void {
        this._slowTestThreshold = vitest.config.slowTestThreshold;
        this._testTimeout = vitest.config.testTimeout;
    }

    // onTestModuleEnd(testModule: TestModule): void {
        // const { duration } = testModule.diagnostic();
        // if (duration > this._slowTestThreshold) {
            // const percentage = duration / this._testTimeout * 100;
            // const color = percentage > 50 ? 31 : 33;
            // const testDuration = Number(duration).toFixed(2);
            // console.log(`\x1b[${color}m ${module.relativeModuleId} \x1b[0m` + "  " + `\x1b[${color}m (${testDuration}ms) \x1b[0m`);
        // }
    // }

    // onTestRunEnd(
    //     testModules: ReadonlyArray<TestModule>, 
    //     unhandledErrors: ReadonlyArray<SerializedError>, 
    //     reason: TestRunEndReason
    // ): void{
    //     console.log(reason);
    //     testModules.forEach(module => {
    //         const { duration } = module.diagnostic();

    //         if (duration > this._slowTestThreshold) {
    //             // TODO: moving this to other function
    //         }
    //     })
    // }
}

export default CustomReporter;