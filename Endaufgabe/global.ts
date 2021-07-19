/*
Aufgabe: <Abschlussarbeit S21>
Name: <Moritz Hinderer>
Matrikel: <267208>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Julian Himmel, Tristan Trefz, Martin Fuhr, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {

    export let scale: number = 5;

    export function randomInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export function degreesToRadians(degrees: number): number {
        return (degrees * Math.PI) / 180;
    }

    // create unique id
    // source: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    export function uuidv4(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r: number = Math.random() * 16 | 0, v: number = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    export function distance(v1: Vector, v2: Vector): number {
        let d: number = Math.sqrt(Math.pow(v2.X - v1.X, 2) +
            Math.pow(v2.Y - v1.Y, 2));
        return d;
    }
}