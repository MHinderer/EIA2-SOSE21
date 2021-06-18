"use strict";
var Main11;
(function (Main11) {
    class Flower2 extends Main11.Flowers {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }
        draw() {
            let randomScale = 0.3 + Math.random() * (1.3 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Main11.crc2.save();
            Main11.crc2.translate(this.xPos, y);
            Main11.crc2.scale(randomScale, randomScale);
            Main11.crc2.beginPath();
            Main11.crc2.fillStyle = "#185A18";
            Main11.crc2.fillRect(0, -25, 2.4, 25);
            Main11.crc2.ellipse(-3.5, -14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            Main11.crc2.ellipse(5, -17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            Main11.crc2.closePath();
            Main11.crc2.fill();
            Main11.crc2.beginPath();
            Main11.crc2.fillStyle = "#C61884";
            for (let i = 0; i < 5; i++) {
                Main11.crc2.ellipse(1.2, -42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            Main11.crc2.fill();
            Main11.crc2.beginPath();
            Main11.crc2.fillStyle = "#DF5AC3";
            for (let i = 0; i < 5; i++) {
                Main11.crc2.ellipse(1.2, -42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            Main11.crc2.closePath();
            Main11.crc2.fill();
            Main11.crc2.beginPath();
            Main11.crc2.fillStyle = "#DFC6C3";
            Main11.crc2.arc(1.2, -42, 3.8, 0, 2 * Math.PI);
            Main11.crc2.fill();
            Main11.crc2.restore();
        }
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 25) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            }
            else {
                console.log("nektar full");
            }
            Main11.crc2.save();
            Main11.crc2.translate(this.xPos, this.yPos);
            Main11.crc2.scale(this.randomScale, this.randomScale);
            Main11.crc2.beginPath();
            Main11.crc2.arc(0, -7, this.nectarLength, 0, 2 * Math.PI);
            Main11.crc2.fillStyle = "red";
            Main11.crc2.fill();
            Main11.crc2.stroke();
            Main11.crc2.restore();
        }
    }
    Main11.Flower2 = Flower2;
})(Main11 || (Main11 = {}));
//# sourceMappingURL=flower2.js.map