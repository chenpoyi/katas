const conditionalSum = function(values, condition) {
  // Your code here
  let real = [];
  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        real.push(values[i]);
      }
    }
  } else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        real.push(values[i]);
      }
    }

  }
 
  let max;
  let sec;
  if (real[0] >= real[1]) {
    max = real[0];
    sec = real[1];
  } else {
    max = real[1];
    sec = real[0];
  }
  let j = 2;
  while (j < real.length) {
    if (real[j] > sec) {
      if (real[j] > max) {
        sec = max;
        max = real[j];
      } else {
        sec = real[j];
      }
    }
    j++;
  }
  if (real.length === 0) {
    return 0;
  }
  return max + sec;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditisonalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));