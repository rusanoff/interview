import { fizzBuzz } from './index';

describe('Test `fizzBuzz()` function', () => {
  beforeAll(() => {
    console.log = jest.fn();
    fizzBuzz();
  });

  it('Should work', () => {
    expect(console.log.mock.calls.length).toBe(100);
    expect(console.log.mock.calls[2][0]).toBe('fizz');
    expect(console.log.mock.calls[4][0]).toBe('buzz');
    expect(console.log.mock.calls[14][0]).toBe('fizzbuzz');
    expect(console.log.mock.calls[17][0]).toBe('fizz');
    expect(console.log.mock.calls[19][0]).toBe('buzz');
    expect(console.log.mock.calls[29][0]).toBe('fizzbuzz');
    expect(console.log.mock.calls[30][0]).toBe(31);
  });
});
