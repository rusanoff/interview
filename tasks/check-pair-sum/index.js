export const checkPairSum = (arr, sum) => {
  if (!arr.length) {
    return false;
  }

  for (let i = 0, { length } = arr; i < length; i++) {
    const arr2 = arr.slice(i + 1);

    for (let j = 0, { length: lengthJ } = arr2; j < lengthJ; j++) {
      if ((arr[i] + arr2[j]) === sum) {
        return true;
      }
    }
  }

  return false;
};
