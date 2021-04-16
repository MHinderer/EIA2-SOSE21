namespace L02_EventInspector {
    console.log("start");

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let body: HTMLElement = <HTMLElement>document.querySelector(".body");
        let box0: HTMLDivElement = <HTMLDivElement>document.querySelector(".div0");
        let box1: HTMLDivElement = <HTMLDivElement>document.querySelector(".div1");
        document.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        box0.addEventListener("click", logInfo);
        box0.addEventListener("keyup", logInfo);
        box1.addEventListener("click", logInfo);
        box1.addEventListener("keyup", logInfo);

    }

    function setInfoBox(_event: MouseEvent): void {
        //console.log("_event");
        let x: number = _event.pageX + 10;
        let y: number = _event.pageY + 10;

        //let body: HTMLElement = <HTMLElement>_event.target;
        let info: HTMLSpanElement = <HTMLSpanElement>document.querySelector(".span");
        //body.appendChild(info);

        info.style.left = x + "px";
        info.style.top = y + "px";



    }

    function logInfo(_event: Event): void {
        console.log("Event started: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event-Phase = " + _event.eventPhase);

    }

}