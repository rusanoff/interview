import { findUnique } from './index';

describe('Test `findUnique()` function', () => {
  it('Should be true', () => {
    expect(findUnique(['a', 'a Aa', 'ab a', 'AA a'])).toBe('ab a');
    expect(findUnique(['aBca', 'ac b', 'bac', 'fO o', 'bca', 'cabaccBA', ' Ccba'])).toBe('fO o');
    expect(findUnique(['a sd', 'aBca', 'ac b', 'bac', 'fO o', 'bca', 'cabaccBA', ' Ccba'])).toBe('a sd');
    expect(findUnique(['aBca', 'fO o'])).toBe('fO o');
    expect(findUnique([' aBca '])).toBe(' aBca ');
    expect(findUnique([])).toBeUndefined();
    expect(findUnique(['aBca', 'ac b', 'bac', 'bca', 'cabaccBA', ' Ccba'])).toBeUndefined();
  });
});
