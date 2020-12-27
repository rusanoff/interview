export const isPalindrome = (str) => {
  const strWithoutBreaks = str.toLowerCase().replace(/[^а-яa-zё]/g, '');

  return strWithoutBreaks === strWithoutBreaks.split('').reverse().join('');
};
