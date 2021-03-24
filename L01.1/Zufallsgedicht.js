"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjekt = [
        {
            word1: "Moritz",
            word2: "Julian",
            word3: "Mona",
            word4: "Leon",
            word5: "Martin"
        }
    ];
    let preadikat = [
        {
            word1: "coden",
            word2: "studieren",
            word3: "treffen",
            word4: "pöbeln",
            word5: "trinken"
        }
    ];
    let objekt = [
        {
            word1: "Müll",
            word2: "Bier",
            word3: "auf Probleme",
            word4: "eine Katastrophe",
            word5: "in der Öffentlichkeit"
        }
    ];
    for (let index = 5; index >= subjekt.length; index--) {
        console.log(index);
        getVerse([], [], []);
        console.log(getVerse([], [], []));
    }
    function getVerse(_subjekt, _preadikat, _objekt) {
        return "Aloa";
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=Zufallsgedicht.js.map