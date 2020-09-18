const repeatNumbers = function(data) {
  // Put your solution here
  let result = '';

  for (let i = 0; i < data[0][1]; i++) {
    result = result + data[0][0];
  }
  for (let j = 1; j < data.length; j++) {

    result = result + ', ';
    for (let k = 0; k < data[j][1]; k++) {
      result = result + data[j][0];
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));