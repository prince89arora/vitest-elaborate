import { describe, it, expect } from 'vitest';
import { currentTime } from "../src/utils.js"

describe('utils', () => {
    it('example util test', () => {
        const time = currentTime();
        expect(time).not.toBeUndefined();
    });
})