"use strict";
var Main09;
(function (Main09) {
    class Cloud {
        constructor(_position) {
            this.velocityX = 0.9;
            this.velocityY = 0.1;
            this.posY = _position.y;
            this.posX = _position.x;
        }
        // From Codepen
        draw() {
            Main09.crc2.save();
            Main09.crc2.translate(this.posX, this.posY);
            Main09.crc2.beginPath();
            Main09.crc2.moveTo(170, 80);
            Main09.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            Main09.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            Main09.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            Main09.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            Main09.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            Main09.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            Main09.crc2.closePath();
            Main09.crc2.lineWidth = 0;
            Main09.crc2.fillStyle = "#f2ffff";
            Main09.crc2.fill();
            Main09.crc2.strokeStyle = "#dbffff";
            Main09.crc2.stroke();
            Main09.crc2.restore();
        }
        update() {
            if (this.posX > Main09.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Main09.crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
    }
    Main09.Cloud = Cloud;
})(Main09 || (Main09 = {}));
//# sourceMappingURL=cloud09.js.map