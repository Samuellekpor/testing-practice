const reverseString = require('./reverse');

test('reverse of a string', () => {
  expect(reverseString('hello')).toBe('olleh');
})