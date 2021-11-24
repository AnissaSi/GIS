"use strict";
var aufgabe4;
(function (aufgabe4) {
    const table = document.getElementById("table");
    const price = document.querySelector("#price");
    const Interpret = document.querySelector("#Interpret");
    const Enter_Event_button = document.querySelector("#Enter_Event_button");
    let zeilen = [];
    let ladezeilen = [];
    let speicherzeilen;
    window.addEventListener("load", () => {
        ladeTabelle();
    });
    Enter_Event_button.addEventListener("click", () => {
        Enter_Event_buttonAusführen(Interpret.value, price.value, true);
        console.log(ladezeilen);
    });
    function Enter_Event_buttonAusführen(interpretInput, priceInput, save) {
        let priceValue = priceInput;
        let InterpretValue = interpretInput;
        let _Interpret = document.createElement("td");
        _Interpret.textContent = InterpretValue;
        let _Price = document.createElement("td");
        _Price.textContent = priceValue;
        let _Trash = document.createElement("td");
        let Trash = document.createElement("button");
        Trash.textContent = "löschen";
        let Tabellenzeile = document.createElement("tr");
        table.appendChild(Tabellenzeile);
        Tabellenzeile.appendChild(_Interpret);
        Tabellenzeile.appendChild(_Price);
        Tabellenzeile.appendChild(_Trash);
        _Trash.appendChild(Trash);
        if (save) {
            let speicherzeile = {
                Interpret: _Interpret.textContent,
                price: _Price.textContent
            };
            zeilen.push(speicherzeile);
            speicherzeilen = JSON.stringify(zeilen);
            localStorage.setItem("speicherzeilen", speicherzeilen);
        }
        Trash.addEventListener("click", () => {
            table.removeChild(Tabellenzeile);
        });
    }
    function ladeTabelle() {
        if (localStorage.length < 1)
            return;
        ladezeilen = JSON.parse(localStorage.getItem("speicherzeilen"));
        for (let i = 0; i < ladezeilen.length; i++) {
            Enter_Event_buttonAusführen(ladezeilen[i].Interpret, ladezeilen[i].price, false);
        }
        zeilen = ladezeilen;
        ladezeilen = [];
    }
})(aufgabe4 || (aufgabe4 = {}));
//# sourceMappingURL=script.js.map