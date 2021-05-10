import { query, where, order } from './index';

describe('Test currying functions', () => {
  const data = [
    { id: 1, name: 'John', surname: 'Doe', age: 34 },
    { id: 2, name: 'John', surname: 'Smith', age: 35 },
    { id: 3, name: 'John', surname: 'Doe', age: 33 },
    { id: 4, name: 'John', surname: 'Doe', age: 35 },
    { id: 5, name: 'Mike', surname: 'Doe', age: 35 },
  ];

  it('Example 1: Test correct value', () => {
    const ids = query(
      where({ name: 'John' }),
      where({ surname: 'Doe' }),
      order('age'),
    )(data).map((u) => u.id);

    expect(ids).toEqual([3, 1, 4]);
  });

  it('Example 2: Test extra prop in `where` function parameter', () => {
    const dataClone = JSON.parse(JSON.stringify(data));
    const ids = query(
      where({ name: 'John' }),
      where({ surname: 'Doe', sex: 'male' }),
      order('age'),
    )(dataClone).map((u) => u.id);

    expect(ids).toEqual([]);
    expect(data).toEqual(dataClone);
  });

  it('Example 3: Test non-existent value in `where` function', () => {
    const ids = query(
      where({ name: 'Max' }),
      order('age'),
    )(data).map((u) => u.id);

    expect(ids).toEqual([]);
  });

  it('Example 4: Test non-existent value in `order` function', () => {
    const ids = query(
      where({ name: 'John' }),
      order('someCounter'),
    )(data).map((u) => u.id);

    expect(ids).toEqual([1, 2, 3, 4]);
  });

  it('Example 5: Test empty `query` function', () => {
    const ids = query()(data).map((u) => u.id);

    expect(ids).toEqual([1, 2, 3, 4, 5]);
  });
});
