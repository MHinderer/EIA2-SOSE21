"use strict";
var Main09;
(function (Main09) {
    function drawBackground() {
        let gradient = Main09.crc2.createLinearGradient(0, 0, 0, Main09.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Main09.golden, "white");
        gradient.addColorStop(1, "HSL(100, 60%, 20%)");
        Main09.crc2.fillStyle = gradient;
        Main09.crc2.fillRect(0, 0, Main09.crc2.canvas.width, Main09.crc2.canvas.height);
    }
    Main09.drawBackground = drawBackground;
    function drawSun(_position) {
        let colorSun = "yellow";
        //die letzten zwei nullen sind eigentlich window.innerWidth und height. doch wenn ich diese Werte einsetzte, 
        //dann verschwindet alles auser die Sonne...
        Main09.crc2.clearRect(0, 0, 0, 0);
        Main09.crc2.save();
        Main09.crc2.moveTo(20, 20);
        Main09.crc2.translate(20, 20);
        Main09.crc2.translate(20, 20);
        Main09.crc2.beginPath();
        Main09.crc2.arc(0, 0, 100, 0, 2 * Math.PI, false);
        Main09.crc2.fillStyle = colorSun;
        Main09.crc2.fill();
    }
    Main09.drawSun = drawSun;
    function drawMountains(_position, _height, _width, _color) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Main09.crc2.save();
        Main09.crc2.translate(_position.x, _position.y);
        Main09.crc2.beginPath();
        Main09.crc2.moveTo(0, 0);
        Main09.crc2.lineTo(0, -_width);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_height - Math.random() * (_width - _height);
            Main09.crc2.lineTo(x, y);
        } while (x < Main09.crc2.canvas.width);
        Main09.crc2.lineTo(x, 0);
        Main09.crc2.closePath();
        Main09.crc2.fillStyle = _color;
        Main09.crc2.fill();
        Main09.crc2.restore();
    }
    Main09.drawMountains = drawMountains;
})(Main09 || (Main09 = {}));
//# sourceMappingURL=background09.js.map