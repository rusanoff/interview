export const fib = (n) => {
  let prevNumBeforeLast = 0;
  let lastNum = 1;

  for (let i = 0; i < n; i++) {
    lastNum += prevNumBeforeLast;
    prevNumBeforeLast = lastNum - prevNumBeforeLast;
  }

  return prevNumBeforeLast;
};
