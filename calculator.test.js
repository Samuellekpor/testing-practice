const Calcualtor = require('./calculator');
const calc = new Calcualtor(2,4);
const calc2 = new Calcualtor(8,6);
const calc3 = new Calcualtor(10,9);
const added = calc.addition();

describe('Addition tests', () => {
  test('The addition of 2 and 4', () => {
    expect(added).toBe(6);
  });

  test('The addition of 8 and 6', () => {
    expect(calc2.addition()).toBe(14);
  });
  
  test('The addition of 2 and 4', () => {
    expect(added).toBeLessThan(10);
  })
});

describe('Substraction tests', () => {
  test('Substraction of 2 and 4', () => {
    expect(calc.substract()).toBe(-2);
  });

  test('Substraction of 8 and 6', () => {
    expect(calc2.substract()).toBe(2);
  });

  test('Substraction of 10 and 9', () => {
    expect(calc3.substract()).toBe(1);
  })
})