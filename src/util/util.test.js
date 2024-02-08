const { generateText, checkAndGenerate } = require('./util');

test('generateText function exists', () => {
	expect(generateText).toBeDefined();
});

test('should output name and age', () => {
	const text = generateText('Michał', 30);
	expect(text).toBe('Michał (30 years old)');
});

test('should generate a valid text output', () => {
	const text = checkAndGenerate('Michał', 30);
	expect(text).toBe('Michał (30 years old)');
});
