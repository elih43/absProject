var count = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
var period;
var pp;
var time = 0;



function init() {
    timeDisplay = document.createTextNode("");
    document.getElementById("clock").appendChild(timeDisplay);
}

function updateClock() {
    var currentTime = new Date();

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    hours = currentHours;
    minutes = currentMinutes;
    seconds = currentSeconds;


    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    document.getElementById("clock").firstChild.nodeValue = currentTimeString;


    var test = setInterval(currentPeriod, 1000);






}

function currentPeriod() {
    if ((hours == 7 && minutes >= 45) || (hours == 8 && minutes < 36)) {
        period = 1;
        time = 60 * (8 - hours) + 36 - minutes;
    } else if ((hours == 8 && minutes >= 40) || (hours == 9 && minutes < 31)) {
        period = 2;
        time = 60 * (9 - hours) + 31 - minutes;
    } else if ((hours == 9 && minutes >= 35) || (hours == 10 && minutes < 26)) {
        period = 3;
        time = 60 * (10 - hours) + 26 - minutes;
    } else if ((hours == 10 && minutes >= 30) || (hours == 11 && minutes < 21)) {
        period = 4;
        time = 60 * (11 - hours) + 21 - minutes;
    } else if ((hours == 11 && minutes >= 25) || (hours == 12 && minutes < 16)) {
        period = 5;
        time = 60 * (12 - hours) + 16 - minutes;
    } else if ((hours == 12 && minutes >= 20) || (hours == 13 && minutes < 11)) {
        period = 6
        time = 60 * (13 - hours) + 11 - minutes;

    } else if ((hours == 13 && minutes >= 15) || (hours == 14 && minutes < 6)) {
        period = 7;
        time = 60 * (14 - hours) + 6 - minutes;
    } else if ((hours == 14 && minutes >= 10) || (hours == 15 && minutes < 5)) {
        period = 8;
        time = 60 * (15 - hours) + 5 - minutes;
    } else {
        pp = true;
        period = "Passing";

    }



    if ((hours >= 15 && minutes >= 5) || hours <= 7 && minutes < 45) {
        document.getElementById("label-period").innerHTML = "Period: ---";


    } else {
        document.getElementById("label-period").innerHTML = "Period: " + period;
        document.getElementById("time-remainLabel").innerHTML = "Minutes left in period: " + time;


    }



}
