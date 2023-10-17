// program to print number of days in a month

function getDaysInMonth(month, year) {
  
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  
  if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
    return 29;
  }

  return daysInMonth[month];
}

const month = 2; 
const year = 2024; 

if (month >= 1 && month <= 12) {
  const days = getDaysInMonth(month - 1, year); 
  console.log(`There are ${days} days in month ${month} of the year ${year}.`);
} else {
  console.log('Invalid month. Please enter a valid month (1-12).');
}
