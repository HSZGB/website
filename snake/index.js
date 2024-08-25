class snakeBody {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let size = 50;

let step = 50;
let body = [new snakeBody(0, 0)];
let direction = {x: step, y: 0};
let food = {x: 0, y: 0};

function changeDirection(event) {
    body[0].y += step;
    body[0].y -= step;
    body[0].x -= step;
    body[0].x += step;
    switch (event.key) {
        case "ArrowDown":
            direction = {x: 0, y: step};
            break;
        case "ArrowUp":
            direction = {x: 0, y: -step};
            break;
        case "ArrowLeft":
            direction = {x: -step, y: 0};
            break;
        case "ArrowRight":
            direction = {x: step, y: 0};
            break;
    }
}

function placeFood() {
    let existFood = document.getElementById("myFood");
    do {
        newFood = {x: Math.floor(Math.random() * (7)) * size, y: Math.floor(Math.random() * (7)) * size};
    } while (body.some((element) => element.x === newFood.x && element.y === newFood.y));
    food = newFood;
    existFood.style.top = `${newFood.y}px`;
    existFood.style.left = `${newFood.x}px`;
}

function moveSnake() {
    let tmpx = body[body.length - 1].x, tmpy = body[body.length - 1].y;
    body[0].x += direction.x;
    body[0].y += direction.y;
    for (let i = body.length - 1; i >= 1; i--) {
        body[i].x = body[i - 1].x;
        body[i].y = body[i - 1].y;
    }
    if (food.x == body[0].x && food.y == body[0].y) {
        body.push(new snakeBody(tmpx, tmpy));
        placeFood();
    }
    bodyDraw();
}

document.addEventListener("keydown", changeDirection);

function bodyDraw() {
    for (let i = 0; i < body.length; i++) {
        body[i].x %= 1000;
        body[i].x += 1000;
        body[i].x %= 1000;
        body[i].y %= 1000;
        body[i].y += 1000;
        body[i].y %= 1000;
        let existDiv = document.getElementById(`myDiv${i}`);
        if (existDiv) {
            existDiv.style.top = `${body[i].y}px`;
            existDiv.style.left = `${body[i].x}px`;
        } else {
            let tmp = document.createElement("div");
            tmp.style.top = `${body[i].y}px`;
            tmp.style.left = `${body[i].x}px`;
            tmp.classList.add("snakeBody");
            tmp.id = `myDiv${i}`;
            tmp.textContent = `${i}`;
            document.body.append(tmp);
        }
    }
}
let tmp = document.createElement("div");
tmp.id = "myFood";
tmp.classList.add("food");
document.body.append(tmp);
placeFood();
setInterval(moveSnake, 50);