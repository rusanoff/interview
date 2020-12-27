import { cutToRange } from './index';

describe('Test `cutToRange()` function', () => {
  it('Should return correct range', () => {
    expect(cutToRange([1, 2, 3, 4, 5, 6])).toBe('1..6');
    expect(cutToRange([1, 2, 3, 5, 6, 8])).toBe('1..3, 5, 6, 8');
    expect(cutToRange([-3, -2, -1, 1, 2, 3])).toBe('-3..-1, 1..3');
    expect(cutToRange([3, 6, 10])).toBe('3, 6, 10');
    expect(cutToRange([])).toBe('');
  });
});
