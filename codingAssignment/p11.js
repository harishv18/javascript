// program to check armstrong number

function isArmstrongNumber(number) {
 
  const numStr = number.toString();
  const numDigits = numStr.length;

  
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === number;
}

const numToCheck = 153; 

if (isArmstrongNumber(numToCheck)) {
  console.log(numToCheck + " is an Armstrong number.");
} else {
  console.log(numToCheck + " is not an Armstrong number.");
}
