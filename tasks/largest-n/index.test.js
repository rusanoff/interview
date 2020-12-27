import { largestN } from './index';

describe('Test `largestN()` function', () => {
  it('Should return correct number', () => {
    expect(largestN([2, 4, 1, 5, 3], 1)).toBe(5);
    expect(largestN([2, 4, 1, 5, 3], 2)).toBe(4);
    expect(largestN([1, 8, 3, 2], 4)).toBe(1);
    expect(largestN([1, 8, 3, 2], 5)).toBeUndefined();
    expect(largestN([], 0)).toBeUndefined();
  });
});
