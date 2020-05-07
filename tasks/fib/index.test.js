import { fib, fibWithoutRecursion } from './index';

describe('Test `fib()` function', () => {
  it('Zero Fibonacci number is 0', () => {
    expect(fib(0)).toBe(0);
    expect(fibWithoutRecursion(0)).toBe(0);
  });

  it('1st Fibonacci number is 1', () => {
    expect(fib(1)).toBe(1);
    expect(fibWithoutRecursion(1)).toBe(1);
  });

  it('2nd Fibonacci number is 1', () => {
    expect(fib(2)).toBe(1);
    expect(fibWithoutRecursion(2)).toBe(1);
  });

  it('3rd Fibonacci number is 2', () => {
    expect(fib(3)).toBe(2);
    expect(fibWithoutRecursion(3)).toBe(2);
  });

  it('10th Fibonacci number is 55', () => {
    expect(fib(10)).toBe(55);
    expect(fibWithoutRecursion(10)).toBe(55);
  });

  it('20th Fibonacci number is 6765', () => {
    expect(fib(20)).toBe(6765);
    expect(fibWithoutRecursion(20)).toBe(6765);
  });
});
