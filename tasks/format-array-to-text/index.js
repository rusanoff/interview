export const formatArrayToText = (array) => {
  const { length } = array;

  if (!length) return '';

  const getTitleCase = str => str[0].toUpperCase() + str.slice(1);

  if (length < 3) {
    return getTitleCase(array.join(' и '));
  }

  const str = array.slice(0, -1).join(', ');

  return getTitleCase(str) + ` и ${array[length - 1].toLowerCase()}`;
};
