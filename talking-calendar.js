const talkingCalendar = function(date) {
  // Your code here
  let result;
  let dateArray = date.split('/');
  switch (dateArray[1]) {
  case '01':
    result = 'January ';
    break;

  case '02':
    result = 'February ';
    break;

  case '03':
    result = 'March ';
    break;

  case '04':
    result = 'April ';
    break;
  
  case '05':
    result = 'May ';
    break;
  
  case '06':
    result = 'June ';
    break;
  
  case '07':
    result = 'July ';
    break;
  
  case '08':
    result = 'August ';
    break;
    
  case '09':
    result = 'September ';
    break;

  case '10':
    result = 'October ';
    break;

  case '11':
    result = 'November ';
    break;

  case '12':
    result = 'December ';
    break;
  }
  
  let day = '';
  if (dateArray[2][0] === '0') {
    day = dateArray[2][1];
  } else {
    day = dateArray[2];
  }

  result = result + day;

  if (dateArray[2] === '01' || dateArray[2] === '21') {
    result = result + 'st, ';
  } else if (dateArray[2] === '02' || dateArray[2] === '22') {
    result = result + 'nd, ';
  } else if (dateArray[2] === '03') {
    result = result + 'rd, ';
  } else {
    result = result + 'th, ';
  }

  result = result + dateArray[0];
  return result;
  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));