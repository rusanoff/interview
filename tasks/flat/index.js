export const flatten1 = (array) => {
  return array.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten1(item) : item);
  }, []);
};

export const flatten2 = (array) => {
  return array.flat(Infinity);
};
