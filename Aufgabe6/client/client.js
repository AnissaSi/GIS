"use strict";
const datum = document.getElementById("datum");
const senden = document.getElementById("enter");
const antwort = document.getElementById("antwort");
const url = "http://127.0.0.1:3000";
const path = "/convertDate";
senden.addEventListener("click", (evt) => {
    evt.preventDefault();
    datumZumServer();
});
async function requestDateWithGet(url) {
    let response = await fetch(url);
    let date = await response.text();
    return date;
}
async function datumZumServer() {
    let inputValue = JSON.stringify(datum.value);
    let serverAntwort = await requestDateWithGet(url + path + `?date=${inputValue}`);
    datumZumServer2(serverAntwort);
}
function datumZumServer2(serverResponse) {
    let newDate = document.createElement("p");
    newDate.className = "serverResponse";
    newDate.textContent = serverResponse;
    antwort.appendChild(newDate);
}
//# sourceMappingURL=client.js.map