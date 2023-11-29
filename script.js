// script.js
const gameContainer = document.getElementById('gameContainer');
const scoreDisplay = document.getElementById('score');
let score = 0;

function addBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Random position
    balloon.style.left = Math.random() * 550 + 'px';
    balloon.style.top = Math.random() * 350 + 'px';

    balloon.addEventListener('click', popBalloon);

    gameContainer.appendChild(balloon);

    // Remove balloon after some time
    setTimeout(() => {
        if(balloon.parentNode) {
            balloon.parentNode.removeChild(balloon);
        }
    }, 3000);
}

function popBalloon(event) {
    event.target.parentNode.removeChild(event.target);
    score++;
    scoreDisplay.innerText = score;
}

setInterval(addBalloon, 1000);
