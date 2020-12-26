export const isPalindrome = (str) => {
  const strWithoutBreaks = str.toLowerCase().replace(/[^а-яa-z]/g, '');
  console.log({ strWithoutBreaks });

  return strWithoutBreaks === strWithoutBreaks.split('').reverse().join('');
};
