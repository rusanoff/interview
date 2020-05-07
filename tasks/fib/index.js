export const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);

export const fibWithoutRecursion = (n) => {
  if (!n) {
    return n;
  }

  let prevNumBeforeLast = 1;
  let lastNum = 1;

  for (let i = 3; i <= n; i++) {
    const nextNum = prevNumBeforeLast + lastNum;

    prevNumBeforeLast = lastNum;
    lastNum = nextNum;
  }

  return lastNum;
};
