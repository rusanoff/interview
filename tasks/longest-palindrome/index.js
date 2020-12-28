export const longestPalindrome = (str) => {
  if (str.length < 2) {
    return undefined;
  }

  const substrings = [];
  const isPalindrome = (subStr) => {
    const strWithoutBreaks = subStr.toLowerCase();

    return strWithoutBreaks === strWithoutBreaks.split('').reverse().join('');
  };

  for (let i = 0, { length } = str; i < length; i++) {
    let substr = str[i];

    for (let j = i + 1, { length: length2 } = str; j < length2; j++) {
      substr += str[j];
      substrings.push(substr);
    }
  }

  return substrings.filter(isPalindrome).find((item, i, arr) => arr.every(x => item.length >= x.length));
};
