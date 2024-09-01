let body = [{x: 0, y: 0}];
let direction = {x: 1, y: 0};
let food = {x: 0, y: 0};
let gameInterval;
let gameBoard = document.getElementById("gameBoard");
let boardSize = 20;
let board = [];
let moved = false;

function changeDirection(event) {
    if (!moved)
        return;
    moved = false;
    switch (event.key) {
        case "ArrowDown":
            if (direction.x === 0)
                direction = {x: 1, y: 0};
            break;
        case "ArrowUp":
            if (direction.x === 0)
                direction = {x: -1, y: 0};
            break;
        case "ArrowLeft":
            if (direction.y === 0)
                direction = {x: 0, y: -1};
            break;
        case "ArrowRight":
            if (direction.y === 0)
                direction = {x: 0, y: 1};
            break;
    }
}

function placeFood() {
    let existFood = document.getElementById("myFood");
    do {
        newFood = {x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize)};
    } while (body.some((element) => element.x === newFood.x && element.y === newFood.y));
    food = newFood;
    existFood.style.top = `${newFood.y}px`;
    existFood.style.left = `${newFood.x}px`;
}

function moveSnake() {
    let tmpx = body[body.length - 1].x, tmpy = body[body.length - 1].y;
    for (let i = body.length - 1; i >= 1; i--) {
        body[i].x = body[i - 1].x;
        body[i].y = body[i - 1].y;
    }
    body[0].x += direction.x;
    body[0].y += direction.y;
    body = body.map(element => {
        element.x %= boardSize;
        element.x += boardSize;
        element.x %= boardSize;
        element.y %= boardSize;
        element.y += boardSize;
        element.y %= boardSize;
        return element;
    });
    for (let i = 1; i < body.length; i++)
        if (body[i].x === body[0].x && body[i].y === body[0].y) {
            bodyDraw();
            clearInterval(gameInterval);
            setTimeout(() => {
                alert(`Game Over! Your score is ${body.length}!`);  // 延迟弹出提示框
                let restart = confirm("Do you want to restart?");
                if (restart)
                    startGame();
                else
                    alert("Thank you for playing!");
            }, 0);
            return;
        }
    if (food.x == body[0].x && food.y == body[0].y) {
        body.push({x: tmpx, y: tmpy});
        placeFood();
    }
    bodyDraw();
    moved = true;
}

document.addEventListener("keydown", changeDirection);

function bodyDraw() {
    for (let i = 0; i < boardSize; i++)
        for (let j = 0; j < boardSize; j++) {
            board[i][j].classList.remove("snakeBody", "food");
            board[i][j].textContent = "";
        }
    body.forEach((element, index) => {
        board[element.x][element.y].classList.add("snakeBody");
        board[element.x][element.y].textContent = index;
    });
    board[food.x][food.y].classList.add("food");
}

function init() {
    let tmp = document.createElement("div");
    tmp.id = "myFood";
    tmp.classList.add("food");
    document.body.append(tmp);
    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("board");
            gameBoard.appendChild(cell);
            board[i][j] = cell;
        }
    }
}

function startGame() {
    init();
    placeFood();
    gameInterval = setInterval(moveSnake, 50);
}

startGame();