import { maxPurchases } from './index';

describe('Test `maxPurchases()` function', () => {
  it('Should return correct count', () => {
    expect(maxPurchases([1, 2], 7)).toBe(2);
    expect(maxPurchases([1, 2, 10, 1], 2)).toBe(2);
    expect(maxPurchases([1, 2, 3, 4], 7)).toBe(3);
    expect(maxPurchases([3, 7, 2, 9, 4], 15)).toBe(3);
    expect(maxPurchases([], 15)).toBe(0);
    expect(maxPurchases([1, 2, 3], 0)).toBe(0);
    expect(maxPurchases([2, 3, 4], 1)).toBe(0);
  });
});
