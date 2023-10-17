// internet number in range x and y

function getRandomNumberInRange(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const x = 10; 
const y = 50; 

const randomNumber = getRandomNumberInRange(x, y);

console.log(`Random number between ${x} and ${y}: ${randomNumber}`);
