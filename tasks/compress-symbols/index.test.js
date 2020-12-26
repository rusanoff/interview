import { compressSymbols } from './index';

describe('Test `compressSymbols()` function', () => {
  it('Should return correct value', () => {
    expect(compressSymbols('aaabbc')).toBe('a3b2c1');
    expect(compressSymbols('aabbcca')).toBe('a2b2c2a1');
    expect(compressSymbols('abc')).toBe('a1b1c1');
    expect(compressSymbols('aaBBBbbcBv')).toBe('a2B3b2c1B1v1');
    expect(compressSymbols('  ')).toBe(' 2');
  });
});
