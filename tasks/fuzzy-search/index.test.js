import { fuzzySearch } from './index';

describe('Test `fuzzySearch()` function', () => {
  it('Should return correct value', () => {
    expect(fuzzySearch('car', 'cartwheel')).toBeTruthy();
    expect(fuzzySearch('cwhl', 'cartwheel')).toBeTruthy();
    expect(fuzzySearch('cwhee', 'cartwheel')).toBeTruthy();
    expect(fuzzySearch('cartwheel', 'cartwheel')).toBeTruthy();
    expect(fuzzySearch('cwheeel', 'cartwheel')).toBeFalsy();
    expect(fuzzySearch('lw', 'cartwheel')).toBeFalsy();
    expect(fuzzySearch('a', 'cartwheel')).toBeTruthy();
    expect(fuzzySearch('a', '')).toBeFalsy();
    expect(fuzzySearch('', '')).toBeTruthy();
    expect(fuzzySearch('', 'abc')).toBeTruthy();
  });
});
