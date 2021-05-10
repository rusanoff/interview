export function query(...args) {
  return (data) => {
    let result = [...data];

    for (let i = 0, {length} = args; i < length; i++) {
      result = args[i](result);
    }

    return result;
  };
}

export function where(obj) {
  const objProps = Object.keys(obj);

  return data => data.filter(item => objProps.every(objProp => obj[objProp] === item[objProp]));
}

export function order(propName) {
  return data => [...data].sort((a, b) => a[propName] - b[propName]);
}
