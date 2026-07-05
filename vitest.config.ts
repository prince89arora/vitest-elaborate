import { defineConfig } from 'vitest/config';
import CustomReporter from './src/index.js';

export default defineConfig({
    test: {
        slowTestThreshold: 0,
        reporters: [new CustomReporter(), 'default']
    }

})