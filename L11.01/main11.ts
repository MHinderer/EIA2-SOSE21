namespace Main11 {
    
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.4;
    export let rotate: number = 0;
    let move: Move[] = [];
    let flowers: Flowers[] = [];
    let imageData: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(20);
        createBackground();
        createFlowers();
        createCloud();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }   

    function createBackground(): void {
        drawBackground();
        drawSun({x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.15});
        drawMountains({x: 0, y: crc2.canvas.height * golden}, 200, 300, "grey");
        drawMountains({x: 0, y: crc2.canvas.height * golden}, 125, 200, "lightgrey");
        BeesHome();
    }

    function createFlowers(): void {
        let xPos: number = 0;
        let flowerType: number = Math.floor(Math.random() * 2) + 1;
        do {
            if (flowerType == 1) {
                flowers.push(new Flower1(xPos, 5 + (crc2.canvas.height * golden), crc2.canvas.height * 0.8));
            }
            else {
                flowers.push(new Flower2(xPos, 5 + (crc2.canvas.height * golden), crc2.canvas.height * 0.8));
            }
            xPos += 10 + Math.random() * (50 - 10);
        }
        while (xPos < crc2.canvas.width);
    }

    function createBees (_nbrBee: number): void {
        for (let index: number = 0; index < _nbrBee; index++) {
            let randomScale: number = 0.5 + Math.random() * (4.5 - 1.8);
            let randomVelocityX: number = (Math.random() - 0.8) * 8;
            let randomVelocityY: number = (Math.random() - 0.8) * 5;

            move.push(<Move> new Bees({ x: crc2.canvas.width / 2, y: crc2.canvas.height * golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }

        
        
    }

    function createCloud (): void {
        move.push(<Move> new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * .01 }, {x: 0.5, y: 0.8}));
        move.push(<Move> new Cloud({ x: crc2.canvas.width * .1, y: crc2.canvas.height * .08 }, {x: 0.5, y: 0.8}));
    }

    function animation(): void {
        requestAnimationFrame(animation);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < flowers.length; index ++) {
            flowers[index].updateNectar();
        }
        for (let index: number = 0; index < move.length; index ++) {
            move[index].update();
            move[index].draw(); 
        }
    }
}