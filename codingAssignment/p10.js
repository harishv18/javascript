// program to check vowel or consonants

function isVowelOrConsonant(character) {
  
  character = character.toLowerCase();

  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return "Vowel";
  } else {
    return "Consonant";
  }
}

var charToCheck = 'a'; 

if (/^[a-zA-Z]$/.test(charToCheck) && charToCheck.length === 1) {
  var result = isVowelOrConsonant(charToCheck);
  console.log(charToCheck + " is a " + result + ".");
} else {
  console.log("Invalid input. Please enter a single alphabet character.");
}
