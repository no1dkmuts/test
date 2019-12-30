var cell = 20;
const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');
const mode1 = document.querySelector(".modeA");
const mode2 = document.querySelector(".modeB")
let game;
let snake = [];
snake[0] = {
    x: 10 * cell,
    y: 10 * cell
}
let bait = {
    x: (Math.floor(Math.random() *
        20 + 1) - 1) * 20,
    y: (Math.floor(Math.random() *
        20 + 1) - 1) * 20
}


let d = "";

document.addEventListener("keydown", direction);
function direction(event) {
    if (event.keyCode == 37 && d != "RIGHT") {
        d = "LEFT";

    } else if (event.keyCode == 38 && d != "DOWN") {
        d = "UP";

    } else if (event.keyCode == 39 && d != "LEFT") {
        d = "RIGHT";
    }
    else if (event.keyCode == 40 && d != "UP") {
        d = "DOWN";

    }
}
function hitTails(head, snake) {
    for (let i = 0; i < snake.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;

}

function modeA() {
    ctx.clearRect(0, 0, 400, 400);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "aqua" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, 20, 20);

    }
    ctx.fillStyle = "black";
    ctx.fillRect(bait.x, bait.y, 20, 20);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (d == "LEFT") {
        snakeX -= 20
        if (snakeX < 0) snakeX = 400

    }
    if (d == "RIGHT") {
        snakeX += 20
        if (snakeX > 400) snakeX = 0
    }
    if (d == "UP") {
        snakeY -= 20
        if (snakeY < 0) snakeY = 400

    }
    if (d == "DOWN") {
        snakeY += 20
        if (snakeY > 400) snakeY = 0

    }
    if (snakeX == bait.x && snakeY == bait.y) {
        bait = {
            x: (Math.floor(Math.random() * 20 + 1) - 1) * 20,
            y: (Math.floor(Math.random() * 20 + 1) - 1) * 20
        }
        console.log(snake)
    } else {
        snake.pop();

    }
    let snakeHead = {
        x: snakeX,
        y: snakeY
    }

    

    if (hitTails(snakeHead, snake)) {
        clearInterval(game)
    }
    snake.unshift(snakeHead);

}
function modeB() {
    ctx.clearRect(0, 0, 400, 400);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "aqua" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, 20, 20);

    }
    ctx.fillStyle = "black";
    ctx.fillRect(bait.x, bait.y, 20, 20);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (d == "LEFT") {
        snakeX -= 20

    }
    if (d == "RIGHT") {
        snakeX += 20
    }
    if (d == "UP") {
        snakeY -= 20

    }
    if (d == "DOWN") {
        snakeY += 20

    }
    if (snakeX == bait.x && snakeY == bait.y) {
        bait = {
            x: (Math.floor(Math.random() * 20 + 1) - 1) * 20,
            y: (Math.floor(Math.random() * 20 + 1) - 1) * 20
        }
        console.log(snake)
    } else {
        snake.pop();

    }
    let snakeHead = {
        x: snakeX,
        y: snakeY
    }

    if (snakeX < 0 || snakeX > 380 || snakeY < 0 || snakeY > 380 || hitTails(snakeHead, snake)) {
        clearInterval(game)
    }

    if (hitTails(snakeHead, snake)) {
        clearInterval(game)
    }
    snake.unshift(snakeHead);

}

mode1.addEventListener("click", function () {
   
    game = setInterval(modeA, 1000);
})
mode2.addEventListener("click", function () {
   
    game = setInterval(modeB, 1000)
})


