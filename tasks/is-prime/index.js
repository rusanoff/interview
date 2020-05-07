export const isPrime = n => n < 10 ? [2, 3, 5, 7].includes(n) : ![2, 3, 5, 7].some(d => !(n % d));
