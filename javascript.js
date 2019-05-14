var count = 0;
var hours = 13;
var minutes = 15;
var seconds = 0;
var period;
var passing = 0;
var pp = true;
var time = 0;
var myElement = document.querySelector("#dm");






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




function revealDariel() {
    document.getElementById("bottom-text").innerHTML = "created by Eli Hernandez, Dariel Mercado, Daniel Lim, Fernando Nunez, Maylen Ruiz, Nathaly Montoya, Cynric Pigram, Luis Galarza, Isaac Williams, James Charles, Tati, Lexi Paramo, Nintendogs, and Vicente Vargas";
}

function setTimePassing(endHour, endMinute) {
    passing = 60 * (endHour - hours) + endMinute - minutes;
}

function setTime(endHour, endMinute) {
    time = 60 * (endHour - hours) + endMinute - minutes;
}


function currentPeriod() {
    var currentDayOfWeek = new Date();

    var currentDay = currentDayOfWeek.getDay();

    if (currentDay < 5 && currentDay > 0) {
        //mon-thurs schedule
        if ((hours == 7 && minutes >= 45) || (hours == 8 && minutes < 36)) {
            period = 1;
            setTime(8, 36);
        } else if (((hours == 8 && minutes >= 36) && minutes < 40) || (minutes > 36 && (hours == 8 && minutes < 40))) {
            period = "passing";
            setTimePassing(8, 40);
        } else if ((hours == 8 && minutes >= 40) || (hours == 9 && minutes < 31)) {
            period = 2;
            setTime(9, 31);
        } else if (((hours == 9 && minutes >= 31) && minutes < 35) || (minutes > 31 && (hours == 9 && minutes < 35))) {
            period = "passing";
            setTimePassing(9, 35);
        } else if ((hours == 9 && minutes >= 35) || (hours == 10 && minutes < 26)) {
            period = 3;
            setTime(10, 26);
        } else if (((hours == 10 && minutes >= 26) && minutes < 30) || (minutes > 26 && (hours == 10 && minutes < 30))) {
            period = "passing";
            setTimePassing(10, 30);
        } else if ((hours == 10 && minutes >= 30) || (hours == 11 && minutes < 21)) {
            period = 4;
            setTime(11, 21);
        } else if (((hours == 11 && minutes >= 21) && minutes < 25) || (minutes > 21 && (hours == 11 && minutes < 25))) {
            period = "passing";
            setTimePassing(11, 25);

        } else if ((hours == 11 && minutes >= 25) || (hours == 12 && minutes < 16)) {
            period = 5;
            setTime(12, 16);
        } else if (((hours == 12 && minutes >= 16) && minutes < 20) || (minutes > 16 && (hours == 12 && minutes < 20))) {
            period = "passing";
            setTimePassing(12, 20);

        } else if ((hours == 12 && minutes >= 20) || (hours == 13 && minutes < 11)) {
            period = 6
            setTime(13, 11);

        } else if (((hours == 13 && minutes >= 11) && minutes < 15) || (minutes > 11 && (hours == 13 && minutes < 15))) {
            period = "passing";
            setTimePassing(13, 15);

        } else if ((hours == 13 && minutes >= 15) || (hours == 14 && minutes < 6)) {
            period = 7;
            setTime(14, 6);
        } else if (((hours == 14 && minutes >= 6) && minutes < 10) || (minutes > 6 && (hours == 14 && minutes < 10))) {
            period = "passing";
            setTimePassing(14, 10);

        } else if ((hours == 14 && minutes >= 10) || (hours == 15 && minutes < 5)) {
            period = 8;
            setTime(15, 5);
        } else {
            pp = true;
            period = "Passing";

        }

        //end of day
        if ((hours >= 15 && minutes >= 5) || (hours <= 7 && minutes < 45)) {
            document.getElementById("label-period").innerHTML = "Period: No School";


        } else {
            document.getElementById("label-period").innerHTML = "Period: " + period;
            document.getElementById("time-remainLabel").innerHTML = "Minutes left in period: " + time;
            document.getElementById("time-remain-passingLabel").innerHTML = "Minutes left in passing: " + passing;


        }
    } else if (currentDay == 5) {
        //friday schedule
        if ((hours == 7 && minutes >= 45) || (hours == 8 && minutes < 27)) {
            period = 1;
            time = 60 * (8 - hours) + 27 - minutes;
        } else if (((hours == 8 && minutes >= 31) && minutes < 41) || (minutes > 31 && (hours == 8 && minutes < 41))) {
            period = "advisory"
            time = 60 * (8 - hours) + 41 - minutes;
        } else if ((hours == 8 && minutes >= 45) || (hours == 9 && minutes < 27)) {
            period = 2;
            time = 60 * (9 - hours) + 27 - minutes;
        } else if ((hours == 9 && minutes >= 31) || (hours == 10 && minutes < 13)) {
            period = 3;
            time = 60 * (10 - hours) + 13 - minutes;
        } else if ((hours == 10 && minutes >= 17) || (hours == 10 && minutes < 59)) {
            period = 4;
            time = 60 * (10 - hours) + 59 - minutes;
        } else if ((hours == 11 && minutes >= 3) || (hours == 11 && minutes < 45)) {
            period = 5;
            time = 60 * (11 - hours) + 45 - minutes;
        } else if ((hours == 11 && minutes >= 49) || (hours == 12 && minutes < 31)) {
            period = 6
            time = 60 * (12 - hours) + 31 - minutes;
        } else if ((hours == 12 && minutes >= 35) || (hours == 13 && minutes < 17)) {
            period = 7;
            time = 60 * (13 - hours) + 17 - minutes;
        } else if ((hours == 13 && minutes >= 21) || (hours == 14 && minutes < 7)) {
            period = 8;
            time = 60 * (14 - hours) + 7 - minutes;
        } else {
            pp = true;
            period = "Passing";


        }

        //end of day
        if ((hours >= 14 && minutes >= 7) || (hours <= 7 && minutes < 45)) {
            document.getElementById("label-period").innerHTML = "Period: No School";


        } else {
            document.getElementById("label-period").innerHTML = "Period: " + period;
            document.getElementById("time-remainLabel").innerHTML = "Minutes left in period: " + time;


        }


    } else if (currentDay > 5) {
        //weekend
    }



}
