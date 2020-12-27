import { checkWordInMatrix } from './index';

describe('Test `checkWordInMatrix()` function', () => {
  const matrix = [
    ['F', 'A', 'C', 'E'],
    ['O', 'B', 'O', 'P'],
    ['N', 'A', 'R', 'B'],
    ['E', 'A', 'N', 'D'],
  ];

  it('Should be truthy', () => {
    expect(checkWordInMatrix(matrix, 'FACE')).toBeTruthy();
    expect(checkWordInMatrix(matrix, 'ONE')).toBeTruthy();
    expect(checkWordInMatrix(matrix, 'CORN')).toBeTruthy();
    expect(checkWordInMatrix(matrix, 'AND')).toBeTruthy();
  });

  it('Should be falsy', () => {
    expect(checkWordInMatrix(matrix, 'FONT')).toBeFalsy();
  });
});
