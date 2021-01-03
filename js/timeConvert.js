function timeConvert(num) { 
    let hours = '00';
    const semi = ':';
    let minutes = '00';
    
    if (num < 0 || num === 0) {
        return '00:00';
    }
    if (num > 60) {
        hours = Math.trunc(num/60);
        if (hours < 10) {
            hours = '0' + hours;
        }
    }
    if (num % 60 !== 0) {
      minutes = num % 60;
      if (minutes < 10) {
          minutes = '0' + minutes;
      }
    }
  
  
  const answer = hours + semi + minutes;
  return answer;
  }

console.log(timeConvert(78));
console.log(timeConvert(-6));
console.log(timeConvert(8));
console.log(timeConvert(134));
console.log(timeConvert(970));
console.log(timeConvert(116));