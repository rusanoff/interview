export const largestN = (array, n) => [...array].sort((a, b) => b - a)[n - 1];
