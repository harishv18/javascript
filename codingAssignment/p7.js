// check whether a given number is even or odd

function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

var num = 7; 

var result = isEvenOrOdd(num);

console.log("The number " + num + " is " + result + ".");
