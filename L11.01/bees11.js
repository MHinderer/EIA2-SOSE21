"use strict";
var Main11;
(function (Main11) {
    class Bees extends Main11.Move {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            Main11.crc2.save();
            Main11.crc2.translate(this.posX, this.posY);
            Main11.crc2.scale(this.randomScale, this.randomScale);
            Main11.crc2.lineWidth = 2;
            Main11.crc2.strokeStyle = "brown";
            Main11.crc2.fillStyle = "gold";
            Main11.crc2.beginPath();
            Main11.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Main11.crc2.fill();
            Main11.crc2.beginPath();
            Main11.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Main11.crc2.stroke();
            Main11.crc2.beginPath();
            Main11.crc2.strokeStyle = "black";
            Main11.crc2.moveTo(0, -8);
            Main11.crc2.lineTo(-4, -12);
            Main11.crc2.stroke();
            Main11.crc2.beginPath();
            Main11.crc2.strokeStyle = "black";
            Main11.crc2.moveTo(0, -8);
            Main11.crc2.lineTo(4, -12);
            Main11.crc2.stroke();
            Main11.crc2.beginPath();
            Main11.crc2.fillStyle = "white";
            Main11.crc2.arc(-12, 0, 3, 0, Math.PI * 2, false);
            Main11.crc2.fill();
            Main11.crc2.stroke();
            Main11.crc2.beginPath();
            Main11.crc2.fillStyle = "white";
            Main11.crc2.arc(12, 0, 3, 0, Math.PI * 2, false);
            Main11.crc2.fill();
            Main11.crc2.stroke();
            Main11.crc2.beginPath();
            Main11.crc2.arc(-2, -1, 1, 0, Math.PI * 2, false);
            Main11.crc2.stroke();
            Main11.crc2.beginPath();
            Main11.crc2.arc(2, -1, 1, 0, Math.PI * 2, false);
            Main11.crc2.stroke();
            Main11.crc2.restore();
        }
        update() {
            if (this.posX > Main11.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Main11.crc2.canvas.height || this.posY < Main11.crc2.canvas.height * 0.40) {
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
    Main11.Bees = Bees;
})(Main11 || (Main11 = {}));
//# sourceMappingURL=bees11.js.map