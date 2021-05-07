window.onload = function (): void {

    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    let context: CanvasRenderingContext2D = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function randomize(): void {

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        for (let i: number = 0; i < 1000; i++) {

            let v: number = Math.floor(Math.random() * canvas.width);
            let w: number = Math.floor(Math.random() * canvas.height);
            let x: number = Math.floor(Math.random() * canvas.width);
            let y: number = Math.floor(Math.random() * canvas.height);
            let z: number = Math.floor(Math.random() * canvas.width);
            let a: number = Math.floor(Math.random() * canvas.height);
            let r: number = Math.floor(Math.random() * 250);
            let g: number = Math.floor(Math.random() * 250);
            let b: number = Math.floor(Math.random() * 250);
            context.beginPath();
            context.strokeStyle = "rgba(" + r + "," + g + "," + b + ",1)";
            context.lineWidth = 10;
            context.moveTo(x, z);
            context.lineTo(a, w);
            context.lineTo(v, y);
            context.closePath();
            context.stroke();

            for (let i: number = 600; i < 700; i++) {

                let x: number = Math.floor(Math.random() * canvas.width);
                let y: number = Math.floor(Math.random() * canvas.height);
                let radius: number = Math.floor(Math.random() * 90);
                let r: number = Math.floor(Math.random() * 250);
                let g: number = Math.floor(Math.random() * 250);
                let b: number = Math.floor(Math.random() * 250);

                context.beginPath();
                context.arc(x, y, radius, Math.PI * 2, 0, false);
                context.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
                context.fill();
                context.closePath();


            }
        }
    }
    randomize();

};