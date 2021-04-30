namespace L03_Memory {
    window.addEventListener("load", handleLoad);



    function handleLoad(_event: Event): void {
        let start: HTMLElement = <HTMLElement>document.querySelector("#start");
        start.addEventListener("click", gameStart);
    }

    //Arrays
    let cards: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let fieldCards: HTMLElement[] = [];
    let openCards: HTMLElement[] = [];


    let formData: FormData;
    let pairs: number;
    let size: number;
    let backgroundColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let font: FormDataEntryValue | null;


    function gameStart(): void {

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("#form");

        form.setAttribute("style", "display:none");

        let gamefield: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        gamefield.classList.add("gamefield");

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector(".body");
        body.appendChild(gamefield);

        formData = new FormData(document.forms[0]);
        console.log(formData);

        size = Number(formData.get("CardSize"));
        backgroundColor = formData.get("backgroundColor");
        fontColor = formData.get("fontColor");
        font = formData.get("Font");

        let numOfPairs: FormDataEntryValue | null = formData.get("Pairs");
        if (numOfPairs) {
            pairs = Number(numOfPairs);
        }

        for (let i: number = 0; i < pairs; i++) {
            createCard(cards[i]);
            createCard(cards[i]);
        }

        //Karten mischen
        for (let i: number = fieldCards.length - 1; i > 0; i--) {
            let randomNumber: number = Math.floor(Math.random() * (i + 1));  
            let temporary = fieldCards[i];   
            fieldCards[i] = fieldCards[randomNumber];
            fieldCards[randomNumber] = temporary;

        }

        for (let i: number = 0; i < fieldCards.length; i++) {
            gamefield.appendChild(fieldCards[i]);
        }

    }

    function createCard(_cards: string): void {

        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("card");
        card.classList.add("hidden");

        card.addEventListener("click", clickCard);

        if (backgroundColor) {
            card.style.backgroundColor = backgroundColor.toString();
        }
        card.style.height = size + "px";
        card.style.width = size + "px";

        card.innerHTML = "<p>" + _cards + "<p>";
        if (font) {
            card.style.fontFamily = font.toString();
        }
        if (fontColor) {
            card.style.color = fontColor.toString();
        }

        fieldCards.push(card);
    }


    function clickCard(_event: Event): void {

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(_event.target);
        if (target.classList.contains("card")) {
            if (target.classList.contains("hidden") && !(openCards.length > 2) && target != openCards[0]) {
                target.classList.remove("hidden");
                target.classList.add("open");
            }
            
            openCards.push(target);
        }
        console.log(openCards.length);
        
        if (openCards.length == 2) {
            setTimeout (checkForMatch, 2000); 
        }
        
    }

    function checkForMatch(): void {

        if (openCards[0].innerHTML === openCards[1].innerHTML) {
            
            openCards[0].style.visibility = "hidden";
            openCards[1].style.visibility = "hidden";

            fieldCards.splice(0, 2);
        }
        else {
            
            
            openCards[0].classList.contains("open");
            openCards[0].classList.add("hidden");

            openCards[1].classList.contains("open");
            openCards[1].classList.add("hidden");
        }

        openCards = [];

        if (fieldCards.length == 0) {

            alert("You won the Game! Press F5 to Restart the Game.");
        }

    }
}