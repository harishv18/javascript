// reverse the number

function reverseNumber(number) {
  const reversedString = number.toString().split('').reverse().join('');
  const reversedNumber = parseInt(reversedString);
  return reversedNumber;
}

const originalNumber = 12345; 

const reversedNumber = reverseNumber(originalNumber);

console.log("Original number: " + originalNumber);
console.log("Reversed number: " + reversedNumber);
