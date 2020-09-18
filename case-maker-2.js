const makeCase = function(input, cases) {
  // Put your solution here
  let caseArray = [];
  
  //console.log(typeof cases);
  if (typeof cases === 'string') {
    caseArray.push(cases);
  } else if (typeof cases === 'object') {
    for (type of cases) {
      caseArray.push(type);
    }
  }
  input = makeLower(input);
  while (caseArray.length > 0) {
    for (let i = 0; i < caseArray.length; i++) {
      if (caseArray[i] === 'camel') {
        input = makeCamel(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'pascal') {
        input = makePascal(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'snake') {
        input = makeSnake(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'kebab') {
        input = makeKebab(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'title') {
        input = makeTitle(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'vowel') {
        input = makeVowel(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'consonant') {
        input = makeConsonant(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'upper') {
        input = makeUpper(input);
        caseArray.splice(i,i + 1);
      } else if (caseArray[i] === 'lower') {
        input = makeLower(input);
        caseArray.splice(i,i + 1);
      }
    }
  }
  return input;
};

const makeCamel = function(input) {
  // Your code here
  let result = '';
  for (let i = 0; i < input.length; i++) {

    if (input[i] != ' ') {
      if (input[i - 1] === ' ') {
        result = result + input[i].toUpperCase();
      } else {
        result = result + input[i];
      }
    }
  }
  return result;
};
const makePascal = function(input) {
  // Your code here
  let result = '';
  result = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {

    if (input[i] != ' ') {
      if (input[i - 1] === ' ') {
        result = result + input[i].toUpperCase();
      } else {
        result = result + input[i];
      }
    }
  }
  
  return result;
};

const makeSnake = function(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      result = result + '_';
    } else {
      result = result + input[i];
    }
  }
  return result;
};

const makeKebab = function(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      result = result + '-';
    } else {
      result = result + input[i];
    }
  }
  return result;
};

const makeTitle = function(input) {
  let result = '';
  result = input[0].toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === ' ') {
      result = result + input[i].toUpperCase();
    } else {
      result = result + input[i];
    }
    
  }
  return result;
};

const makeVowel = function(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      result = result + input[i].toUpperCase();
    } else {
      result = result + input[i];
    }
  }
  return result;
};

const makeConsonant = function(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i] != 'a' && input[i] != 'e' && input[i] != 'i' && input[i] != 'o' && input[i] != 'u') {
      result = result + input[i].toUpperCase();
    } else {
      result = result + input[i];
    }
  }
  return result;
};

const makeUpper = function(input) {
  let result = '';
  result = input.toUpperCase();
  return result;
};

const makeLower = function(input) {
  let result = '';
  result = input.toLowerCase();
  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));