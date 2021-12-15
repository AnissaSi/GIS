const datum: HTMLInputElement = <HTMLInputElement> document.getElementById("datum");
const senden: HTMLButtonElement = <HTMLButtonElement> document.getElementById("enter");
const antwort: HTMLElement = document.getElementById("antwort");

const url: string = "http://127.0.0.1:3000";
const path: string = "/convertDate"; 

senden.addEventListener("click", (evt: Event) => {
  evt.preventDefault();
  datumZumServer();
});

async function requestDateWithGet(url: RequestInfo): Promise<string> { 
  let response: Response = await fetch(url); 
  let date: string = await response.text();
  
  return date;
}

async function datumZumServer(): Promise<void> {
  let inputValue: string = JSON.stringify(datum.value);
  let serverAntwort: string = await requestDateWithGet(url + path + `?date=${inputValue}`); 
  datumZumServer2(serverAntwort); 
}

function datumZumServer2(serverResponse: string): void { 
  let newDate: HTMLElement = document.createElement("p");
  newDate.className = "serverResponse";
  newDate.textContent = serverResponse;

  antwort.appendChild(newDate);
}