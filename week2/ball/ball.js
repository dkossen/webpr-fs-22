
const radius = 10;
const ball = {x:20, y:10, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};
let callCount = 0;

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        // stop if velocity is barely visible anymore
        if (Math.abs(ball.dx) < 0.1 && Math.abs(ball.dy) < 0.1) {
            return;
        }
        nextBoard();
        callCount++;
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x;
    old.y = ball.y;
    // handle ball is hitting the bounds
    if (ball.y >= 390 && ball.dy > 0) {
        // lose some energy relative to the current inertia (only velocity varies)
        ball.dy -= 4;
        // reverse direction
        ball.dy *= -1;
    } else if (ball.x <= 10 && ball.dx < 0 || ball.x >= 390 && ball.dx > 0) {
        // reverse direction
        ball.dx *= -1;
        // lose some energy relative to the current inertia (only velocity varies)
        ball.dx *= 0.8;
    }
    // calculate new position
    ball.x += ball.dx;
    ball.y += ball.dy;
    ball.y = Math.min(390, ball.y);
    // calculate any changes in velocity due to gravitational pull or medium resistance
    ball.dy += 1.5;



}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context);
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


