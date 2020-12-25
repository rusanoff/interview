import { extendNumberPrototype } from './index';

describe('Test `extendNumberPrototype()` function', () => {
  beforeAll(() => {
    extendNumberPrototype();
  });

  it('Should extend prototype of Number class', () => {
    expect(Number.prototype.plus).toBeDefined();
  });

  it('Should get correct value', () => {
    expect((5).plus(2).plus()).toBe(8);
  });

  it('Should get correct value if type of argument is string', () => {
    expect((5).plus('2').plus('0')).toBe(7);
  });

  it('Should get NaN or cast value if type of argument is not string or number', () => {
    expect((5).plus('2').plus([1, 2, 3])).toBeNaN();
    expect((5).plus('2').plus({ a: { b: 2 } })).toBeNaN();
    expect((5).plus('2').plus(true)).toBe(8);
    expect((5).plus('2').plus([])).toBe(7);
  });
});
