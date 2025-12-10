const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let gridsize = 20;
let speed = 1;
let direction = "right";

let snake = [
    {x:4,y:3},
    {x:3,y:3},
    {x:2,y:3,},
    {x:1,y:3}, 
];

let apple={x: random(canvas.width / gridsize), y: random(canvas.height / gridsize)};

function random(max){
    return Math.floor(Math.random() * max);
}

function rgbStr(r,g,b) {
    return `rgb(${r},${g},${b})`;
}

function i_a_e() {
   
    if (snake[0].x === apple.x && snake[0].y === apple.y) {
        
       
        let last = snake[snake.length - 1];
        snake.push({ x: last.x, y: last.y });
     
        apple = {
            x: random(canvas.width / gridsize),
            y: random(canvas.height / gridsize)
        };
    }
}

function mv() {  


    //


    if(direction==="right") {
        for(let i = snake.length - 1; i >= 0; i--) {
          if (i !== 0){
            snake[i].x = snake[i-1].x
            snake[i].y =snake[i-1].y
          }
          else {
            snake[i].x += speed
          }
        }
    } else if (direction==="down") {
        for(let i = snake.length - 1; i >= 0; i--) {
          if (i !== 0){
            snake[i].x = snake[i-1].x
            snake[i].y =snake[i-1].y
          }
          else {
            snake[i].y += speed
          }
        }
    } else if (direction==="left") {
        for(let i = snake.length - 1; i >= 0; i--) {
          if (i !== 0){
            snake[i].x = snake[i-1].x
            snake[i].y =snake[i-1].y
          }
          else {
            snake[i].x -= speed
          }
        }
    }  else if (direction==="up") {
        for(let i = snake.length - 1; i >= 0; i--) {
          if (i !== 0){
            snake[i].x = snake[i-1].x
            snake[i].y =snake[i-1].y
          }
          else {
            snake[i].y -= speed
          }
        }
    } 
}

function d_s() {    
    console.log(snake[0].x)
    ctx.fillStyle = rgbStr(67, 236, 112)
    for(let i = 0; i < snake.length; i++) {       
           ctx.fillRect((snake[i].x * gridsize) + 1, (snake[i].y * gridsize) + 1, gridsize -1, gridsize-1)  
    }
}

function d_a() {
    ctx.fillStyle = rgbStr(132, 12, 12)
    ctx.fillRect(apple.x * gridsize + 1, apple.y * gridsize + 1, gridsize - 1, gridsize - 1)
}

function bg(r=0,g=0,b=0) {
    ctx.fillStyle = rgbStr(r,g,b)
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height)
}

function update() {   
    mv()  
    i_a_e()
}


function draw() {
    // backgound
    bg()
    // apple
    d_a()
    // player
    d_s()    
}


function loop() {   

    update();
    draw();    
}

// HTML EVENT LISTENER
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && direction !== "down") direction = "up";
    if (e.key === "ArrowDown" && direction !== "up") direction = "down";
    if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (e.key === "ArrowRight" && direction !== "left") direction = "right";
});



setInterval(loop, 1000 / 4)