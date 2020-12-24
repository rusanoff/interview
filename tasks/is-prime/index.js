export const isPrime = n => n <= 1 ? false : !Array.from(new Array(n), (el, i) => i + 1)
  .filter(x => x > 1 && x < n)
  .find(x => n % x === 0);
