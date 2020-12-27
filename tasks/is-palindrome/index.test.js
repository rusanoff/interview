import { isPalindrome } from './index';

describe('Test `isPalindrome()` function', () => {
  it('Should be truthy', () => {
    expect(isPalindrome('Коту тащат утоК')).toBeTruthy();
    expect(isPalindrome('Мал о кукле дел - к уколам')).toBeTruthy();
    expect(isPalindrome('123321')).toBeTruthy();
    expect(isPalindrome('ё,#..? - Коту 123 тащат 321 утоК - ?..#,ё')).toBeTruthy();
  });

  it('Should be falsy', () => {
    expect(isPalindrome('Другая строка')).toBeFalsy();
  });
});
