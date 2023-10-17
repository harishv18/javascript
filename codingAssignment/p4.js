// find the given number is palindrome or not

function isPalindrome(number) {

  var numberStr = number.toString();

  var reversedStr = numberStr.split('').reverse().join('');

  if (numberStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}


var numberToCheck = 12321; 

if (isPalindrome(numberToCheck)) {
  console.log(numberToCheck + " is a palindrome.");
} else {
  console.log(numberToCheck + " is not a palindrome.");
}
