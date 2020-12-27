export const isAnagrams = (str1 = '', str2 = '') => (!str1 || !str2)
  ? false
  : str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
