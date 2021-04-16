"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    console.log("start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let body = document.querySelector(".body");
        let box0 = document.querySelector(".div0");
        let box1 = document.querySelector(".div1");
        document.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        box0.addEventListener("click", logInfo);
        box0.addEventListener("keyup", logInfo);
        box1.addEventListener("click", logInfo);
        box1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        //console.log("_event");
        let x = _event.pageX + 10;
        let y = _event.pageY + 10;
        //let body: HTMLElement = <HTMLElement>_event.target;
        let info = document.querySelector(".span");
        //body.appendChild(info);
        info.style.left = x + "px";
        info.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log("Event started: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event-Phase = " + _event.eventPhase);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=script02.js.map