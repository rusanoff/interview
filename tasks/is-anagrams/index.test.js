import { isAnagrams } from './index';

describe('Test `isAnagrams()` function', () => {
  it('Should be truthy', () => {
    expect(isAnagrams('thing', 'NiGht')).toBeTruthy();
    expect(isAnagrams('dog', 'god')).toBeTruthy();
  });

  it('Should be falsy', () => {
    expect(isAnagrams('wrong', 'answer')).toBeFalsy();
    expect(isAnagrams()).toBeFalsy();
    expect(isAnagrams('', 'asd')).toBeFalsy();
    expect(isAnagrams('', '')).toBeFalsy();
  })
});
