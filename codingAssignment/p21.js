// exponent of a number using recursion

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

const base = 2; 
const exponent = 5; 

const result = power(base, exponent);

console.log(`${base}^${exponent} = ${result}`);
