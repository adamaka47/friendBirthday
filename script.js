function getTimeRemaining(last) {
  let tech = Date.parse(last) - Date.parse(new Date());
  let seconds = Math.floor((tech / 1000) % 60);
  let minutes = Math.floor((tech / 1000 / 60) % 60);
  let hours = Math.floor((tech / (1000 * 60 * 60)) % 24);
  let days = Math.floor(tech / (1000 * 60 * 60 * 24));
  return {
    'total': tech,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function workTimer(elem, last) {
  let timerId = document.getElementById(elem);
  let secondsSpan = timerId.querySelector('.secondsForThat');
  let minutesSpan = timerId.querySelector('.minutesForThat');
  let hoursSpan = timerId.querySelector('.hoursForThat');
  let daysSpan = timerId.querySelector('.daysForThat');
 
  function nowCount() {
    let tech = getTimeRemaining(last);
 
    daysSpan.textContent = ('0' + tech.days).slice(-2);
    hoursSpan.textContent = ('0' + tech.hours).slice(-2);
    minutesSpan.textContent = ('0' + tech.minutes).slice(-2);
    secondsSpan.textContent = ('0' + tech.seconds).slice(-2);
 
    if (tech.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  
 
  nowCount();
  let timeinterval = setInterval(nowCount, 1000);
}
 var mainEvent ="July 07 2019 00:00:00 GMT+0400";

workTimer('timer', mainEvent);