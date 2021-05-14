let mseconds = 0;
let seconds = 0
let minutes = 0;
let hours = 0;

let displayMSeconds = 0;
let displaySeconds = 0
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "stopped"

function stopWatch() {

    mseconds++;

    if (mseconds / 100 === 1) {
        mseconds = 0;
        seconds++;

        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;

            if (minutes / 60 === 1) {
                minutes = 0;
                hours++;
            }
        }

    }

    if (mseconds < 10) {
        displayMSeconds = "0" + mseconds.toString();
    }
    else {
        displayMSeconds = mseconds;
    }
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }


    document.getElementById("time").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMSeconds;
}

function startStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("start").innerHTML = "Stop"
        status = "started"
    }
    else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "Start"
        status = "stopped"
    }

}

function reset() {
    window.clearInterval(interval);
    mseconds = 0;
    seconds = 0;
    hours = 0;
    document.getElementById("time").innerHTML = "00:00:00:00";
}