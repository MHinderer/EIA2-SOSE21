"use strict";
var Flowerfield;
(function (Flowerfield) {
    window.addEventListener("load", handleload);
    let canvas;
    let crc2;
    var rotate = 0;
    function handleload() {
        canvas = document.querySelector("canvas");
        canvas.id = "canvas";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#b3f0ff";
        crc2 = canvas.getContext("2d");
        drawSun();
        drawMountains(window.innerHeight * 0.4, "#4f4942");
        drawMountains(window.innerHeight * 0.4, "#787067");
        drawField();
        for (let i = 0; i < 15; i++) {
            let cordX = (Math.random() * window.innerWidth - 10);
            let cordY = (Math.random() * (window.innerHeight - window.innerHeight * 0.4) + window.innerHeight * 0.4);
            drawFlower(cordX, cordY);
        }
        for (let i = 0; i < 15; i++) {
            let cordX = (Math.random() * window.innerWidth - 10);
            let cordY = (Math.random() * (window.innerHeight - window.innerHeight * 0.4) + window.innerHeight * 0.4);
            drawFlower2(cordX, cordY);
        }
    }
    function drawSun() {
        let colorSun = "#ffffcc";
        updateAnimation();
        //die letzten zwei nullen sind eigentlich window.innerWidth und height. doch wenn ich diese Werte einsetzte, 
        //dann verschwindet alles auser die Sonne...
        crc2.clearRect(0, 0, 0, 0);
        crc2.save();
        crc2.moveTo(100, 100);
        crc2.translate(100, 100);
        crc2.translate(100, 100);
        crc2.rotate(rotate);
        crc2.beginPath();
        crc2.arc(0, 0, 60, 0, 2 * Math.PI, false);
        crc2.fillStyle = colorSun;
        crc2.fill();
        let rotate2 = 0;
        for (let i = 0; i < 8; i++) {
            crc2.save();
            crc2.fillStyle = "#ffff99";
            crc2.rotate(rotate2);
            crc2.translate(75, 0);
            if (i % 2 == 0)
                crc2.fillRect(0, 0, 150, 2);
            else
                crc2.fillRect(0, 0, 75, 2);
            crc2.restore();
            rotate2 += (2 * Math.PI) / 8;
        }
        crc2.restore();
        setTimeout(drawSun, 30);
    }
    function updateAnimation() {
        rotate += Math.PI / 200;
    }
    // Inspiriert bei Jirka
    function drawMountains(_height, _color) {
        let min = 80;
        let max = 200;
        let stepMin = 100;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.4);
        crc2.lineTo(0, _height);
        crc2.translate(0, _height);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -min - Math.random() * (max - min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(window.innerWidth, window.innerHeight * 0);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.restore();
    }
    function drawField() {
        crc2.beginPath();
        crc2.moveTo(0, window.innerHeight * 0.4);
        crc2.lineTo(window.innerWidth, window.innerHeight * 0.4);
        crc2.lineTo(window.innerWidth, window.innerHeight);
        crc2.lineTo(0, window.innerHeight);
        crc2.lineTo(0, window.innerHeight * 0.4);
        crc2.strokeStyle = "rgba(1, 1, 1, 0)";
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#b3ffb3");
        gradient.addColorStop(0.5, "#66ff66");
        gradient.addColorStop(1, "#00b300");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    function drawFlower(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.fillRect(_x, _y - 25, 2.4, 25);
        crc2.ellipse(_x - 3.5, _y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 1.2, _y - 33, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "DarkTurquoise";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 10.2, _y - 42, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "Turquoise";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 1.2, _y - 51, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "LightTurquoise";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 7.8, _y - 42, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "Aquamarine";
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(_x + 1.2, _y - 42, 7, 0, 2 * Math.PI);
        crc2.fill();
    }
    //Die Blüte hat mir Mona Stingl gezeigt
    function drawFlower2(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#185A18";
        crc2.fillRect(_x, _y - 25, 2.4, 25);
        crc2.ellipse(_x - 3.5, _y - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.ellipse(_x + 5, _y - 17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#C61884";
        for (let i = 0; i < 5; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DF5AC3";
        for (let i = 0; i < 5; i++) {
            crc2.ellipse(_x + 1.2, _y - 42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#DFC6C3";
        crc2.arc(_x + 1.2, _y - 42, 3.8, 0, 2 * Math.PI);
        crc2.fill();
    }
})(Flowerfield || (Flowerfield = {}));
//# sourceMappingURL=script08.js.map