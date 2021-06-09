"use strict";
var Main10;
(function (Main10) {
    class Bees extends Main10.Move {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            Main10.crc2.save();
            Main10.crc2.translate(this.posX, this.posY);
            Main10.crc2.scale(this.randomScale, this.randomScale);
            Main10.crc2.lineWidth = 2;
            Main10.crc2.strokeStyle = "brown";
            Main10.crc2.fillStyle = "gold";
            Main10.crc2.beginPath();
            Main10.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Main10.crc2.fill();
            Main10.crc2.beginPath();
            Main10.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Main10.crc2.stroke();
            Main10.crc2.beginPath();
            Main10.crc2.strokeStyle = "black";
            Main10.crc2.moveTo(0, -8);
            Main10.crc2.lineTo(-4, -12);
            Main10.crc2.stroke();
            Main10.crc2.beginPath();
            Main10.crc2.strokeStyle = "black";
            Main10.crc2.moveTo(0, -8);
            Main10.crc2.lineTo(4, -12);
            Main10.crc2.stroke();
            Main10.crc2.beginPath();
            Main10.crc2.fillStyle = "white";
            Main10.crc2.arc(-12, 0, 3, 0, Math.PI * 2, false);
            Main10.crc2.fill();
            Main10.crc2.stroke();
            Main10.crc2.beginPath();
            Main10.crc2.fillStyle = "white";
            Main10.crc2.arc(12, 0, 3, 0, Math.PI * 2, false);
            Main10.crc2.fill();
            Main10.crc2.stroke();
            Main10.crc2.beginPath();
            Main10.crc2.arc(-2, -1, 1, 0, Math.PI * 2, false);
            Main10.crc2.stroke();
            Main10.crc2.beginPath();
            Main10.crc2.arc(2, -1, 1, 0, Math.PI * 2, false);
            Main10.crc2.stroke();
            Main10.crc2.restore();
        }
        update() {
            if (this.posX > Main10.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Main10.crc2.canvas.height || this.posY < Main10.crc2.canvas.height * 0.40) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
        }
    }
    Main10.Bees = Bees;
})(Main10 || (Main10 = {}));
//# sourceMappingURL=bees10.js.map