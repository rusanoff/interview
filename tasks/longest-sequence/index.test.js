import { longestSequence } from './index';

describe('Test `longestSequence()` function', () => {
  it('Should return correct string', () => {
    expect(longestSequence('abcabcbb')).toBe('abc');
    expect(longestSequence('ababcd')).toBe('abcd');
    expect(longestSequence('bbbb')).toBe('b');
    expect(longestSequence('bbbab')).toBe('ba');
    expect(longestSequence('')).toBe('');
    expect(longestSequence('abc abcdabc')).toBe('abc ');
  });
});
