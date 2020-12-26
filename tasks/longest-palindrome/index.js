export const longestPalindrome = (str) => {
  if (str.length < 2) {
    return undefined;
  }

  const isPalindrome = (subStr) => {
    const strWithoutBreaks = subStr.toLowerCase().replace(/[^а-яa-z]/g, '');

    return strWithoutBreaks === strWithoutBreaks.split('').reverse().join('');
  };
  const palindromes = [];

  for (let i = 0, { length } = str; i < length - 1; i++) {
    let strPalindrome = str[i];

    for (let j = i + 1; j < length - 1; j++) {
      strPalindrome += str[j];

      if (isPalindrome(strPalindrome)) {
        palindromes.push(strPalindrome);
      }
    }
  }

  if (!palindromes.length) {
    return undefined;
  }

  const sortedPalindromes = [...new Set(palindromes)].sort();
  const { length } = sortedPalindromes;

  return sortedPalindromes[length - 1];
};
