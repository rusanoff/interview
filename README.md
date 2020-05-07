# Interview Tasks

JS tasks from interviews

***

*isPrime - Returns true or false, indicating whether the
given number is prime.*

```javascript
const isPrime = n => n < 10 ? [2, 3, 5, 7].includes(n) : ![2, 3, 5, 7].some(d => !(n % d));
```

***

*factorial - Returns a number that is the factorial of
the given number.*

```javascript
const factorial = (n) => n < 2 ? 1 : [...Array(n)].reduce((acc, x, i) => acc * (i + 1), 1);
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

