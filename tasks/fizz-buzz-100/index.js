export const fizzBuzz = () => {
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
