// gcd or gcf using euclidean algorithm

function euclideanGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const number1 = 48; 
const number2 = 18; 

const gcd = euclideanGCD(number1, number2);

console.log(`The GCD of ${number1} and ${number2} is ${gcd}`);
