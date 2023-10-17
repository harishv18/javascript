// fibonacci series

function generateFibonacciSeries(n) {
  let fibonacciSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextNumber);
  }

  return fibonacciSeries;
}

const numberOfTerms = 10; 

if (numberOfTerms >= 1) {
  const fibonacciSeries = generateFibonacciSeries(numberOfTerms);
  console.log("Fibonacci Series up to " + numberOfTerms + " terms: " + fibonacciSeries.join(', '));
} else {
  console.log("Please enter a valid number of terms (1 or more).");
}
