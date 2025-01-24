const { Cleaner } = require('./cleaner.js');

describe('Cleaner', () => {
    test('should initialize with correct options', () => {
        const patterns = ['*.log'];
        const exclude = ['important.log'];
        const dryRun = true;

        const cleaner = new Cleaner({ patterns, exclude, dryRun });

        expect(cleaner.patterns).toEqual(patterns);
        expect(cleaner.exclude).toEqual(exclude);
        expect(cleaner.dryRun).toBe(dryRun);
    });
}); 