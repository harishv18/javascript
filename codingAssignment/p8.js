// check whether the triangle is equilateral, scalene, or isosceles

function checkTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "Equilateral";
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    return "Scalene";
  } else {
    return "Isosceles";
  }
}

var sideA = 5; 
var sideB = 5;
var sideC = 5; 

var triangleType = checkTriangleType(sideA, sideB, sideC);

console.log("The triangle is " + triangleType + ".");
