# Interview Tasks

JS tasks from interviews

***

*isPrime - Returns true or false, indicating whether the
given number is prime.*

```javascript
const isPrime = n => n <= 1 ? false : !Array.from(new Array(n), (el, i) => i + 1)
  .filter(x => x > 1 && x < n)
  .find(x => n % x === 0);
```

***

*factorial - Returns a number that is the factorial of
the given number.*

```javascript
const factorial = n => n < 2 ? 1 : [...Array(n)].reduce((acc, x, i) => acc * (i + 1), 1);
```

***

*fib - Returns the nth Fibonacci number.*

```javascript
const fib = (n) => {
  let prevNumBeforeLast = 0;
  let lastNum = 1;

  for (let i = 0; i < n; i++) {
    lastNum += prevNumBeforeLast;
    prevNumBeforeLast = lastNum - prevNumBeforeLast;
  }

  return prevNumBeforeLast;
};
```

***

*Write an analog `_.get` from lodash*

```javascript
const lodashGetAnalog = (obj, str, defaultValue) => {
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
```

***

*Write a function to validate braces*

```javascript
const validateBraces = (str) => {
  if (str.length % 2) {
    return false;
  }

  const arr = [...str];

  return !arr.slice(0, arr.length / 2).find((x, i) => {
    const y = arr.length - 1 - i;

    return x + arr[y] !== '()' && x + arr[y] !== '[]' && x + arr[y] !== '{}';
  });
};
```

***

*How to make this code possible?*

`(5).plus(2).plus(1); // 8`

```javascript
Number.prototype.plus = function(num = 1) {
  return this + num;
};
```

***

*isSorted - Returns true or false, indicating whether the given array of numbers is sorted*

```javascript
const isSorted = arr => arr.join('') === [...arr].sort((a, b) => a - b).join('');
```

***

*filter - Implement the filter function*

```javascript
const filter = (arr, cb) => {
  if (!cb) {
    return arr;
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
};
```

***

