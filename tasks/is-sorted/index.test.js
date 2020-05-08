import { isSorted } from './index';

describe('Test `isSorted()` function', () => {
  it('Should be truthy', () => {
    expect(isSorted([])).toBeTruthy();
    expect(isSorted([-Infinity, -5, 0, 3, 9])).toBeTruthy();
  });

  it('Should be falsy', () => {
    expect(isSorted([3, 9, -3, 10])).toBeFalsy();
    expect(isSorted([1, 10, 2])).toBeFalsy();
  });
});
