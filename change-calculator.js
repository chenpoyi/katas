const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let result = '';
  let types = ['twentyDollar', 'tenDollar','fiveDollar','twoDollar','oneDollar','quarter','dime','nickel','penny'];
  let count = [0,0,0,0,0,0,0,0,0];

  while (change >= 2000) {
    change -= 2000;
    count[0]++;
  }
  while (change >= 1000) {
    change -= 1000;
    count[1]++;
  }
  while (change >= 500) {
    change -= 500;
    count[2]++;
  }
  while (change >= 200) {
    change -= 200;
    count[3]++;
  }
  while (change >= 100) {
    change -= 100;
    count[4]++;
  }
  while (change >= 25) {
    change -= 25;
    count[5]++;
  }
  while (change >= 10) {
    change -= 10;
    count[6]++;
  }
  while (change >= 5) {
    change -= 5;
    count[7]++;
  }
  while (change >= 1) {
    change -= 1;
    count[8]++;
  }
  for (let i = 0; i < types.length; i++) {
    if (count[i] > 0) {
      result = result + types[i] + ': ' + count[i] + ', ';
    }
    
  }
  
  result = result.slice(0, result.length - 2);
  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));