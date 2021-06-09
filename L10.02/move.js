"use strict";
var Main10;
(function (Main10) {
    class Move {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            console.log("draw");
        }
        update() {
            console.log("update");
        }
    }
    Main10.Move = Move;
})(Main10 || (Main10 = {}));
//# sourceMappingURL=move.js.map