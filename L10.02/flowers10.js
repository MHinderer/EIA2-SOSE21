"use strict";
var Main10;
(function (Main10) {
    class Flowers {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            console.log("draw");
        }
    }
    Main10.Flowers = Flowers;
    class Flower1 extends Flowers {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }
        draw() {
            let randomScale = 0.3 + Math.random() * (1.3 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Main10.crc2.save();
            Main10.crc2.translate(this.xPos, y);
            Main10.crc2.scale(randomScale, randomScale);
            for (let index = 0; index < 4; index++) {
                Main10.crc2.beginPath();
                Main10.crc2.fillStyle = "#185A18";
                Main10.crc2.fillRect(0, -25, 2.4, 25);
                Main10.crc2.ellipse(-3.5, -14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
                Main10.crc2.closePath();
                Main10.crc2.fill();
                Main10.crc2.beginPath();
                Main10.crc2.arc(1.2, -33, 12, 0, 2 * Math.PI);
                Main10.crc2.fillStyle = "DarkTurquoise";
                Main10.crc2.fill();
                Main10.crc2.beginPath();
                Main10.crc2.arc(10.2, -42, 12, 0, 2 * Math.PI);
                Main10.crc2.fillStyle = "Turquoise";
                Main10.crc2.fill();
                Main10.crc2.beginPath();
                Main10.crc2.arc(1.2, -51, 12, 0, 2 * Math.PI);
                Main10.crc2.fillStyle = "LightTurquoise";
                Main10.crc2.fill();
                Main10.crc2.beginPath();
                Main10.crc2.arc(-7.8, -42, 12, 0, 2 * Math.PI);
                Main10.crc2.fillStyle = "Aquamarine";
                Main10.crc2.fill();
                Main10.crc2.beginPath();
                Main10.crc2.fillStyle = "black";
                Main10.crc2.arc(1.2, -42, 7, 0, 2 * Math.PI);
                Main10.crc2.fill();
            }
            Main10.crc2.restore();
        }
    }
    Main10.Flower1 = Flower1;
    class Flower2 extends Flowers {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }
        draw() {
            let randomScale = 0.3 + Math.random() * (1.3 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Main10.crc2.save();
            Main10.crc2.translate(this.xPos, y);
            Main10.crc2.scale(randomScale, randomScale);
            Main10.crc2.beginPath();
            Main10.crc2.fillStyle = "#185A18";
            Main10.crc2.fillRect(0, -25, 2.4, 25);
            Main10.crc2.ellipse(-3.5, -14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            Main10.crc2.ellipse(5, -17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            Main10.crc2.closePath();
            Main10.crc2.fill();
            Main10.crc2.beginPath();
            Main10.crc2.fillStyle = "#C61884";
            for (let i = 0; i < 5; i++) {
                Main10.crc2.ellipse(1.2, -42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            Main10.crc2.fill();
            Main10.crc2.beginPath();
            Main10.crc2.fillStyle = "#DF5AC3";
            for (let i = 0; i < 5; i++) {
                Main10.crc2.ellipse(1.2, -42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            Main10.crc2.closePath();
            Main10.crc2.fill();
            Main10.crc2.beginPath();
            Main10.crc2.fillStyle = "#DFC6C3";
            Main10.crc2.arc(1.2, -42, 3.8, 0, 2 * Math.PI);
            Main10.crc2.fill();
            Main10.crc2.restore();
        }
    }
    Main10.Flower2 = Flower2;
})(Main10 || (Main10 = {}));
//# sourceMappingURL=flowers10.js.map