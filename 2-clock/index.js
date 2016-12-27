'use strict';

var date,
    seconds,
    secondsDegrees,
    minutes,
    minutesDegrees,
    hours,
    hoursDegrees;

var secondHand = document.querySelector('.sec-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');


function setDate() {
    date = new Date();

    seconds = date.getSeconds();
    secondsDegrees = ((seconds / 60) * 360) + 90;

    minutes = date.getMinutes();
    minutesDegrees = ((minutes / 60) * 360) + 90;

    hours = date.getHours();
    hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
    minuteHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';
    hourHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';
}

setInterval(setDate, 1000);
