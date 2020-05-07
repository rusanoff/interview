import { lodashGetAnalog } from './index';

describe('Test `lodashGetAnalog()` function', () => {
  const obj = {
    a: {
      b: {
        c: 'correct',
        e: null,
        f: '',
        g: false,
        h: 0,
      },
    },
  };

  it('Should returns correct property value', () => {
    const { a } = obj;
    const { b } = a;

    expect(lodashGetAnalog(obj, 'a.b.c', 'not correct')).toBe('correct');
    expect(lodashGetAnalog(obj, 'a.b', 'not correct')).toEqual(b);
    expect(lodashGetAnalog(obj, 'a', 'not correct')).toEqual(a);
  });

  it ('Should returns correct value if obj is `null`', () => {
    expect(lodashGetAnalog(null, 'a.b.c', 'correct')).toBe('correct');
    expect(lodashGetAnalog(null, 'a.b.c')).toBeNull();
  });

  it ('Should returns correct value if props is empty', () => {
    expect(lodashGetAnalog(obj, '', 'correct')).toEqual(obj);
  });

  it('Should returns undefined if property is undefined', () => {
    expect(lodashGetAnalog(obj, 'a.b.c.d')).toBeUndefined();
    expect(lodashGetAnalog(obj, 'a.b.d')).toBeUndefined();
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g')).toBeUndefined();
  });

  it('Should returns correct falsy values', () => {
    expect(lodashGetAnalog(obj, 'a.b.e', 'correct')).toBeNull();
    expect(lodashGetAnalog(obj, 'a.b.f', 'correct')).toBe('');
    expect(lodashGetAnalog(obj, 'a.b.g', 'correct')).toBeFalsy();
    expect(lodashGetAnalog(obj, 'a.b.h', 'correct')).toBe(0);
  });

  it('Should returns default values', () => {
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g', null)).toBeNull();
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g', '')).toBe('');
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g', 0)).toBe(0);
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g', false)).toBeFalsy();
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g', true)).toBeTruthy();
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g', {})).toEqual({});
    expect(lodashGetAnalog(obj, 'a.b.c.d.e.f.g', [1])).toEqual([1]);
  });
});
