export const checkWordInMatrix = (arrMatrix, str) => {
  const rows = arrMatrix.map((row) => {
    return row.join('');
  });
  const columns = [];

  for (let i = 0, { length } = arrMatrix[0]; i < length; i++) {
    let str = '';

    for (let j = 0, { length: length2 } = arrMatrix; j < length2; j++) {
      str += arrMatrix[j][i];
    }

    columns.push(str);
  }

  return [...rows, ...columns].some((word) => {
    if (str.length > 1) {
      return word.includes(str);
    }

    return word === str;
  });
};
