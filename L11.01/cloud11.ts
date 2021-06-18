namespace Main11 {

    export class Cloud extends Move {
        posX: number;
        posY: number;
        velocityX: number = 0.9;
        velocityY: number = 0.1;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }
        // From Codepen
        public draw(): void {

            crc2.save();
            crc2.translate(this.posX, this.posY);
            crc2.beginPath();
            crc2.moveTo(170, 80);
            crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            crc2.closePath();
            crc2.lineWidth = 0;
            crc2.fillStyle = "#f2ffff";
            crc2.fill();
            crc2.strokeStyle = "#dbffff";
            crc2.stroke();

            crc2.restore();
        }

        public update(): void {

            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
}