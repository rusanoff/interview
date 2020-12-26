import { longestPalindrome } from './index';

describe('Test `longestPalindrome()` function', () => {
  it('Should return correct string', () => {
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(longestPalindrome('dbabdd')).toBe('dbabd');
    expect(longestPalindrome('')).toBeUndefined();
    expect(longestPalindrome('abc')).toBeUndefined();
    // FIXME: It doesnt work
    expect(longestPalindrome('abc abcdcba ')).toBe(' abcdcba ');
  });
});
