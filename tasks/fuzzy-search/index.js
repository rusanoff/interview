export const fuzzySearch = (substr, str) => {
  const strArr = str.split('');
  let iterationCounter = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === substr[iterationCounter]) {
      iterationCounter++;
    }
  }

  return iterationCounter === substr.length;
};
