"use strict";
var classVector;
(function (classVector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        class Vector {
            constructor(_x, _y) {
                this.set(_x, _y);
            }
            set(_x, _y) {
                this.x = _x;
                this.y = _y;
            }
            scale(_factor) {
                this.x *= _factor;
                this.y *= _factor;
            }
            add(_addend) {
                this.x += _addend.x;
                this.y += _addend.y;
            }
        }
        let v1 = new Vector(2, 6);
        v1.set(2, 5);
        v1.scale(2);
        console.log(v1);
    }
})(classVector || (classVector = {}));
//# sourceMappingURL=classVector.js.map