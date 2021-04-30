namespace L03_Memory {
    window.addEventListener("load", gameStart);

    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("#form");
    let gameField: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    gameField.classList.add("gameField");
    gameField.setAttribute("style", "display:none");

    //formData Objekte
    let formData: FormData;
    let pairs: FormDataEntryValue | null;
    let size: number;
    let backgroundColor: FormDataEntryValue | null;  //kann auch null sein, wenn nichts eingegeben wird
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;

    let numOfPairs: number;

    function gameStart(): void {
        let start: HTMLElement = <HTMLElement>document.querySelector("#start");
        start.addEventListener("click", handleLoad);
        }

    function handleLoad(): void {
            form.classList.add(".hidden");
            gameField.setAttribute("style", "display:unset");

            formData = new FormData(document.forms[0]);
            size = Number(formData.get("CardSize"));
            backgroundColor = formData.get("backgroundColor");
            fontColor = formData.get("fontColor");
            fontStyle = formData.get("fontStyle");

            pairs = formData.get("Pairs");
            if (pairs) {   //muss einen Wert haben
                numOfPairs = Number(pairs);
                createCard();
        }
    }

    //leere Arrays
    //let comparison: string[] = [];
    let counter: number[] = [];
    let openCards: string[] = [];
    let hiddenCards: HTMLDivElement[] = [];
    let cardIndex: number[] = [];

    //Karten Interface
    interface Wearth {
        colour: string;
        text: string;
        key: string;
    }

    //Karten Array mit den Werten
    var cards: Wearth[] = [
        {
            colour: "#F78181",
            text: "A",
            key: "karte1"
        },
        {
            colour: "#F78181",
            text: "A",
            key: "karte2"
        },
        {
            colour: "#F5DA81",
            text: "B",
            key: "karte3"
        },
        {
            colour: "#F5DA81",
            text: "B",
            key: "karte4"
        },
        {
            colour: "#81F781",
            text: "C",
            key: "karte5"
        },
        {
            colour: "#81F781",
            text: "C",
            key: "karte6"
        },
        {
            colour: "#819FF7",
            text: "D",
            key: "karte7"
        },
        {
            colour: "#819FF7",
            text: "D",
            key: "karte8"
        },
        {
            colour: "#F78181",
            text: "E",
            key: "karte9"
        },
        {
            colour: "#F78181",
            text: "E",
            key: "karte10"
        },
        {
            colour: "#F5DA81",
            text: "F",
            key: "karte11"
        },
        {
            colour: "#F5DA81",
            text: "F",
            key: "karte12"
        },
        {
            colour: "#81F781",
            text: "G",
            key: "karte13"
        },
        {
            colour: "#81F781",
            text: "G",
            key: "karte14"
        },
        {
            colour: "#819FF7",
            text: "H",
            key: "karte15"
        },
        {
            colour: "#819FF7",
            text: "H",
            key: "karte16"
        },
        {
            colour: "#F78181",
            text: "I",
            key: "karte17"
        },
        {
            colour: "#F78181",
            text: "I",
            key: "karte18"
        },
        {
            colour: "#F5DA81",
            text: "J",
            key: "karte19"
        },
        {
            colour: "#F5DA81",
            text: "J",
            key: "karte20"
        },
        {
            colour: "#81F781",
            text: "K",
            key: "karte21"
        },
        {
            colour: "#81F781",
            text: "K",
            key: "karte22"
        },
        {
            colour: "#819FF7",
            text: "L",
            key: "karte23"
        },
        {
            colour: "#819FF7",
            text: "L",
            key: "karte24"
        },
        {
            colour: "#F78181",
            text: "M",
            key: "karte25"
        },
        {
            colour: "#F78181",
            text: "M",
            key: "karte26"
        },
        {
            colour: "#F5DA81",
            text: "N",
            key: "karte27"
        },
        {
            colour: "#F5DA81",
            text: "N",
            key: "karte28"
        },
        {
            colour: "#81F781",
            text: "O",
            key: "karte29"
        },
        {
            colour: "#81F781",
            text: "O",
            key: "karte30"
        },
        {
            colour: "#819FF7",
            text: "P",
            key: "karte31"
        },
        {
            colour: "#819FF7",
            text: "P",
            key: "karte32"
        },
        {
            colour: "#F78181",
            text: "Q",
            key: "karte33"
        },
        {
            colour: "#F78181",
            text: "Q",
            key: "karte34"
        },
        {
            colour: "#F5DA81",
            text: "R",
            key: "karte35"
        },
        {
            colour: "#F5DA81",
            text: "R",
            key: "karte36"
        },
        {
            colour: "#81F781",
            text: "S",
            key: "karte37"
        },
        {
            colour: "#81F781",
            text: "S",
            key: "karte38"
        },
        {
            colour: "#819FF7",
            text: "T",
            key: "karte39"
        },
        {
            colour: "#819FF7",
            text: "T",
            key: "karte40"
        },
        {
            colour: "#F78181",
            text: "U",
            key: "karte41"
        },
        {
            colour: "#F78181",
            text: "U",
            key: "karte42"
        },
        {
            colour: "#F5DA81",
            text: "V",
            key: "karte43"
        },
        {
            colour: "#F5DA81",
            text: "V",
            key: "karte44"
        },
        {
            colour: "#81F781",
            text: "W",
            key: "karte45"
        },
        {
            colour: "#81F781",
            text: "W",
            key: "karte46"
        },
        {
            colour: "#819FF7",
            text: "X",
            key: "karte47"
        },
        {
            colour: "#819FF7",
            text: "X",
            key: "karte48"
        },
        {
            colour: "#F78181",
            text: "Y",
            key: "karte49"
        },
        {
            colour: "#F78181",
            text: "Y",
            key: "karte50"
        }
    ];

    //Schleife die das Grid mit den Array Objekten befüllt. Erzeugtes DIVElement  bekommt die Objekte aus dem Array,
    //als auch eine Hintergrundfarbe die als Rückseite erscheint.
    function createCard(): void {
        //Die Schleife wiederholt sich so oft, wie die Länge des Arrays ist. Dadurch bekommt jede "Karte"/Objekt einmal die Klasse
        //und einmal den Index. Somit kann auf die CSS Klasse wie auch den Index der jeweiligen Karten zugegriffen werden.
        for (let index: number = 0; index < numOfPairs; index++) {
            let card: HTMLDivElement = document.createElement("div");

            card.classList.add("card");
            card.classList.add("hidden");
            card.style.backgroundColor = "green";

            //Karte bekommt die ausgewählte Größe vom Slider
            card.style.height = size + "px";
            card.style.width = size + "px";

            gameField.appendChild(card);

            card.addEventListener("click", function (): void {
                cardIndex.push(index);
                if (cardIndex.length == 1) {
                    element(index);
                }
                else if (cardIndex.length == 2) {
                    if (cardIndex[0] == cardIndex[1]) {
                        cardIndex.pop();

                    }
                    else {
                        element(index);
                        cardIndex = [];
                    }
                }
            });
        }

        function element(index: number): void {
            if (hiddenCards.length < 2) {
                let card: HTMLDivElement = <HTMLDivElement>document.querySelector(".card" + index);
                card.innerHTML = "<p class='" + cards[index].text + "'></p>";
                if (backgroundColor) {
                    card.style.backgroundColor = backgroundColor.toString();
                }
                if (fontStyle) {
                    card.style.fontFamily = fontStyle.toString();
                }
                if (fontColor) {
                    card.style.color = fontColor.toString();
                }

                openCards.push(cards[index].colour);
                openCards.push(cards[index].key);

                hiddenCards.push(card);

                clickCard();
            }
        }


        function clickCard(): void {
            if (openCards.length == 4) {
                compareCards();
            }
        }

        //Erzeugte DIVs (Karten) werden beim neu laden der Seite/Spiels durcheinander angeordnet. 
        //Dabei bekommen die Index Plätze random die Eigenschaften/Werte zugeschrieben.
        function randomizeArray(): void {
            cards.sort(() => 0.5 - Math.random());
        }

        randomizeArray();

        //Funktion matchingCards vergleicht ob die geklickten Karten ein Paar sind oder nicht.
        function compareCards(): void {
            //setTimeout sagt das die Funktion sobald ein Kartenpaar gefunden wurde,
            //noch 1 Sekunde geöffnet bleibt.
            setTimeout(() => {
                //Wenn der Index 0 und 2 (Farbe) gleich ist und Index 1 und 3 (Schlüssel) des openCards Array
                //ungleich ist, dann dann bekommen die DIVElemente (Karten) im hiddenArray (Index 0&1) die
                //Klasse hidden hinzu. Diese sagt im CSS das die visibillity hidden ist.
                if (openCards[0] == openCards[2] && openCards[1] != openCards[3]) {
                    hiddenCards[0].classList.add("hidden");
                    hiddenCards[1].classList.add("hidden");
                    //Bei jedem erkannten Kartenpaar wird eine Nummer in das computerIndex Array gepusht.
                    //Somit weis der Computer in der computer Funktion, wann das Spiel zu Ende ist.
                    counter.push(1);

                    //Die zwei Arrays für die Karten werden anschließend geleert, damit wieder die Index Plätze für
                    //neu angeklickte Karten frei werden und diese verglichen werden können.
                    openCards = [];
                    hiddenCards = [];

                    endGame();
                }
                else {
                    hiddenCards[0].innerHTML = "";
                    hiddenCards[1].innerHTML = "";
                    hiddenCards[0].style.backgroundColor = "green";
                    hiddenCards[1].style.backgroundColor = "green";
                }
            },         1000);
        }
    }

    function endGame(): void {
        if (counter.length == numOfPairs) {
            alert("You won ! Reload the Browser to start new game.");
        }
    }
}