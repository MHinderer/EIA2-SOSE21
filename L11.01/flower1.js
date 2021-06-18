"use strict";
var Main11;
(function (Main11) {
    class Flower1 extends Main11.Flowers {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }
        draw() {
            let randomScale = 0.3 + Math.random() * (1.3 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Main11.crc2.save();
            Main11.crc2.translate(this.xPos, y);
            Main11.crc2.scale(randomScale, randomScale);
            for (let index = 0; index < 4; index++) {
                Main11.crc2.beginPath();
                Main11.crc2.fillStyle = "#185A18";
                Main11.crc2.fillRect(0, -25, 2.4, 25);
                Main11.crc2.ellipse(-3.5, -14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
                Main11.crc2.closePath();
                Main11.crc2.fill();
                Main11.crc2.beginPath();
                Main11.crc2.arc(1.2, -33, 12, 0, 2 * Math.PI);
                Main11.crc2.fillStyle = "DarkTurquoise";
                Main11.crc2.fill();
                Main11.crc2.beginPath();
                Main11.crc2.arc(10.2, -42, 12, 0, 2 * Math.PI);
                Main11.crc2.fillStyle = "Turquoise";
                Main11.crc2.fill();
                Main11.crc2.beginPath();
                Main11.crc2.arc(1.2, -51, 12, 0, 2 * Math.PI);
                Main11.crc2.fillStyle = "LightTurquoise";
                Main11.crc2.fill();
                Main11.crc2.beginPath();
                Main11.crc2.arc(-7.8, -42, 12, 0, 2 * Math.PI);
                Main11.crc2.fillStyle = "Aquamarine";
                Main11.crc2.fill();
                Main11.crc2.beginPath();
                Main11.crc2.fillStyle = "black";
                Main11.crc2.arc(1.2, -42, 7, 0, 2 * Math.PI);
                Main11.crc2.fill();
            }
            Main11.crc2.restore();
        }
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 25) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
                Main11.crc2.save();
                Main11.crc2.translate(this.xPos, this.yPos);
                Main11.crc2.scale(this.randomScale, this.randomScale);
                Main11.crc2.beginPath();
                Main11.crc2.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
                Main11.crc2.fillStyle = "red";
                Main11.crc2.fill();
                Main11.crc2.restore();
            }
        }
    }
    Main11.Flower1 = Flower1;
})(Main11 || (Main11 = {}));
//# sourceMappingURL=flower1.js.map