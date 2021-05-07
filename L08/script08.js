"use strict";
window.onload = function () {
    let canvas = document.querySelector("canvas");
    let context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    function randomize() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        for (let i = 0; i < 1000; i++) {
            let v = Math.floor(Math.random() * canvas.width);
            let w = Math.floor(Math.random() * canvas.height);
            let x = Math.floor(Math.random() * canvas.width);
            let y = Math.floor(Math.random() * canvas.height);
            let z = Math.floor(Math.random() * canvas.width);
            let a = Math.floor(Math.random() * canvas.height);
            let r = Math.floor(Math.random() * 250);
            let g = Math.floor(Math.random() * 250);
            let b = Math.floor(Math.random() * 250);
            context.beginPath();
            context.strokeStyle = "rgba(" + r + "," + g + "," + b + ",1)";
            context.lineWidth = 10;
            context.moveTo(x, z);
            context.lineTo(a, w);
            context.lineTo(v, y);
            context.closePath();
            context.stroke();
            for (let i = 600; i < 700; i++) {
                let x = Math.floor(Math.random() * canvas.width);
                let y = Math.floor(Math.random() * canvas.height);
                let radius = Math.floor(Math.random() * 90);
                let r = Math.floor(Math.random() * 250);
                let g = Math.floor(Math.random() * 250);
                let b = Math.floor(Math.random() * 250);
                context.beginPath();
                context.arc(x, y, radius, Math.PI * 2, 0, false);
                context.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
                context.fill();
                context.closePath();
            }
        }
    }
    randomize();
};
//# sourceMappingURL=script08.js.map