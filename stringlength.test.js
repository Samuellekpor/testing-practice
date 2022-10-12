const stringLength = require('./stringlength') ;

test('The number of character in the string', () => {
  expect(stringLength('airplane')).toBe(8);
})

test('The number of character in the string', () => {
  expect(stringLength('air')).toBeLessThan(4);
})

test('The number of character in the string', () => {
  expect(stringLength('magic')).toBeGreaterThan(1);
})