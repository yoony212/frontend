const FizzBuzz = (i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return i = 'FizzBuzz';
  } else if (i % 3 === 0) {
    return i = 'Fizz';
  } else if (i % 5 === 0) {
    return i = 'Buzz';
  } else {
    return i;
  }
}

const max = 100;

for(i = 1; i <= max; i++) {
  console.log(FizzBuzz(i));
}

