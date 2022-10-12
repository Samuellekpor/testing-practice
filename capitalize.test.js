const capitalize = require('./capitalize');

test('The capitalized form of string', () => {
  expect(capitalize('string')).toMatch(/String/);
  expect(capitalize('string')).not.toMatch(/string/);
})

test('The capitalized form of me before you', () => {
  expect(capitalize('me before you')).toMatch(/Me before you/);
})