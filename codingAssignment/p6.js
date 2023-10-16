// program to check the sign of a given number

function checkSign(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

var num = -7; 

var sign = checkSign(num);

console.log("The sign of " + num + " is: " + sign);
