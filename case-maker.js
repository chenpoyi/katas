const camelCase = function(input) {
  // Your code here
  let result = '';
  for (let i = 0; i < input.length; i++) {
    //console.log(input[i-1]);
    /*if(input[i] != ' '){
      result = result + input[i];
    } else if (input[i-1] === ' '){
      console.log("HI");
      result = result + input.toUpperCase[i];
    }*/
    if (input[i] !== ' ') {
      if (input[i - 1] === ' ') {
        result = result + input[i].toUpperCase();
      } else {
        result = result + input[i];
      }
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
