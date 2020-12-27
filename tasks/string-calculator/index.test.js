import { stringCalc } from './index';

describe('Test `stringCalc()` function', () => {
  it('Should work', () => {
    expect(stringCalc('2 + 2')).toBe(4);
    expect(stringCalc('2 * 2')).toBe(4);
    expect(stringCalc('10 / 2')).toBe(5);
    expect(stringCalc('10 - 2')).toBe(8);
    expect(stringCalc('10.1 - 2.1')).toBe(8);
    expect(stringCalc('10,1 - 2,1')).toBe(8);
    expect(stringCalc('10 % 3')).toBe(1);
    expect(stringCalc('10 % 10')).toBe(0);
  });

  it('Should return NaN if argument is not expression', () => {
    expect(stringCalc('')).toBeNaN();
    expect(stringCalc()).toBeNaN();
    expect(stringCalc(null)).toBeNaN();
    expect(stringCalc('2 + 2asd')).toBeNaN();
    expect(stringCalc('asd + asd')).toBeNaN();
    expect(stringCalc('a + 1')).toBeNaN();
    expect(stringCalc([])).toBeNaN();
    expect(stringCalc({})).toBeNaN();
    expect(stringCalc(false)).toBeNaN();
  });

  it('Should return number if argument is string of number', () => {
    expect(stringCalc('1')).toBe(1);
    expect(stringCalc('1.1')).toEqual(1.1);
    expect(stringCalc('1,1')).toEqual(1.1);
    expect(stringCalc('1,1 ')).toBeNaN();
    expect(stringCalc('1,1asd')).toBeNaN();
  })
});
