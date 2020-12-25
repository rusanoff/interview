export const isAnagrams = (str1 = '', str2 = '') => {
  if (!str1 || !str2) {
    return false;
  }

  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
};
