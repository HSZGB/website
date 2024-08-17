let count = 0;

const countLabel = document.getElementById("myH1");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

const myAudio = document.getElementById("myAudio");

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
    myAudio.play();
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}