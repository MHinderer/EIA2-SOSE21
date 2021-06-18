namespace Main11 {
     export class Flower2 extends Flowers {
        constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
            super(_xPos, _yRandomMin, _yRandomMax);
        }

        public draw(): void {
            let randomScale: number = 0.3 + Math.random() * (1.3 - 0.5);
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(randomScale, randomScale);

            crc2.beginPath();
            crc2.fillStyle = "#185A18";
            crc2.fillRect(0, -25, 2.4, 25);
            crc2.ellipse(-3.5, -14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.ellipse(5, -17, 2, 7.5, 35 * Math.PI / 180, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#C61884";
            for (let i: number = 0; i < 5; i++) {
                crc2.ellipse(1.2, -42, 5, 18, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#DF5AC3";
            for (let i: number = 0; i < 5; i++) {
                crc2.ellipse(1.2, -42, 3, 14, (i * 35) * Math.PI / 180, 0, 2 * Math.PI);
            }
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = "#DFC6C3";
            crc2.arc(1.2, -42, 3.8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        public updateNectar(): void {

            this.nectarCounter++;
            if (this.nectarLength < 25) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            } else {
                console.log("nektar full");
            }
            crc2.save();
            crc2.translate(this.xPos, this.yPos);
            crc2.scale(this.randomScale, this.randomScale);
            crc2.beginPath();
            crc2.arc(0, -7, this.nectarLength, 0, 2 * Math.PI);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.stroke();
            crc2.restore();

        }
        
    }
}