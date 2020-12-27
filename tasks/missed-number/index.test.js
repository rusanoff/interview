import { missedNumber } from './index';

describe('Test `missedNumber()` function', () => {
  it('Should return correct missed number', () => {
    expect(missedNumber([0, 1, 3])).toBe(2);
    expect(missedNumber([-2, 0, 1, 2])).toBe(-1);
    expect(missedNumber([-1, 1, 2, 3])).toBe(0);
    expect(missedNumber([-1, 0, 1, 3])).toBe(2);
    expect(missedNumber([])).toBeUndefined();
    expect(missedNumber([1, 2, 3])).toBeUndefined();
  });
});
