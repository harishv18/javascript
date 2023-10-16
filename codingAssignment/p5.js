//program to convert temperature from fahrenheit to celsius and celsius to fahrenheit.

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}

var fahrenheitTemp = 68; 
var celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
console.log(fahrenheitTemp + "°F is equal to " + celsiusTemp.toFixed(2) + "°C");


function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

var celsiusTemp = 20; 
var fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(celsiusTemp + "°C is equal to " + fahrenheitTemp.toFixed(2) + "°F");
