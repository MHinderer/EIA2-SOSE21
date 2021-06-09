"use strict";
var Main10;
(function (Main10) {
    class Cloud extends Main10.Move {
        constructor(_position, _velocity) {
            super(_position, _velocity);
            this.velocityX = 0.9;
            this.velocityY = 0.1;
        }
        // From Codepen
        draw() {
            Main10.crc2.save();
            Main10.crc2.translate(this.posX, this.posY);
            Main10.crc2.beginPath();
            Main10.crc2.moveTo(170, 80);
            Main10.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            Main10.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            Main10.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            Main10.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            Main10.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            Main10.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            Main10.crc2.closePath();
            Main10.crc2.lineWidth = 0;
            Main10.crc2.fillStyle = "#f2ffff";
            Main10.crc2.fill();
            Main10.crc2.strokeStyle = "#dbffff";
            Main10.crc2.stroke();
            Main10.crc2.restore();
        }
        update() {
            if (this.posX > Main10.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Main10.crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    Main10.Cloud = Cloud;
})(Main10 || (Main10 = {}));
//# sourceMappingURL=cloud10.js.map