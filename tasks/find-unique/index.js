export const findUnique = (arr) => {
  if (arr.length < 2) {
    return arr[0];
  }

  if (arr.length === 2) {
    return arr[1];
  }

  const equatedStrings = arr.map(x => x.replace(/\s/g, '').toLowerCase());
  const uniqueStrings = equatedStrings.map(x => [ ...new Set(x.split('')) ].sort().join(''));
  const foundIndex = uniqueStrings.findIndex(x => uniqueStrings.indexOf(x) === uniqueStrings.lastIndexOf(x));

  return arr[foundIndex];
};
