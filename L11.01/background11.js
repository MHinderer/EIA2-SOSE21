"use strict";
var Main11;
(function (Main11) {
    function drawBackground() {
        let gradient = Main11.crc2.createLinearGradient(0, 0, 0, Main11.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Main11.golden, "white");
        gradient.addColorStop(1, "HSL(100, 60%, 20%)");
        Main11.crc2.fillStyle = gradient;
        Main11.crc2.fillRect(0, 0, Main11.crc2.canvas.width, Main11.crc2.canvas.height);
    }
    Main11.drawBackground = drawBackground;
    function drawSun(_position) {
        let colorSun = "yellow";
        //die letzten zwei nullen sind eigentlich window.innerWidth und height. doch wenn ich diese Werte einsetzte, 
        //dann verschwindet alles auser die Sonne...
        Main11.crc2.clearRect(0, 0, 0, 0);
        Main11.crc2.save();
        Main11.crc2.moveTo(20, 20);
        Main11.crc2.translate(20, 20);
        Main11.crc2.translate(20, 20);
        Main11.crc2.beginPath();
        Main11.crc2.arc(0, 0, 100, 0, 2 * Math.PI, false);
        Main11.crc2.fillStyle = colorSun;
        Main11.crc2.fill();
    }
    Main11.drawSun = drawSun;
    function drawMountains(_position, _height, _width, _color) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Main11.crc2.save();
        Main11.crc2.translate(_position.x, _position.y);
        Main11.crc2.beginPath();
        Main11.crc2.moveTo(0, 0);
        Main11.crc2.lineTo(0, -_width);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_height - Math.random() * (_width - _height);
            Main11.crc2.lineTo(x, y);
        } while (x < Main11.crc2.canvas.width);
        Main11.crc2.lineTo(x, 0);
        Main11.crc2.closePath();
        Main11.crc2.fillStyle = _color;
        Main11.crc2.fill();
        Main11.crc2.restore();
    }
    Main11.drawMountains = drawMountains;
    function BeesHome() {
        Main11.crc2.save();
        Main11.crc2.translate(Main11.crc2.canvas.width / 2, Main11.crc2.canvas.height * 0.35);
        Main11.crc2.scale(11, 11);
        Main11.crc2.lineWidth = 0.5;
        Main11.crc2.strokeStyle = "beige";
        Main11.crc2.beginPath();
        Main11.crc2.moveTo(0, 0);
        Main11.crc2.lineTo(6, 6);
        Main11.crc2.lineTo(4, 12);
        Main11.crc2.lineTo(-4, 12);
        Main11.crc2.lineTo(-6, 6);
        Main11.crc2.lineTo(0, 0);
        Main11.crc2.fillStyle = "brown";
        Main11.crc2.fill();
        Main11.crc2.closePath();
        Main11.crc2.stroke();
        Main11.crc2.beginPath();
        Main11.crc2.arc(0, 8, 1.5, 0, 2 * Math.PI);
        Main11.crc2.fillStyle = "beige";
        Main11.crc2.fill();
        Main11.crc2.closePath();
        Main11.crc2.restore();
    }
    Main11.BeesHome = BeesHome;
})(Main11 || (Main11 = {}));
//# sourceMappingURL=background11.js.map