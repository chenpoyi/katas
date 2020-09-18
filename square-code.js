const squareCode = function(message) {
  // Put your solution here
  let result = '';
  let textArray = [];
  message = removeSpaces(message);
  let width = Math.ceil(Math.sqrt(message.length));
  textArray = buildArray(message, width);
  result = buildString(textArray);

  return result;
};

const buildString = function(array) {
  let result = '';
  
  
  for (let i = 0; i < array.length * array[0].length; i++) {
    if (array[i % array.length][Math.floor((i) / array.length)]) {
      if ((i % array.length) === 0) {
        result = result + ' ' + array[i % array.length][Math.floor((i) / array.length)];
      } else {
        result = result + array[i % array.length][Math.floor((i) / array.length)];
      }
      
    }
    
  }
  result = result.substring(1, result.length);
  return result;
};
const buildArray = function(message) {
  let result = [];
  let width = Math.ceil(Math.sqrt(message.length));
  let row = '';
  

  for (let i = 0; i < message.length; i++) {
    
    if ((i + 1) % width !== 0) {
      row = row + message[i];
    } else {

      row = row + message[i];
      result.push(row);
      row = '';
    }
    
  }
  if (row.length > 0) {
    result.push(row);
  }

  return result;
  
};

const removeSpaces = function(message) {
  let result = '';
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== ' ') {
      result = result + message[i];
    }
    
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));