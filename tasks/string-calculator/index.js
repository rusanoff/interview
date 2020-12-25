export const stringCalc = (str = '') => {
  if (typeof str !== 'string' || !str) {
    return NaN;
  }

  const trimmedExpression = str.replace(/\s/gim, '').replace(/,/gim, '.');

  if (!str.includes(' ') && !isNaN(Number(trimmedExpression))) {
    return Number(trimmedExpression);
  }


  if (trimmedExpression.includes('+')) {
    const arr = trimmedExpression.split('+').map(Number);

    return arr[0] + arr[1];
  }

  if (trimmedExpression.includes('*')) {
    const arr = trimmedExpression.split('*').map(Number);

    return arr[0] * arr[1];
  }

  if (trimmedExpression.includes('/')) {
    const arr = trimmedExpression.split('/').map(Number);

    return arr[0] / arr[1];
  }

  if (trimmedExpression.includes('-')) {
    const arr = trimmedExpression.split('-').map(Number);

    return arr[0] - arr[1];
  }

  if (trimmedExpression.includes('%')) {
    const arr = trimmedExpression.split('%').map(Number);

    return arr[0] % arr[1];
  }

  return NaN;
};
