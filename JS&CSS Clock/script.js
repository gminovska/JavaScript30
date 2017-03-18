
function getTime() {

var timeNow = new Date();

var seconds = timeNow.getSeconds();
var minutes = timeNow.getMinutes();
var hours = timeNow.getHours() - 12;

var secondsDegrees = 6 * seconds; // 360/60 = 6
var minuteDegrees = 6 * minutes;
var hourDegrees = 30 * hours;

var allHands = document.querySelector('.hand');
var secondsHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');


secondsHand.style.transform = `rotate(${90 + secondsDegrees}deg)`;
minuteHand.style.transform = `rotate(${90 + minuteDegrees}deg)`;
hourHand.style.transform = `rotate(${90 + hourDegrees}deg)`;

/*
When the rotation degrees go from (6 * 59)449 to (6 * 0)90 
there is a glitch due to the transition property, 
the hand goes a full circle backwards.
this removes the transition property on 90 degrees
*/

if(seconds === 0) {
secondsHand.style.transition = "all 0s";
}else {
secondsHand.style.transition = "";
}
}

setInterval(getTime, 1000);
