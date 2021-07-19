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
    class UI {
        getHomeScore() {
            return this.homeScore || 0;
        }
        setHomeScore(homeScore) {
            this.homeScore = homeScore;
            this.updateScore();
        }
        getAwayScore() {
            return this.awayScore || 0;
        }
        setAwayScore(awayScore) {
            this.awayScore = awayScore;
            this.updateScore();
        }
        draw(time) {
            const playerUi = document.getElementById("upper-ui");
            if (!playerUi) {
                return;
            }
            this.createTime(playerUi, time);
        }
        updateScore() {
            const playerUi = document.getElementById("upper-ui");
            if (!playerUi) {
                return;
            }
            let scoreElement = document.getElementById("score");
            if (!scoreElement) {
                const scorePre = document.createElement("span");
                scorePre.setAttribute("id", "score-pre");
                const scorePost = document.createElement("span");
                scorePost.setAttribute("id", "score-post");
                scoreElement = document.createElement("span");
                scoreElement.setAttribute("id", "score");
                playerUi.appendChild(scorePre);
                playerUi.appendChild(scoreElement);
                playerUi.appendChild(scorePost);
            }
            scoreElement.innerHTML = `${this.getHomeScore()} : ${this.getAwayScore()}`;
        }
        createTime(playerUi, time) {
            let timeElement = document.getElementById("time");
            if (!timeElement) {
                timeElement = document.createElement("span");
                timeElement.setAttribute("id", "time");
                playerUi.appendChild(timeElement);
            }
            if (!time) {
                return;
            }
            // calculates readable time
            const minutes = Math.floor(time / (1000 * 60));
            const minuteRest = time % (1000 * 60);
            const seconds = Math.floor(minuteRest / 1000);
            timeElement.innerHTML = `Zeit: ${minutes.toString().length < 2 ? `0${minutes}` : minutes}:${seconds.toString().length < 2 ? `0${seconds}` : seconds}`;
        }
    }
    Endabgabe.UI = UI;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ui.js.map