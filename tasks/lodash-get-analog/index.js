export const lodashGetAnalog = (obj, str, defaultValue) => {
  if (!obj) {
    return defaultValue === undefined ? obj : defaultValue;
  }

  if (!str) {
    return obj;
  }

  const props = str.split('.');
  let result = obj;

  for (const prop of props) {
    if (result[prop] === undefined) {
      result = undefined;
      break;
    }

    result = result[prop];
  }

  if (result === undefined && defaultValue !== undefined) {
    return defaultValue;
  }

  return result;
};
