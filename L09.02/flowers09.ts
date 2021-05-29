namespace Main09 {

    export function BeesHome(): void {
        crc2.save();
        crc2.translate(crc2.canvas.width / 2 , crc2.canvas.height * 0.35);

        crc2.scale(11, 11);
        crc2.lineWidth = 0.5;
        crc2.strokeStyle = "beige";

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(6, 6);
        crc2.lineTo(4, 12);
        crc2.lineTo(-4, 12);
        crc2.lineTo(-6, 6);
        crc2.lineTo(0, 0);
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(0, 8, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "beige";
        crc2.fill();
        crc2.closePath();
       
        crc2.restore();
    }

    export class Flowers {
        xPos: number;
        flowerType: number;

        yRandomMin: number;
        yRandomMax: number;

        constructor(_flowerType: number, _xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.xPos = _xPos;
            this.flowerType = _flowerType;

            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        draw(): void {

            let randomScale: number = 0.3 + Math.random() * (1.3 - 0.5);
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(randomScale, randomScale);

            if (this.flowerType == 1) {
                for (let index: number = 0; index < 4; index++) {
                    crc2.beginPath();
                    crc2.fillStyle = "#185A18";
                    crc2.fillRect(0, - 25, 2.4, 25);
                    crc2.ellipse(- 3.5, - 14, 2.4, 8, -35 * Math.PI / 180, 0, 2 * Math.PI);
                    crc2.closePath();
                    crc2.fill();
            
                    crc2.beginPath();
                    crc2.arc(1.2, -33, 12, 0, 2 * Math.PI);
                    crc2.fillStyle = "DarkTurquoise";
                    crc2.fill();
                    crc2.beginPath();
                    crc2.arc(10.2, -42, 12, 0, 2 * Math.PI);
                    crc2.fillStyle = "Turquoise";
                    crc2.fill();
                    crc2.beginPath();
                    crc2.arc(1.2, -51, 12, 0, 2 * Math.PI);
                    crc2.fillStyle = "LightTurquoise";
                    crc2.fill();
                    crc2.beginPath();
                    crc2.arc(-7.8, -42, 12, 0, 2 * Math.PI);
                    crc2.fillStyle = "Aquamarine";
                    crc2.fill();
                    
                    crc2.beginPath();
                    crc2.fillStyle = "black";
                    crc2.arc(1.2, -42, 7, 0, 2 * Math.PI);
                    crc2.fill();
                }
                crc2.restore();
            }

            else {
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
        }
    }
}