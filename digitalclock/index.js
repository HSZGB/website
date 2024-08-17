const clock = document.getElementById("clock");

function updateClock() {
    let x = new Date();
    let hours = x.getHours().toString().padStart(2, '0');
    let minutes = x.getMinutes().toString().padStart(2, '0');
    let seconds = x.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);