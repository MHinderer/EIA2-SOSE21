namespace Main11 {

    export class Flowers {
        protected xPos: number;
        protected yRandomMin: number;
        protected yRandomMax: number;
        protected nectarValue: number = Math.floor(Math.random() * 2000) + 1000;
        protected nectarCounter: number = 0;
        protected yPos: number;
        protected randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
        protected nectarLength: number = 5;

        constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        public draw(): void {
            console.log("deaw"); 
        }

        public updateNectar(): void {
            console.log("updateNectar"); 
        }

    }
    
}