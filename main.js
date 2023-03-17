var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
var FPS = 50;

setInterval(function(){
    ctx.clearRect(0, 0, 600, 150);
    
    ctx.fillStyle ="#fff";
    ctx.strokeStyle ="#fff";
    ctx.lineWidth = 5;
    ctx.fillRect(0, 0, 150, 130);
    ctx.strokeRect(0, 0, 150, 130);

    ctx.fillStyle ="#fff";
    ctx.strokeStyle ="#fff";
    ctx.lineWidth = 5;
    ctx.fillRect(450, 0, 150, 130);
    ctx.strokeRect(450, 0, 150, 130);
}, 1000/FPS);

