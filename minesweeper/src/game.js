const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d")


// Variables
let inMenu = true;

let bombCount = 0

function menu() {   
    ctx.fillStyle = 'red';
    ctx.fillRect(-100,100,100,100);
}


console.log('go')
setInterval(menu, 20)