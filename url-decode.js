const urlDecode = function(text) {
  // Put your solution here
  let result = {};
  let segment = '';
  let key = '';
  let textArray = [];
  for (let i = 0; i < text.length; i++) {
    textArray.push(text[i]);
  }
  while (textArray.length > 0) {
    while (textArray.length > 0) {

      if (textArray[0] === '=') {
        key = segment;
        segment = '';
        result[key] = [];
        
        textArray.splice(0,1);
      } else if (textArray[0] === '&') {
        result[key] = addSpace(segment);
        segment = '';
        textArray.splice(0,1);
      } else {
        segment = segment + textArray[0];
        textArray.splice(0,1);
      }

    }
    
  }
  result[key] = addSpace(segment);


  return result;
};

//function to add spaces back into text.
const addSpace = function(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
  
    if (text[i] === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
      result = result + ' ';
      i = i + 2;
    } else {
      result = result + text[i];
    }
  }
  return result;
};
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
