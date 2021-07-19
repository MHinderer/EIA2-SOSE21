"use strict";
/*
Aufgabe: <Abschlussarbeit S21>
Name: <Moritz Hinderer>
Matrikel: <267208>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Julian Himmel, Tristan Trefz, Martin Fuhr, weitere Quellen: Inverted Classroon, Internet>
*/
var Endabgabe;
(function (Endabgabe) {
    class Movable {
        constructor(_position) {
            this.position = _position;
            this.speed = 1;
            this.speedLevel = 1;
            this.slowDown = false;
            this.radius = 2;
        }
        setColor(color) {
            this.color = color;
        }
        getRadius() {
            return this.radius * Endabgabe.scale;
        }
        setRadius(radius) {
            this.radius = radius;
        }
        setTarget(target) {
            this.target = target;
        }
        getTarget() {
            return this.target;
        }
        getPosition() {
            return this.position;
        }
        setPosition(position) {
            this.position = position;
        }
        getSpeed() {
            return this.speed;
        }
        setSpeed(speed) {
            this.speed = speed;
        }
        move(target) {
            if (!target) {
                return;
            }
            const diffVectr = new Endabgabe.Vector(target.X - this.position.X, target.Y - this.position.Y);
            // calc length of diff vector and return if zero
            const vectorLength = Math.sqrt(Math.pow(diffVectr.X, 2) + Math.pow(diffVectr.Y, 2));
            if (vectorLength == 0) {
                return;
            }
            const speedLevel = this.speedLevel * (this.speed / 100);
            // apply slow down if activated (Ball)
            const speed = this.slowDown ? speedLevel * (vectorLength / 100) : speedLevel;
            const scaleFactor = speed / vectorLength;
            // apply scaling to diff
            diffVectr.scale(scaleFactor);
            this.position.add(diffVectr);
        }
    }
    Endabgabe.Movable = Movable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=moveable.js.map