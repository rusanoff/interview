export const cutToRange = (sortedArr) => {
  let result = '';

  for (let i = 0, { length } = sortedArr; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (sortedArr[j] + 1 !== sortedArr[j + 1]) {
        const separator = j === sortedArr.length - 1 ? '' : ', ';
        const intervalSeparator = sortedArr[i] + 2 === sortedArr[i + 2] ? '..' : ', ';

        result += i !== j ? (sortedArr[i] + intervalSeparator + sortedArr[j] + separator) : (sortedArr[j] + separator);
        i = j;

        break;
      }
    }
  }

  return result;
};
