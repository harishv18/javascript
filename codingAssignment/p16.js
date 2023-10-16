// prime factorial of numbers

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimesInRange(start, end) {
  const primeNumbers = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

const startRange = 1; 
const endRange = 50; 

const primeNumbersInRange = findPrimesInRange(startRange, endRange);

console.log(`Prime numbers between ${startRange} and ${endRange}: ${primeNumbersInRange}`);


function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

const num = 5; 

const result = factorial(num);

console.log(`Factorial of ${num} is ${result}`);
