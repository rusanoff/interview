import { formatArrayToText } from './index';

describe('Test `formatArrayToText()` function', () => {
  const array1 = ['собаки', 'кошки'];
  const array2 = ['яблоки', 'груши', 'перСИки'];
  const array3 = [];
  const array4 = ['ручка'];

  it('Should return correct text', () => {
    expect(formatArrayToText(array1)).toBe('Собаки и кошки');
    expect(formatArrayToText(array2)).toBe('Яблоки, груши и персики');
    expect(formatArrayToText(array3)).toBe('');
    expect(formatArrayToText(array4)).toBe('Ручка');
  });
});
