
function getTime() {

var timeNow = new Date();

var seconds = timeNow.getSeconds();
var minutes = timeNow.getMinutes();
var hours = timeNow.getHours() - 12;

var secondsDegrees = 6 * seconds; // 360/60 = 6
var minuteDegrees = 6 * minutes;
var hourDegrees = 30 * hours;

var secondsHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

secondsHand.style.transform = `rotate(${90 + secondsDegrees}deg)`;
minuteHand.style.transform = `rotate(${90 + minuteDegrees}deg)`;
hourHand.style.transform = `rotate(${90 + hourDegrees}deg)`;
}

setInterval(getTime, 1000);
