export const missedNumber = (sortedArray) => {
  const numBeforeMissed = sortedArray.slice(0, -1).find((item, i) => item + 1 !== sortedArray[i + 1]);

  return numBeforeMissed ? numBeforeMissed + 1 : undefined;
};
