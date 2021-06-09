namespace Main10 {

    export interface Vector {
        x: number;
        y: number;
    }

    export function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 60%, 20%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawSun(_position: Vector): void {
        let colorSun: string = "yellow";
        //die letzten zwei nullen sind eigentlich window.innerWidth und height. doch wenn ich diese Werte einsetzte, 
        //dann verschwindet alles auser die Sonne...
        crc2.clearRect(0, 0, 0, 0);

        crc2.save();
        crc2.moveTo(20, 20);
        crc2.translate(20, 20);
        crc2.translate(20, 20);

        crc2.beginPath();
        crc2.arc(0, 0, 100, 0, 2 * Math.PI, false);
        crc2.fillStyle = colorSun;
        crc2.fill();
    }

    export function drawMountains(_position: Vector, _height: number, _width: number, _color: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_width);

        do {
            x += stepMin + Math.random() * (stepMax);
            let y: number = -_height - Math.random() * (_width - _height);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        crc2.fillStyle = _color;
        crc2.fill();

        crc2.restore();
    }

    export function BeesHome(): void {
        crc2.save();
        crc2.translate(crc2.canvas.width / 2, crc2.canvas.height * 0.35);

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
}