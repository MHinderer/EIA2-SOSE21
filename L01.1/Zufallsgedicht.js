"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subject = ["Moritz", "Julian", "Mona", "Martin", "Leon"];
    let preadikat = ["trinkt", "pöbelt", "codet", "randaliert", "ärgert"];
    let object = ["Alkohol", "in der Öffentlichkeit", "Leute an", "am Computer", "im Schlachthof"];
    for (let index = 5; index >= 1; index--) {
        //console.log(index);
        //getVerse(subjekt, preadikat, objekt);
        //console.log(getVerse);
        let valueFinal = getVerse(subject, preadikat, object);
        console.log(valueFinal);
    }
    function getVerse(_subject, _preadikat, _object) {
        let value1 = Math.floor(Math.random() * _subject.length);
        let value2 = Math.floor(Math.random() * _preadikat.length);
        let value3 = Math.floor(Math.random() * _object.length);
        let value = _subject[value1] + "" + _preadikat[value3] + "" + _object[value2];
        _subject.splice(value1, 1);
        _object.splice(value2, 1);
        _preadikat.splice(value3, 1);
        return value;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=Zufallsgedicht.js.map