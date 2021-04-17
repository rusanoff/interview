# Задачи с собеседований

Решения задач с собеседований на языке JavaScript

***

*Написать функцию для валидации скобок*

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

*Написать функцию, которая проверяет, что в отсортированном массиве встречается такая пара чисел,
которая дает нужную сумму*

```javascript
const checkPairSum = (arr, sum) => {
  if (!arr.length) {
    return false;
  }

  for (let i = 0, { length } = arr; i < length; i++) {
    const arr2 = arr.slice(i + 1);

    for (let j = 0, { length: lengthJ } = arr2; j < lengthJ; j++) {
      if ((arr[i] + arr2[j]) === sum) {
        return true;
      }
    }
  }

  return false;
};
```

***

*Написать функцию, которая поверяет, что в матрице символов слева направо или сверху вниз встречается
искомая строка*

```javascript
const checkWordInMatrix = (arrMatrix, str) => {
  const rows = arrMatrix.map((row) => {
    return row.join('');
  });
  const columns = [];

  for (let i = 0, { length } = arrMatrix[0]; i < length; i++) {
    let str = '';

    for (let j = 0, { length: length2 } = arrMatrix; j < length2; j++) {
      str += arrMatrix[j][i];
    }

    columns.push(str);
  }

  return [...rows, ...columns].some((word) => {
    if (str.length > 1) {
      return word.includes(str);
    }

    return word === str;
  });
};
```

***

*Написать функцию, которая сжимает символы в строке, например: aabbCCc -> a2b2C2c1*

```javascript
const compressSymbols = (str) => {
  let compressedItem = '';
  let repeatCount = 1;

  return str.split('').reduce((acc, char, i , currentChars) => {
    if (char === currentChars[i + 1]) {
      repeatCount++;
      compressedItem = char + repeatCount;
    } else {
      if (!compressedItem) {
        acc += char + repeatCount;
      } else {
        acc += compressedItem;
        compressedItem = '';
        repeatCount = 1;
      }
    }

    return acc;
  }, '');
};
```

***

*Написать сокращатель диапазонов чисел в отсортированном массиве уникальных значений*

```javascript
const cutToRange = (sortedArr) => {
  let result = '';

  for (let i = 0, { length } = sortedArr; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (sortedArr[j] + 1 !== sortedArr[j + 1]) {
        const separator = j === sortedArr.length - 1 ? '' : ', ';
        const intervalSeparator = sortedArr[i] + 2 === sortedArr[i + 2] ? '..' : ', ';

        result += i !== j ? (sortedArr[i] + intervalSeparator + sortedArr[j] + separator) : (sortedArr[j] + separator);
        i = j;

        break;
      }
    }
  }

  return result;
};
```

***

*Написать функцию, которая вернет факториал от переданного числа*

```javascript
const factorial = n => n < 2 ? 1 : [...Array(n)].reduce((acc, x, i) => acc * (i + 1), 1);
```

***

*Написать функцию, которая возвращает порядковое число в последовательности Фибоначчи*

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

// Или

const fibRec = (n) => n < 2 ? n : fibRec(n - 1) + fibRec(n - 2);
```

***

*Написать аналог `Array.prototype.filter()`*

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

*Дан массив строк, в котором одна из строк отличается по составу входящих в неё букв.
Порядок, количество, регистр букв и пробелы роли не играют. Реализовать функцию, который
принимает на вход такой массив строк, и возвращает отличающуюся строку*

```javascript
const findUnique = (arr) => {
  if (arr.length < 2) {
    return arr[0];
  }

  if (arr.length === 2) {
    return arr[1];
  }

  const equatedStrings = arr.map(x => x.replace(/\s/g, '').toLowerCase());
  const uniqueStrings = equatedStrings.map(x => [ ...new Set(x.split('')) ].sort().join(''));
  const foundIndex = uniqueStrings.findIndex(x => uniqueStrings.indexOf(x) === uniqueStrings.lastIndexOf(x));

  return arr[foundIndex];
};
```

***

*Написать функцию, которая пройдет по массиву из 100 элементов и будет выводить числа, но вместо
чисел кратных 3 выведет fizz, кратных 5 - buzz, кратных и 3 и 5 - fizzbuzz*

```javascript
const fizzBuzz = () => {
  Array.from(new Array(100), (el, i) => i + 1).forEach((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      console.log('fizzbuzz');
    } else if (item % 3 === 0) {
      console.log('fizz');
    } else if (item % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(item);
    }
  });
};
```

***

*Развернуть многомерный массив, вложенность не ограничена*

```javascript
const flatten1 = array => array.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten1(item) : item));

