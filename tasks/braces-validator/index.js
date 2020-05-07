export const validateBraces = (str) => {
  if (str.length % 2) {
    return false;
  }

  const arr = [...str];

  return !arr.slice(0, arr.length / 2).find((x, i) => {
    const y = arr.length - 1 - i;

    return x + arr[y] !== '()' && x + arr[y] !== '[]' && x + arr[y] !== '{}';
  });
};
