// program to check whether a character is an alphabet or not

function isAlphabet(character) {
 
  var alphabetPattern = /^[A-Za-z]$/;
  
  return alphabetPattern.test(character);
}

var charToCheck = 'A';

if (isAlphabet(charToCheck)) {
  console.log(charToCheck + " is an alphabet.");
} else {
  console.log(charToCheck + " is not an alphabet.");
}
