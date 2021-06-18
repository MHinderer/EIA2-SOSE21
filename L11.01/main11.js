"use strict";
var Main11;
(function (Main11) {
    Main11.golden = 0.4;
    Main11.rotate = 0;
    let move = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Main11.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(20);
        createBackground();
        createFlowers();
        createCloud();
        imageData = Main11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }
    function createBackground() {
        Main11.drawBackground();
        Main11.drawSun({ x: Main11.crc2.canvas.width / 2, y: Main11.crc2.canvas.height * 0.15 });
        Main11.drawMountains({ x: 0, y: Main11.crc2.canvas.height * Main11.golden }, 200, 300, "grey");
        Main11.drawMountains({ x: 0, y: Main11.crc2.canvas.height * Main11.golden }, 125, 200, "lightgrey");
        Main11.BeesHome();
    }
    function createFlowers() {
        let xPos = 0;
        let flowerType = Math.floor(Math.random() * 2) + 1;
        do {
            if (flowerType == 1) {
                flowers.push(new Main11.Flower1(xPos, 5 + (Main11.crc2.canvas.height * Main11.golden), Main11.crc2.canvas.height * 0.8));
            }
            else {
                flowers.push(new Main11.Flower2(xPos, 5 + (Main11.crc2.canvas.height * Main11.golden), Main11.crc2.canvas.height * 0.8));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < Main11.crc2.canvas.width);
    }
    function createBees(_nbrBee) {
        for (let index = 0; index < _nbrBee; index++) {
            let randomScale = 0.5 + Math.random() * (4.5 - 1.8);
            let randomVelocityX = (Math.random() - 0.8) * 8;
            let randomVelocityY = (Math.random() - 0.8) * 5;
            move.push(new Main11.Bees({ x: Main11.crc2.canvas.width / 2, y: Main11.crc2.canvas.height * Main11.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        move.push(new Main11.Cloud({ x: Main11.crc2.canvas.width * .5, y: Main11.crc2.canvas.height * .01 }, { x: 0.5, y: 0.8 }));
        move.push(new Main11.Cloud({ x: Main11.crc2.canvas.width * .1, y: Main11.crc2.canvas.height * .08 }, { x: 0.5, y: 0.8 }));
    }
    function animation() {
        requestAnimationFrame(animation);
        Main11.crc2.clearRect(0, 0, Main11.crc2.canvas.width, Main11.crc2.canvas.height);
        Main11.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < flowers.length; index++) {
            flowers[index].updateNectar();
        }
        for (let index = 0; index < move.length; index++) {
            move[index].update();
            move[index].draw();
        }
    }
})(Main11 || (Main11 = {}));
//# sourceMappingURL=main11.js.map