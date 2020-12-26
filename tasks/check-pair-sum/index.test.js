import { checkPairSum } from './index';

describe('Test `checkPairSum()` function', () => {
  it('Should return correct boolean', () => {
    expect(checkPairSum([1, 2, 3, 6], 9)).toBeTruthy();
    expect(checkPairSum([1, 1, 3, 4], 2)).toBeTruthy();
    expect(checkPairSum([-1, 1, 4, 8], 3)).toBeTruthy();
    expect(checkPairSum([1, 4, 8, 9], 6)).toBeFalsy();
  });
});
