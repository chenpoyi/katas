const urlEncode = function(text) {
  // Put your solution here
  let result = [];
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
  
    if (text[i] === ' ') {
      result = result + '%20';
    } else {
      result = result + text[i];
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));