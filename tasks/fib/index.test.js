import { fib } from './index';

describe('Test `fib()` function', () => {
  it('Zero Fibonacci number is 0', () => {
    expect(fib(0)).toBe(0);
  });

  it('1st Fibonacci number is 1', () => {
    expect(fib(1)).toBe(1);
  });

  it('2nd Fibonacci number is 1', () => {
    expect(fib(2)).toBe(1);
  });

  it('3rd Fibonacci number is 2', () => {
    expect(fib(3)).toBe(2);
  });

  it('10th Fibonacci number is 55', () => {
    expect(fib(10)).toBe(55);
  });

  it('20th Fibonacci number is 6765', () => {
    expect(fib(20)).toBe(6765);
  });

  it('40th Fibonacci number is 102334155', () => {
    expect(fib(40)).toBe(102334155);
  });
});
