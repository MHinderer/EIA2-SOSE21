"use strict";
var Main09;
(function (Main09) {
    function BeesHome() {
        Main09.crc2.save();
        Main09.crc2.translate(Main09.crc2.canvas.width / 2, Main09.crc2.canvas.height * 0.35);
        Main09.crc2.scale(11, 11);
        Main09.crc2.lineWidth = 0.5;
        Main09.crc2.strokeStyle = "beige";
        Main09.crc2.beginPath();
        Main09.crc2.moveTo(0, 0);
        Main09.crc2.lineTo(6, 6);
        Main09.crc2.lineTo(4, 12);
        Main09.crc2.lineTo(-4, 12);
        Main09.crc2.lineTo(-6, 6);
        Main09.crc2.lineTo(0, 0);
        Main09.crc2.fillStyle = "brown";
        Main09.crc2.fill();
        Main09.crc2.closePath();
        Main09.crc2.stroke();
        Main09.crc2.beginPath();
        Main09.crc2.arc(0, 8, 1.5, 0, 2 * Math.PI);
        Main09.crc2.fillStyle = "beige";
        Main09.crc2.fill();
        Main09.crc2.closePath();
        Main09.crc2.restore();
    }
    Main09.BeesHome = BeesHome;
    class Flowers {
        constructor(_flowerType, _xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            let randomScale = 0.3 + Math.random() * (1.3 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Main09.crc2.save();
            Main09.crc2.translate(this.xPos, y);
            Main09.crc2.scale(randomScale, randomScale);
            if (this.flowerType == 1) {
                for (let index = 0; index < 4; index++) {
                    Main09.crc2.beginPath();
                    Main09.crc2.fillStyle = "#185A18";
                    Main09.crc2.fillRect(0, -25, 2.4, 25);
                    Main09.crc2.ellipse(-3.5, -14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
                    Main09.crc2.closePath();
                    Main09.crc2.fill();
                    Main09.crc2.beginPath();
                    Main09.crc2.arc(1.2, -33, 12, 0, 2 * Math.PI);
                    Main09.crc2.fillStyle = "DarkTurquoise";
                    Main09.crc2.fill();
                    Main09.crc2.beginPath();
                    Main09.crc2.arc(10.2, -42, 12, 0, 2 * Math.PI);
                    Main09.crc2.fillStyle = "Turquoise";
                    Main09.crc2.fill();
                    Main09.crc2.beginPath();
                    Main09.crc2.arc(1.2, -51, 12, 0, 2 * Math.PI);
                    Main09.crc2.fillStyle = "LightTurquoise";
                    Main09.crc2.fill();
                    Main09.crc2.beginPath();
                    Main09.crc2.arc(-7.8, -42, 12, 0, 2 * Math.PI);
                    Main09.crc2.fillStyle = "Aquamarine";
                    Main09.crc2.fill();
                    Main09.crc2.beginPath();
                    Main09.crc2.fillStyle = "black";
                    Main09.crc2.arc(1.2, -42, 7, 0, 2 * Math.PI);
                    Main09.crc2.fill();
                }
                Main09.crc2.restore();
            }
            else {
                Main09.crc2.beginPath();
                Main09.crc2.fillStyle = "#185A18";
                Main09.crc2.fillRect(0, -25, 2.4, 25);
                Main09.crc2.ellipse(-3.5, -14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
                Main09.crc2.ellipse(5, -17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
                Main09.crc2.closePath();
                Main09.crc2.fill();
                Main09.crc2.beginPath();
                Main09.crc2.fillStyle = "#C61884";
                for (let i = 0; i < 5; i++) {
                    Main09.crc2.ellipse(1.2, -42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
                }
                Main09.crc2.fill();
                Main09.crc2.beginPath();
                Main09.crc2.fillStyle = "#DF5AC3";
                for (let i = 0; i < 5; i++) {
                    Main09.crc2.ellipse(1.2, -42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
                }
                Main09.crc2.closePath();
                Main09.crc2.fill();
                Main09.crc2.beginPath();
                Main09.crc2.fillStyle = "#DFC6C3";
                Main09.crc2.arc(1.2, -42, 3.8, 0, 2 * Math.PI);
                Main09.crc2.fill();
                Main09.crc2.restore();
            }
        }
    }
    Main09.Flowers = Flowers;
})(Main09 || (Main09 = {}));
//# sourceMappingURL=flowers09.js.map