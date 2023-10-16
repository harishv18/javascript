// triangle is valid or not (sum of all angles = 180)

function isTriangleValid(angle1, angle2, angle3) {
  
  return angle1 + angle2 + angle3 === 180;
}

const angle1 = 60; 
const angle2 = 60;  
const angle3 = 60; 

if (isTriangleValid(angle1, angle2, angle3)) {
  console.log("The triangle is valid.");
} else {
  console.log("The triangle is not valid.");
}
