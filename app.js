//jshint esversion:9
const rulesBtnEl = document.getElementById('rules__btn');
const closeBtnEl = document.getElementById('close__btn');
const rulesEl = document.getElementById('rules');
const canvasEl = document.getElementById('canvas');
const canvas = canvasEl.getContext('2d');

let score = 0;
const brickRowCount = 9;
const brickColumnCount = 5;

// Create Bricks props
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
};


// Create bricks 
const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
    bricks[i] = [];
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = {
            x,
            y,
            ...brickInfo
        };

    }
}

// Draw bricks on Canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            canvas.beginPath();
            canvas.rect(brick.x, brick.y, brick.w, brick.h);
            canvas.fillStyle = brick.visible ? '#0095dd' : 'transparent';
            canvas.fill();
            canvas.closePath();
        });
    });
}


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
function drawScore() {
    canvas.font = '20px Arial';
    canvas.fillText(`Score: ${score}`, canvasEl.width - 100, 30);
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
    // Clear Canvas
    canvas.clearRect(0, 0, canvasEl.width, canvasEl.height);

    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
}

// Move paddle on Canvas
function movePaddle() {
    paddle.x += paddle.dx;
    // Wall Detection 
    if (paddle.x + paddle.w > canvasEl.width) {
        paddle.x = canvasEl.width - paddle.w;
    }

    if (paddle.x < 0) {
        paddle.x = 0;
    }
}

// Update Canvas Drawing and Animation 

function update() {
    movePaddle();
    // Draw Everything 
    draw();

    requestAnimationFrame(update)

}

update();

// Keydown event 
function keyDown(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        paddle.dx = paddle.speed;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        paddle.dx = -(paddle.speed);
    }
}

// Keyup event 
function KeyUp(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight' || e.key === 'Left' || e.key === 'ArrowLeft') {
        paddle.dx = 0;
    }
}


// KeyBoard event Handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', KeyUp);

// Rules and Close event handlers

rulesBtnEl.addEventListener('click', () => {
    rulesEl.classList.add('show');
});

closeBtnEl.addEventListener('click', () => {
    rulesEl.classList.remove('show');
});