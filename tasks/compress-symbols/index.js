export const compressSymbols = (str) => {
  let compressedItem = '';
  let repeatCount = 1;

  return str.split('').reduce((acc, char, i , currentChars) => {
    if (char === currentChars[i + 1]) {
      repeatCount++;
      compressedItem = char + repeatCount;
    } else {
      if (!compressedItem) {
        acc += char + repeatCount;
      } else {
        acc += compressedItem;
        compressedItem = '';
        repeatCount = 1;
      }
    }

    return acc;
  }, '');
};
