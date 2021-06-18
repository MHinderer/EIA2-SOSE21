"use strict";
var Main11;
(function (Main11) {
    class Cloud extends Main11.Move {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.velocityX = 0.9;
            this.velocityY = 0.1;
        }
        // From Codepen
        draw() {
            Main11.crc2.save();
            Main11.crc2.translate(this.posX, this.posY);
            Main11.crc2.beginPath();
            Main11.crc2.moveTo(170, 80);
            Main11.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            Main11.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            Main11.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            Main11.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            Main11.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            Main11.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            Main11.crc2.closePath();
            Main11.crc2.lineWidth = 0;
            Main11.crc2.fillStyle = "#f2ffff";
            Main11.crc2.fill();
            Main11.crc2.strokeStyle = "#dbffff";
            Main11.crc2.stroke();
            Main11.crc2.restore();
        }
        update() {
            if (this.posX > Main11.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Main11.crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    Main11.Cloud = Cloud;
})(Main11 || (Main11 = {}));
//# sourceMappingURL=cloud11.js.map