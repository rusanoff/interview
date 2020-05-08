import { filter } from './index';

describe('Test `filter()` function', () => {
  it('Should returns correct value', () => {
    expect(filter([1, 2, 3, 4], (item) => !(item % 2))).toEqual([2, 4]);
    expect(filter([0, 1, 2, 3], (item) => item > 0)).toEqual([1, 2, 3]);
    expect(filter(['asd', 'qwe', 'dasd'], (item) => item.includes('asd'))).toEqual(['asd', 'dasd']);
    expect(filter([1, 2, 3, 4, 5], (item, i) => !!i)).toEqual([2, 3, 4, 5]);
  });
});
