import { longestPalindrome } from './index';

describe('Test `longestPalindrome()` function', () => {
  it('Should return correct string', () => {
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(longestPalindrome('dbabdd')).toBe('dbabd');
    expect(longestPalindrome('')).toBeUndefined();
    expect(longestPalindrome('abc')).toBeUndefined();
    expect(longestPalindrome('abc abcdcba ')).toBe(' abcdcba ');
    expect(longestPalindrome('abc abc d cba ')).toBe(' abc d cba ');
    expect(longestPalindrome('          ')).toBe('          ');
    expect(longestPalindrome('cccfff')).toBe('ccc');
    expect(longestPalindrome('cccfff')).toBe('ccc');
    expect(longestPalindrome('abcabicabbaci')).toBe('icabbaci');
    expect(longestPalindrome('1233210')).toBe('123321');
  });
});