// Или

[1, [2, 3, 4, [5, [6, [7]], 8]], 9].flat(Infinity);
```

***

Напишите функцию, которая будет приводить массив к человекочитаемой строке

```javascript
const formatArrayToText = (array) => {
  const { length } = array;

  if (!length) return '';

  const getTitleCase = str => str[0].toUpperCase() + str.slice(1);

  if (length < 3) {
    return getTitleCase(array.join(' и '));
  }

  const str = array.slice(0, -1).join(', ');

  return getTitleCase(str) + ` и ${array[length - 1].toLowerCase()}`;
};
```

***

*Напишите функцию, которая проверяет, что строки являются анаграммами*

```javascript
const isAnagrams = (str1 = '', str2 = '') => (!str1 || !str2)
  ? false
  : str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
```

***

*Написать функцию, которая проверяет переданную строку на палиндром*

```javascript
const isPalindrome = (str) => {
  const strWithoutBreaks = str.toLowerCase().replace(/[^а-яa-zё]/g, '');

  return strWithoutBreaks === strWithoutBreaks.split('').reverse().join('');
};
```

***

*Написать функцию, которая определяет, является ли переданное число простым*

```javascript
const isPrime = n => n <= 1 ? false : !Array.from(new Array(n), (el, i) => i + 1)
  .filter(x => x > 1 && x < n)
  .find(x => n % x === 0);
```

***

*Написать функцию, которая проверяет, отсортирован ли переданный на вход массив*

```javascript
const isSorted = arr => arr.join('') === [...arr].sort((a, b) => a - b).join('');
```

***

*Написать функцию, которая вернет n-ое (от 1) самое большое число из массива*

```javascript
const largestN = (array, n) => [...array].sort((a, b) => b - a)[n - 1];
```

***

*Реализовать аналог `_.curry` из [lodash](https://lodash.com/docs/4.17.15#curry)*

```javascript
const lodashCarryAnalog = (func) => {
  
};
```

***

*Написать аналог `_.get` из [lodash](https://lodash.com/docs/get)*

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

*Найти самый длинный палиндром в строке*

```javascript
const longestPalindrome = (str) => {
  if (str.length < 2) {
    return undefined;
  }

  const substrings = [];
  const isPalindrome = (subStr) => {
    const strWithoutBreaks = subStr.toLowerCase();

    return strWithoutBreaks === strWithoutBreaks.split('').reverse().join('');
  };

  for (let i = 0, { length } = str; i < length; i++) {
    let substr = str[i];

    for (let j = i + 1, { length: length2 } = str; j < length2; j++) {
      substr += str[j];
      substrings.push(substr);
    }
  }

  return substrings.filter(isPalindrome).find((item, i, arr) => arr.every(x => item.length >= x.length));
};
```

***

*Найти самую длинную неразрывную последовательность уникальных символов в строке*

```javascript
const longestSequence = (str) => {
  if (!str) {
    return str;
  }

  const array = [ [str[0]] ];

  [...str].forEach((item, i) => {
    if (array[array.length - 1].includes(item)) {
      if (i) {
        array.push([item]);
      }
    } else {
      array[array.length - 1].push(item);
    }
  });

  const lengths = array.map(s => s.length);
  const longest = Math.max(...lengths);

  return array
    .map(arr => arr.join(''))
    .find((item, i, arr) => item.length === longest);
};
```

***

*Написать функцию, которая принимает массив цен товаров и остаток денег на вашей карте.
Функция должна вернуть максимальное количество товаров, которые вы сможете купить на все деньги*

```javascript
const maxPurchases = (prices, balance) => {
  let sum = 0;

  return [...prices]
    .sort((a, b) => a - b)
    .reduce((acc, price) => {
      sum += price;

      if (sum <= balance) acc++;

      return acc;
    }, 0);
};
```

***

*Написать функцию, которая вернет пропущенное число в отсортированном массиве с шагом 1*

```javascript
export const missedNumber = (sortedArray) => {
  const numBeforeMissed = sortedArray.slice(0, -1).find((item, i) => item + 1 !== sortedArray[i + 1]);

  return numBeforeMissed ? numBeforeMissed + 1 : undefined;
};
```

***

*Как заставить этот код работать?*

`(5).plus(2).plus(); // 8`

```javascript
Number.prototype.plus = function(num = 1) {
  return this + num;
};
```

***

*Написать функцию для вычисления простых математических операций. На вход принимается строка*

```javascript
const stringCalc = (str = '') => {
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
```
