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


var lastNameListElement = document.getElementById("lastnames-list");
var listItems = "";


// Sort Array

surnames.sort();
console.table(surnames);

for (var i = 0; i < surnames.length; i++) {
    listItems += "<li>" + (i + 1) + " " + surnames[i] + "</li>";
    console.log((i + 1) + " " + surnames[i]);
}


lastNameListElement.innerHTML = listItems;
