namespace Zufallsgedicht {
    interface Gedicht {
        word1: string;
        word2: string;
        word3: string;
        word4: string;
        word5: string;
    }

    let subjekt: Gedicht[] = [
        {
            word1: "Moritz",
            word2: "Julian",
            word3: "Mona",
            word4: "Leon",
            word5: "Martin"
        }
    ];

    let preadikat: Gedicht[] = [
        {
            word1: "coden",
            word2: "studieren",
            word3: "treffen",
            word4: "pöbeln",
            word5: "trinken"
        }
    ];

    let objekt: Gedicht[] = [
        {
            word1: "Müll",
            word2: "Bier",
            word3: "auf Probleme",
            word4: "eine Katastrophe",
            word5: "in der Öffentlichkeit"
        }
    ];

    for (let index: number = 5; index >= subjekt.length; index--) {
        console.log(index);
        getVerse([], [], []);
        console.log(getVerse([], [], []));
    }

    function getVerse(_subjekt: Gedicht[], _preadikat: Gedicht[], _objekt: Gedicht[]): string {
        return "Aloa";
    }

}