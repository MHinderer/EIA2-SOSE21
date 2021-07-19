"use strict";
/*
Aufgabe: <Abschlussarbeit S21>
Name: <Moritz Hinderer>
Matrikel: <267208>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Julian Himmel, Tristan Trefz, Martin Fuhr, weitere Quellen: Inverted Classroon, Internet>
*/
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleload);
    Endabgabe.canvas = document.querySelector("canvas");
    // default variables
    let ui;
    // whether the animation is executed or not
    let animationIsRunning = false;
    // current time left
    let time = 0;
    let lastTime;
    // list of all moveable objects in scene
    let listOfMoveables = [];
    // instance of field
    let field;
    // instance of ball
    let ball;
    // current mouse position
    let mousePos;
    // current ball leading player
    let currentBallLeaders = [];
    // instance of team-ui
    let teamUi;
    // default configuration how to draw player IPlayerDrawOptions is Interface
    let playerDrawOptions = {
        showActionRadius: false,
        showPlayerOrigin: false
    };
    function getMousePosInCanvas(ev) {
        const rect = Endabgabe.canvas.getBoundingClientRect();
        return new Endabgabe.Vector((ev.clientX - rect.left) / (rect.right - rect.left) * Endabgabe.canvas.width, (ev.clientY - rect.top) / (rect.bottom - rect.top) * Endabgabe.canvas.height);
    }
    function handleload() {
        // field gets properties of class Soccerfield
        field = new Endabgabe.SoccerField();
        // height and size. Canvas gets height and size of soccerfield and 2x padding
        Endabgabe.canvas.width = field.getWidth() + (2 * field.getPadding());
        Endabgabe.canvas.height = field.getHeight() + (2 * field.getPadding());
        //canvas cant be undefind or 0. Canvas needs values of Soccerfield, then return gives back value to Soccerfield in canvas 
        if (!Endabgabe.canvas) {
            return;
        }
        // instantiate team-ui 
        teamUi = new Endabgabe.TeamUI();
        // keyup looks for space
        document.addEventListener("keyup", start);
        function start(e) {
            if (e.code == "Space") {
                startAnimation();
            }
        }
        let visChange = document.getElementById("toggle-player-radius");
        visChange.addEventListener("change", handleVisChange);
        function handleVisChange(event) {
            const el = event.target;
            playerDrawOptions.showActionRadius = el.checked;
        }
        let originChange = document.getElementById("toggle-player-origin");
        originChange.addEventListener("change", handleOriginChange);
        function handleOriginChange(event) {
            const el = event.target;
            playerDrawOptions.showPlayerOrigin = el.checked;
        }
        // catch mousemove events to get current mouse position
        Endabgabe.canvas.addEventListener("mousemove", mouseMove);
        function mouseMove(ev) {
            mousePos = getMousePosInCanvas(ev);
            listOfMoveables
                .filter((p) => p instanceof Endabgabe.Player && p.isActive())
                .forEach((p) => {
                p.dehighlight();
                if (Endabgabe.distance(mousePos, p.getPosition()) - p.getRadius() <= 0) {
                    p.highlight();
                }
            });
        }
        // handle click events on canvas
        Endabgabe.canvas.addEventListener("click", ballLeader);
        function ballLeader() {
            // only handle click if one player has the ball
            if (currentBallLeaders.length == 0) {
                return;
            }
            // calc new random pos inside precision radius of the player
            const randomX = Endabgabe.randomInteger(-calcPrecisionRadius(), calcPrecisionRadius());
            const randomY = Endabgabe.randomInteger(-calcPrecisionRadius(), calcPrecisionRadius());
            // update ball speed relative to players shotpower
            ball.setSpeed(currentBallLeaders[0].getShotPower());
            // updates target where the ball should follow
            ball.setTarget(new Endabgabe.Vector(mousePos.X + randomX, mousePos.Y + randomY));
            startAnimation();
        }
        Endabgabe.ctx = Endabgabe.canvas.getContext("2d");
        // creates instance of general ui
        ui = new Endabgabe.UI();
        ui.setHomeScore(0);
        ui.setAwayScore(0);
        startClock();
        createGame();
        window.requestAnimationFrame(updateAnimation);
        let gameStart = document.getElementById("game-start");
        // handle click on start button to restart animation
        gameStart.addEventListener("click", handleGameStart);
        function handleGameStart() {
            startAnimation();
        }
        // redraw team ui
        teamUi.draw(listOfMoveables.filter((l) => l instanceof Endabgabe.Player));
    }
    function startClock() {
        lastTime = new Date();
        // updates clock every 250 milliseconds
        setInterval(function () {
            if (animationIsRunning) {
                time += new Date().getTime() - (lastTime?.getTime());
            }
            lastTime = new Date();
        }, 250);
    }
    function reset(randomBallPosition = false) {
        listOfMoveables.forEach(resetEach);
        function resetEach(p) {
            if (p instanceof Endabgabe.Player) {
                if (randomBallPosition == false) {
                    // set player position to its origin
                    p.setPosition(new Endabgabe.Vector(p.getOrigin().X, p.getOrigin().Y));
                }
            }
            else if (p instanceof Endabgabe.Ball) {
                // sets ball position
                p.setPosition(new Endabgabe.Vector(randomBallPosition ? Endabgabe.randomInteger(field.getPadding(), field.getPadding() + field.getWidth()) : field.getPadding() + field.getWidth() / 2, randomBallPosition ? Endabgabe.randomInteger(field.getPadding(), field.getPadding() + field.getHeight()) : field.getPadding() + field.getHeight() / 2));
                p.setTarget(new Endabgabe.Vector(p.getPosition().X, p.getPosition().Y));
            }
        }
    }
    function createGame() {
        listOfMoveables = [];
        // ball gets new instance
        ball = new Endabgabe.Ball(new Endabgabe.Vector(field.getPadding() + (field.getWidth() / 2), field.getPadding() + (field.getHeight() / 2)));
        createHomeTeam();
        createAwayTeam();
        createAssistance();
        listOfMoveables.push(ball);
    }
    function stopAnimation() {
        animationIsRunning = false;
    }
    function startAnimation() {
        animationIsRunning = true;
    }
    function createAssistance() {
        // creates arbitator with random position
        const arbit = new Endabgabe.Arbitrator(new Endabgabe.Vector(Endabgabe.randomInteger(field.getPadding(), field.getPadding() + field.getWidth()), Endabgabe.randomInteger(field.getPadding(), field.getPadding() + field.getHeight())));
        arbit.setColor("black");
        arbit.setSpeed(60);
        // creates upper linesman
        const linesmanTop = new Endabgabe.Linesman(new Endabgabe.Vector(Endabgabe.randomInteger(field.getPadding(), field.getPadding() + field.getWidth() / 2), field.getPadding()));
        linesmanTop.setColor("pink");
        linesmanTop.setSpeed(80);
        // set target relative to the most left player
        linesmanTop.setTargetFn(targetFnTop);
        function targetFnTop() {
            const x = listOfMoveables.filter((p) => p instanceof Endabgabe.Player && p.isActive()).map((p) => p.getPosition().X);
            return new Endabgabe.Vector(Math.min(...x), linesmanTop.getPosition().Y);
        }
        // create botom linesman
        const linesmanBottom = new Endabgabe.Linesman(new Endabgabe.Vector(Endabgabe.randomInteger(field.getPadding() + field.getWidth() / 2, field.getPadding() + field.getWidth()), field.getPadding() + field.getHeight()));
        linesmanBottom.setColor("pink");
        linesmanBottom.setSpeed(80);
        // set target relative to the most right player
        linesmanBottom.setTargetFn(targetFnBot);
        function targetFnBot() {
            const x = listOfMoveables.filter((p) => p instanceof Endabgabe.Player && p.isActive()).map((p) => p.getPosition().X);
            return new Endabgabe.Vector(Math.max(...x), linesmanBottom.getPosition().Y);
        }
        listOfMoveables.push(arbit, linesmanBottom, linesmanTop);
    }
    function createHomeTeam() {
        const teamnumber = 1;
        const defaultPlayerRadius = 2 * Endabgabe.scale;
        const teamColor = "green";
        // get segements for setting player positions by algorithm
        const segmentY = (field.getHeight() / 4);
        const segmentX = (field.getWidth() / 3);
        const preColor = document.getElementById("score-pre");
        if (preColor) {
            preColor.style.background = teamColor;
        }
        // create goalkeeper
        const tw = new Endabgabe.Player(`Player TW`, new Endabgabe.Vector(field.getPadding(), field.getPadding() + (field.getHeight() / 2)), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 1);
        // creates defence and midfield
        for (let i = 1; i <= 2; i++) {
            for (let j = 1; j <= 4; j++) {
                const player = new Endabgabe.Player(`Player ${i * j + 1}`, new Endabgabe.Vector(field.getPadding() + ((segmentX * i) - (segmentX / 2)) - defaultPlayerRadius, field.getPadding() + ((segmentY * j) - (segmentY / 2))), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, i * j + 1);
                listOfMoveables.push(player);
            }
        }
        // create offensive players
        const p10 = new Endabgabe.Player(`Player 10`, new Endabgabe.Vector(field.getPadding() + ((segmentX * 3) - (segmentX / 2)), field.getPadding() + ((segmentY * 2) / 2)), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 10);
        const p11 = new Endabgabe.Player(`Player 11`, new Endabgabe.Vector(field.getPadding() + ((segmentX * 3) - (segmentX / 2)), field.getPadding() + ((segmentY * 4) - (segmentY))), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 11);
        // creates exaclty six substitutes
        for (let i = 0; i < 6; i++) {
            const p = new Endabgabe.Player(`Substitute ${i + 1}`, new Endabgabe.Vector(0, 0), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 12 + i);
            p.setActive(false);
            listOfMoveables.push(p);
        }
        listOfMoveables.push(tw, p10, p11);
    }
    function createAwayTeam() {
        const teamnumber = 2;
        const defaultPlayerRadius = 2 * Endabgabe.scale;
        // get segements for setting player positions by algorithm
        const segmentY = (field.getHeight() / 4);
        const segmentX = (field.getWidth() / 3);
        const teamColor = "red";
        const postColor = document.getElementById("score-post");
        if (postColor) {
            postColor.style.background = teamColor;
        }
        const tw = new Endabgabe.Player(`Player TW`, new Endabgabe.Vector(field.getPadding() + field.getWidth(), field.getPadding() + (field.getHeight() / 2)), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 99);
        // creates defensive and midfield players
        for (let i = 1; i <= 2; i++) {
            for (let j = 1; j <= 4; j++) {
                const player = new Endabgabe.Player(`Player ${i * j + 1}`, new Endabgabe.Vector((field.getPadding() + field.getWidth()) - (((segmentX * i) - (segmentX / 2))) + defaultPlayerRadius, (field.getPadding() + field.getHeight()) - (((segmentY * j) - (segmentY / 2)))), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, i * j + 1);
                listOfMoveables.push(player);
            }
        }
        // creates offensive players
        const p13 = new Endabgabe.Player(`Player 13`, new Endabgabe.Vector((field.getPadding() + field.getWidth()) - (((segmentX * 3) - (segmentX / 2))), field.getPadding() + ((segmentY * 2) / 2)), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 13);
        const p12 = new Endabgabe.Player(`Player 12`, new Endabgabe.Vector((field.getPadding() + field.getWidth()) - (((segmentX * 3) - (segmentX / 2))), field.getPadding() + ((segmentY * 4) - (segmentY))), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 12);
        // creates exactly six substitutes
        for (let i = 0; i < 6; i++) {
            const p = new Endabgabe.Player(`Substitute ${i + 1}`, new Endabgabe.Vector(0, 0), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), Endabgabe.randomInteger(30, 90), teamColor, teamnumber, 12 + i);
            p.setActive(false);
            listOfMoveables.push(p);
        }
        listOfMoveables.push(tw, p13, p12);
    }
    function updateAnimation() {
        field.draw();
        // if no one has the ball clear the players ui
        if (currentBallLeaders.length == 0) {
            Endabgabe.PlayerUI.draw(null);
        }
        // iterates over all moveable objects and animates them
        for (let movable of listOfMoveables) {
            if (movable instanceof Endabgabe.Linesman) {
                if (animationIsRunning) {
                    movable.move(movable.getTargetFn());
                }
                movable.draw();
            }
            else if (movable instanceof Endabgabe.Arbitrator) {
                if (animationIsRunning) {
                    if (Endabgabe.randomInteger(0, 100) > 95) {
                        movable.setTarget(new Endabgabe.Vector(Endabgabe.randomInteger(field.getPadding(), field.getPadding() + field.getWidth()), Endabgabe.randomInteger(field.getPadding(), field.getPadding() + field.getHeight())));
                    }
                    movable.move(movable.getTarget());
                }
                movable.draw();
            }
            else if (movable instanceof Endabgabe.Ball) {
                if (ball.getTarget() && animationIsRunning) {
                    const d = Endabgabe.distance(movable.getPosition(), ball.getTarget());
                    if (d > 0) {
                        movable.move(ball.getTarget());
                        if (field.isAwayGoal(movable)) {
                            ui.setHomeScore(ui.getHomeScore() + 1);
                            stopAnimation();
                            reset();
                        }
                        else if (field.isHomeGoal(movable)) {
                            ui.setAwayScore(ui.getAwayScore() + 1);
                            stopAnimation();
                            reset();
                        }
                        else if (field.isOutOfBounds(movable)) {
                            stopAnimation();
                            reset(true);
                        }
                    }
                }
                movable.draw();
            }
            else if (movable instanceof Endabgabe.Player) {
                // calc distance between player and ball (subtract radius of both for real collision detection)
                const d = Endabgabe.distance(movable.getPosition(), ball.getPosition()) - movable.getRadius() - ball.getRadius();
                const p = movable;
                // check if current player is on of the surrounding players 
                const isBallLeader = currentBallLeaders.findIndex((l) => l.getId() == p.getId());
                // if player is one of the surrounding players remove it from the list so the player can again get the ball
                if (isBallLeader >= 0 && d > 0) {
                    currentBallLeaders.splice(isBallLeader);
                    // if distance to ball is lesser than 0 and player is not one of the surrounding players, 
                    // now the player will become part of the surrounding players
                }
                if (d <= 0 && isBallLeader == -1) {
                    // check if the current player isn't the ball leading player
                    if (!(currentBallLeaders.length > 0 && movable.getId() === currentBallLeaders[0].getId())) {
                        // set player as surrounding player
                        currentBallLeaders.push(movable);
                        Endabgabe.PlayerUI.draw(movable);
                    }
                    stopAnimation();
                    // if distance is smaller than action radius, move player to ball
                }
                else if (d <= movable.getActionRadius() && animationIsRunning) {
                    // move player to current ball position
                    movable.move(ball.getPosition());
                }
                else if (animationIsRunning) {
                    // move player to its original position
                    movable.move(movable.getOrigin());
                }
                // draw only if player is on field (isActive()==true) otherwise ignore (isActive()==fale)
                if (movable.isActive()) {
                    movable.draw(playerDrawOptions);
                }
            }
            // draw circle to show precision radius of ball leading player
            if (mousePos && currentBallLeaders?.length > 0) {
                mousePos.draw("red", calcPrecisionRadius());
            }
            // draws little blue dot to mark balls target
            if (ball.getTarget()) {
                ball.getTarget().draw("blue");
            }
        }
        ui.draw(time);
        window.requestAnimationFrame(updateAnimation);
    }
    function calcPrecisionRadius() {
        // calculates precision by deviding distance of ball to mouse
        const additionalPrecision = (Endabgabe.distance(mousePos, ball.getPosition()) / 100);
        // combine precision factors
        return ((10.5 - (currentBallLeaders[0].getPrecision() / 10)) + additionalPrecision) * Endabgabe.scale;
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map