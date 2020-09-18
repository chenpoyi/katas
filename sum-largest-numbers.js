const sumLargestNumbers = function(data) {
  // Put your solution here
  let max;
  let sec;
  if (data[0] >= data[1]) {
    max = data[0];
    sec = data[1];
  } else {
    max = data[1];
    sec = data[0];
  }
  let i = 2;
  while (i < data.length) {
    if (data[i] > sec) {
      if (data[i] > max) {
        sec = max;
        max = data[i];
      } else {
        sec = data[i];
      }
    }
    i++;
  }

  return max + sec;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));