export const filter = (arr, cb) => {
  if (!cb) {
    return arr;
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
};
