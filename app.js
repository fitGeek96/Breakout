//jshint esversion:9
const rulesBtnEl = document.getElementById('rules__btn');
const closeBtnEl = document.getElementById('close__btn');
const rulesEl = document.getElementById('rules');
const canvasEl = document.getElementById('canvas');
const canvas = canvasEl.getContext('2d');

let score = 0;


// Create ball props
const ball = {
    x: canvasEl.width / 2,
    y: canvasEl.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
};

// Create paddle props
const paddle = {
    x: canvasEl.width / 2 - 40,
    y: canvasEl.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0
};

// Draw Score on Canvas 
function drawScore(){
    canvas.font = '20px Arial';
    canvas.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw Paddle On Canvas
function drawPaddle() {
    canvas.beginPath();
    canvas.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    canvas.fillStyle = '#0095dd';
    canvas.fill();
    canvas.closePath();
}

// Draw ball on Canvas
function drawBall() {
    canvas.beginPath();
    canvas.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    canvas.fillStyle = '#0095dd';
    canvas.fill();
    canvas.closePath();
}

function draw() {
    drawBall();
    drawPaddle();
}

draw();

// Rules and Close event handlers

rulesBtnEl.addEventListener('click', () => {
    rulesEl.classList.add('show');
});

closeBtnEl.addEventListener('click', () => {
    rulesEl.classList.remove('show');
});