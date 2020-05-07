import { factorial } from './index';

describe('Test `factorial()` function', () => {
  it('factorial of 0 = 1', () => {
    expect(factorial(0)).toBe(1);
  });

  it('factorial of 1 = 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('factorial of 2 = 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('factorial of 6 = 720', () => {
    expect(factorial(6)).toBe(720);
  });
});
