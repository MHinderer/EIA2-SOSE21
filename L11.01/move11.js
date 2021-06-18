"use strict";
var Main11;
(function (Main11) {
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
    Main11.Move = Move;
})(Main11 || (Main11 = {}));
//# sourceMappingURL=move11.js.map