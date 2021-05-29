"use strict";
var Main09;
(function (Main09) {
    Main09.golden = 0.4;
    Main09.rotate = 0;
    let bees = [];
    let flowers = [];
    let clouds = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Main09.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(20);
        createBackground();
        createFlowers();
        createCloud();
        imageData = Main09.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }
    function createBackground() {
        Main09.drawBackground();
        Main09.drawSun({ x: Main09.crc2.canvas.width / 2, y: Main09.crc2.canvas.height * 0.15 });
        Main09.drawMountains({ x: 0, y: Main09.crc2.canvas.height * Main09.golden }, 200, 300, "grey");
        Main09.drawMountains({ x: 0, y: Main09.crc2.canvas.height * Main09.golden }, 125, 200, "lightgrey");
        Main09.BeesHome();
    }
    function createFlowers() {
        let xPos = 0;
        do {
            flowers.push(new Main09.Flowers(Math.floor(Math.random() * 2) + 1, xPos, 5 + (Main09.crc2.canvas.height * Main09.golden), Main09.crc2.canvas.height * 0.8));
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < Main09.crc2.canvas.width);
    }
    function createBees(_nbrBee) {
        for (let index = 0; index < _nbrBee; index++) {
            let randomScale = 0.5 + Math.random() * (4.5 - 1.8);
            let randomVelocityX = (Math.random() - 0.8) * 8;
            let randomVelocityY = (Math.random() - 0.8) * 5;
            bees.push(new Main09.Bees({ x: Main09.crc2.canvas.width / 2, y: Main09.crc2.canvas.height * Main09.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        clouds.push(new Main09.Cloud({ x: Main09.crc2.canvas.width * .5, y: Main09.crc2.canvas.height * .01 }));
        clouds.push(new Main09.Cloud({ x: Main09.crc2.canvas.width * .1, y: Main09.crc2.canvas.height * .08 }));
    }
    function animation() {
        requestAnimationFrame(animation);
        Main09.crc2.clearRect(0, 0, Main09.crc2.canvas.width, Main09.crc2.canvas.height);
        Main09.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bees.length; index++) {
            bees[index].update();
        }
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(Main09 || (Main09 = {}));
//# sourceMappingURL=main09.js.map