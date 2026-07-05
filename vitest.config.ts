import { defineConfig } from 'vitest/config';
import { SlownessReporter } from './src/index.js';

export default defineConfig({
    test: {
        slowTestThreshold: 2,
        testTimeout: 300,
        reporters: [new SlownessReporter(), 'default']
    }

})