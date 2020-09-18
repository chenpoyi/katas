let prompt = require("prompt-sync")();
let attempts = 0;
let solution = (Math.floor(Math.random() * 100));
let guesses = [];
// code below (replace this example)
//console.log('Solution: ' + solution);
while (true) {
  let answer = (prompt("Guess a number: "));
  let guess = parseInt(answer);
  
  if (guess) {
    if (guesses.includes(guess)) {
      
    } else {
      guesses.push(guess);
      attempts++;
    }
    if (guess === solution) {
      console.log('You got it! You took ' + attempts + ' attempts!');
      return;
    } else if (guess > solution) {
      console.log('Too high!');
    } else if (guess < solution) {
      console.log('Too low!');
    }
  } else {
    console.log('Not a number! Try again!');
  }
  
}
