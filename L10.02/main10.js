"use strict";
var Main10;
(function (Main10) {
    Main10.golden = 0.4;
    Main10.rotate = 0;
    let move = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Main10.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(20);
        createBackground();
        createFlowers();
        createCloud();
        imageData = Main10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }
    function createBackground() {
        Main10.drawBackground();
        Main10.drawSun({ x: Main10.crc2.canvas.width / 2, y: Main10.crc2.canvas.height * 0.15 });
        Main10.drawMountains({ x: 0, y: Main10.crc2.canvas.height * Main10.golden }, 200, 300, "grey");
        Main10.drawMountains({ x: 0, y: Main10.crc2.canvas.height * Main10.golden }, 125, 200, "lightgrey");
        Main10.BeesHome();
    }
    function createFlowers() {
        let xPos = 0;
        let flowerType = Math.floor(Math.random() * 2) + 1;
        do {
            if (flowerType == 1) {
                flowers.push(new Main10.Flower1(xPos, 5 + (Main10.crc2.canvas.height * Main10.golden), Main10.crc2.canvas.height * 0.8));
            }
            else {
                flowers.push(new Main10.Flower2(xPos, 5 + (Main10.crc2.canvas.height * Main10.golden), Main10.crc2.canvas.height * 0.8));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < Main10.crc2.canvas.width);
    }
    function createBees(_nbrBee) {
        for (let index = 0; index < _nbrBee; index++) {
            let randomScale = 0.5 + Math.random() * (4.5 - 1.8);
            let randomVelocityX = (Math.random() - 0.8) * 8;
            let randomVelocityY = (Math.random() - 0.8) * 5;
            move.push(new Main10.Bees({ x: Main10.crc2.canvas.width / 2, y: Main10.crc2.canvas.height * Main10.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        move.push(new Main10.Cloud({ x: Main10.crc2.canvas.width * .5, y: Main10.crc2.canvas.height * .01 }, { x: 0.5, y: 0.8 }));
        move.push(new Main10.Cloud({ x: Main10.crc2.canvas.width * .1, y: Main10.crc2.canvas.height * .08 }, { x: 0.5, y: 0.8 }));
    }
    function animation() {
        requestAnimationFrame(animation);
        Main10.crc2.clearRect(0, 0, Main10.crc2.canvas.width, Main10.crc2.canvas.height);
        Main10.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < move.length; index++) {
            move[index].update();
            move[index].draw();
        }
    }
})(Main10 || (Main10 = {}));
//# sourceMappingURL=main10.js.map