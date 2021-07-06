var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
var userLastName;


// Collect user data

do {
    userLastName = prompt("Inserisci il tuo cognome");
} while (!userLastName);

userLastName = userLastName[0].toUpperCase() + userLastName.slice(1);

console.log(userLastName);

console.table(surnames);
surnames.push(userLastName);


// Sort Array

surnames.sort();
console.table(surnames);


var lastNameListElement = document.getElementById("lastnames-list");
var listItems = "";

var lastNamePosition = -1;

for (var i = 0; i < surnames.length; i++) {
    listItems += "<li>" + (i + 1) + " " + surnames[i] + "</li>";
    console.log((i + 1) + " " + surnames[i]);
    if (surnames[i] === userLastName) {
        lastNamePosition = i + 1;
        console.log(lastNamePosition);
    }
}

lastNameListElement.innerHTML = listItems;

var positionElement = document.getElementById("output-position");

if (lastNamePosition >= 0) {
    console.log("Il tuo cognome si trova in ", lastNamePosition , "° posizione");
    positionElement.innerHTML = "Il tuo cognome si trova in " + lastNamePosition + "° posizione";
}


