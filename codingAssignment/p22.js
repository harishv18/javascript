// patterns - pyramids (Half, inverted half, hollow half, full, hollow full, hollow inverted half

function halfPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }
}

// const numRows = 5;
// halfPyramid(numRows);/

function invertedHalfPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }
}

// const numRows = 5;
// invertedHalfPyramid(numRows);

function hollowHalfPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === rows) {
        pattern += '* ';
      } else {
        pattern += '  ';
      }
    }
    console.log(pattern);
  }
}

// const numRows = 5;
// hollowHalfPyramid(numRows);

function fullPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = ' '.repeat(rows - i);
    pattern += '*'.repeat(2 * i - 1);
    console.log(pattern);
  }
}

// const numRows = 5;
// fullPyramid(numRows);

function hollowFullPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = ' '.repeat(rows - i);
    pattern += '*';
    if (i > 1) {
      pattern += ' '.repeat(2 * i - 3) + '*';
    }
    console.log(pattern);
  }
}

// const numRows = 5;
// hollowFullPyramid(numRows);

function hollowInvertedHalfPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = ' '.repeat(rows - i);
    pattern += '*';
    if (i > 1) {
      pattern += ' '.repeat(2 * i - 3) + '*';
    }
    console.log(pattern);
  }
}

// const numRows = 5;
// hollowInvertedHalfPyramid(numRows);



