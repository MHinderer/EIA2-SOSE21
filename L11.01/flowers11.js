"use strict";
var Main11;
(function (Main11) {
    class Flowers {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
            this.nectarCounter = 0;
            this.randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            this.nectarLength = 5;
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            console.log("deaw");
        }
        updateNectar() {
            console.log("updateNectar");
        }
    }
    Main11.Flowers = Flowers;
})(Main11 || (Main11 = {}));
//# sourceMappingURL=flowers11.js.map