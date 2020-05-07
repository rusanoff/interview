# Interview Tasks

JS tasks from interviews

***

isPrime - Returns true or false, indicating whether the
given number is prime.

```javascript
const isPrime = n => n < 10 ? [2, 3, 5, 7].includes(n) : ![2, 3, 5, 7].some(d => !(n % d));
```

***

factorial - Returns a number that is the factorial of
the given number.

```javascript
const factorial = (n) => n < 2 ? 1 : [...Array(n)].reduce((acc, x, i) => acc * (i + 1), 1);
```

***

fib - Returns the nth Fibonacci number.

```javascript
const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);

const fibWithoutRecursion = (n) => {
  if (!n) {
    return n;
  }

  let prevNumBeforeLast = 1;
  let lastNum = 1;

  for (let i = 3; i <= n; i++) {
    const nextNum = prevNumBeforeLast + lastNum;

    prevNumBeforeLast = lastNum;
    lastNum = nextNum;
  }

  return lastNum;
};
```

***

