const clock = document.getElementById("clock");

function updateClock(time) {
    let x = new Date(time);


    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor(time / (1000 * 60)) % 60;
    let seconds = Math.floor(time / 1000) % 60;
    let miliseconds = Math.floor(time % 1000 / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    miliseconds = String(miliseconds).padStart(2, '0');

    clock.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
    
let startTime = 0;
let stopTime = 0;
let intervalId;
let passTime = 0;
let started = false;

function start() {
    if (started)
        return;
    else
        started = true;
    startTime = Date.now();
    let tmp = passTime;
    intervalId = setInterval(() => {
        updateClock(Date.now() - startTime + tmp);
    }, 10);
}

function stop() {
    if (!started)
        return;
    started = false;
    stopTime = Date.now();
    passTime += Date.now() - startTime;
    clearInterval(intervalId);
}

function reset() {
    started = false;
    passTime = 0;
    startTime = 0;
    clearInterval(intervalId);
    updateClock(0);
}

updateClock(0);

// let intervalId = setInterval(() => {
//     updateClock(Date.now() - startTime);
// }, 10);