export const longestSequence = (str) => {
  if (!str) {
    return str;
  }

  const array = [ [str[0]] ];

  [...str].forEach((item, i) => {
    if (array[array.length - 1].includes(item)) {
      if (i) {
        array.push([item]);
      }
    } else {
      array[array.length - 1].push(item);
    }
  });

  const lengths = array.map(s => s.length);
  const longest = Math.max(...lengths);

  return array
    .map(arr => arr.join(''))
    .find((item, i, arr) => item.length === longest);
};
