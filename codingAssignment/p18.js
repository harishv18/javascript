// reverse the array

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}

console.log(reversedArray); 
