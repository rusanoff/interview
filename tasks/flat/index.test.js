import { flatten1, flatten2 } from './index';

describe('Test `flatten1()` and `flatten2()` functions', () => {
  const array1 = [1, [2, [3, 4, [5, 6, [7, [8]]]], 9], 10];
  const array2 = [1, 2, 3];

  it('Should return flat array', () => {
    expect(flatten1(array1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(flatten1(array2)).toEqual([1, 2, 3]);
    expect(flatten2(array1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(flatten2(array2)).toEqual([1, 2, 3]);
  });
});
