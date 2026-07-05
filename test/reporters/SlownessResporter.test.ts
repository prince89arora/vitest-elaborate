import { describe, expect, it } from 'vitest';
import { SlownessReporter } from '../../src';

describe('SlownessReporter', () => {

    it('Should fetch required information from config', async () => {
        const slownessReporter = new SlownessReporter();
        slownessReporter.onInit({
            config: {
                slowTestThreshold: 2,
                testTimeout: 200
            }
        } as any);

        await new Promise(resolve => setTimeout(resolve, 200));
        

        expect(slownessReporter._slowTestThreshold).toBe(2);
        expect(slownessReporter._testTimeout).toBe(200);
    });

});