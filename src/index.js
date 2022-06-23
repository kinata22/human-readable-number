const nameNumber = (number) => {
  switch(number) {
      case 0: return 'zero'; 
      case 1: return 'one'; 
      case 2: return 'two'; 
      case 3: return 'three'; 
      case 4: return 'four'; 
      case 5: return 'five'; 
      case 6: return 'six'; 
      case 7: return 'seven'; 
      case 8: return 'eight'; 
      case 9: return 'nine'; 
      case 10: return 'ten'; 
      case 11: return 'eleven'; 
      case 12: return 'twelve'; 
  } 
}

module.exports = function toReadable (number) {
  let result = '';

  if (number >=100) {
    const firstDigit = Math.trunc(number / 100);
    result += nameNumber(firstDigit) + ' hundred';
    number -= firstDigit * 100;
    if (number === 0) return result;
    result += ' ';
  }

  if(number <= 12) {
    result += nameNumber(number);
  }
  else if (number <= 19) {
    const lastDigit = number % 10;
    switch(number) {
        case 13: result += 'thirteen'; break;
        case 15: result += 'fifteen'; break;
        case 18: result += 'eighteen'; break;
        default: result += nameNumber(lastDigit) + 'teen';
    }
  }
  else if(number < 100) {
    const firstDigit = Math.trunc(number / 10);
    const lastDigit = number % 10;
    switch(firstDigit) {
        case 2: result += 'twenty'; break;
        case 3: result += 'thirty'; break;
        case 4: result += 'forty'; break;
        case 5: result += 'fifty'; break;
        case 8: result += 'eighty'; break;
        default: result += nameNumber(firstDigit) + 'ty';
    }
    if(lastDigit !== 0) {
        result += ' ' + nameNumber(lastDigit);
    }
  }

  return result;
}
