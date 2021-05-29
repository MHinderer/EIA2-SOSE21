"use strict";
var Main09;
(function (Main09) {
    class Bees {
        constructor(_position, _velocity, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.posX = _position.x;
            this.posY = _position.y;
            this.randomScale = _randomScale;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            Main09.crc2.save();
            Main09.crc2.translate(this.posX, this.posY);
            Main09.crc2.scale(this.randomScale, this.randomScale);
            Main09.crc2.lineWidth = 2;
            Main09.crc2.strokeStyle = "brown";
            Main09.crc2.fillStyle = "gold";
            Main09.crc2.beginPath();
            Main09.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Main09.crc2.fill();
            Main09.crc2.beginPath();
            Main09.crc2.arc(0, 0, 8, 0, Math.PI * 2, false);
            Main09.crc2.stroke();
            Main09.crc2.beginPath();
            Main09.crc2.strokeStyle = "black";
            Main09.crc2.moveTo(0, -8);
            Main09.crc2.lineTo(-4, -12);
            Main09.crc2.stroke();
            Main09.crc2.beginPath();
            Main09.crc2.strokeStyle = "black";
            Main09.crc2.moveTo(0, -8);
            Main09.crc2.lineTo(4, -12);
            Main09.crc2.stroke();
            Main09.crc2.beginPath();
            Main09.crc2.fillStyle = "white";
            Main09.crc2.arc(-12, 0, 3, 0, Math.PI * 2, false);
            Main09.crc2.fill();
            Main09.crc2.stroke();
            Main09.crc2.beginPath();
            Main09.crc2.fillStyle = "white";
            Main09.crc2.arc(12, 0, 3, 0, Math.PI * 2, false);
            Main09.crc2.fill();
            Main09.crc2.stroke();
            Main09.crc2.beginPath();
            Main09.crc2.arc(-2, -1, 1, 0, Math.PI * 2, false);
            Main09.crc2.stroke();
            Main09.crc2.beginPath();
            Main09.crc2.arc(2, -1, 1, 0, Math.PI * 2, false);
            Main09.crc2.stroke();
            Main09.crc2.restore();
        }
        update() {
            if (this.posX > Main09.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Main09.crc2.canvas.height || this.posY < Main09.crc2.canvas.height * 0.40) {
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
            this.draw();
        }
    }
    Main09.Bees = Bees;
})(Main09 || (Main09 = {}));
//# sourceMappingURL=bees09.js.map