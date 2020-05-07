export const factorial = (n) => n < 2 ? 1 : [...Array(n)].reduce((acc, x, i) => acc * (i + 1), 1);
