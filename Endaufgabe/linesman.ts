/*
Aufgabe: <Abschlussarbeit S21>
Name: <Moritz Hinderer>
Matrikel: <267208>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Julian Himmel, Tristan Trefz, Martin Fuhr, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {
    export class Linesman extends Movable {
        private targetFn: () => Vector;

        constructor(_position: Vector) {
            super(
                new Vector(_position.X, _position.Y)
            );
            this.target = new Vector(_position.X, _position.Y);
            this.radius = 1.5;


        }
        public setTargetFn(cb: () => Vector): void {
            this.targetFn = cb;
        }

        public getTargetFn(): Vector {
            return this.targetFn();
        }

        public draw(): void {
            ctx.save();

            // draw player center
            ctx.beginPath();
            ctx.arc(this.position.X, this.position.Y, this.getRadius(), 0, 2 * Math.PI, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#003300";
            ctx.stroke();

            ctx.restore();
        }
    }
}
