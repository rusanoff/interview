import { validateBraces } from './index';

describe('Test `validateBrackets()` function', () => {
  it('Should be truthy', () => {
    expect(validateBraces('()')).toBeTruthy();
    expect(validateBraces('{}')).toBeTruthy();
    expect(validateBraces('[]')).toBeTruthy();
    expect(validateBraces('({[]})')).toBeTruthy();
    expect(validateBraces('({([({({[[[()]]]})})])})')).toBeTruthy();
  });
  it('Should be falsy', () => {
    expect(validateBraces('')).toBeFalsy();
    expect(validateBraces('(]')).toBeFalsy();
    expect(validateBraces('{]')).toBeFalsy();
    expect(validateBraces('{)')).toBeFalsy();
    expect(validateBraces('({{})')).toBeFalsy();
    expect(validateBraces('(')).toBeFalsy();
    expect(validateBraces('({([({({([[()]]]})})])})')).toBeFalsy();
  });
});
