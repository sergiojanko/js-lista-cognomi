var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
var userLastName;


// Collect user data

do {
    userLastName = prompt("Inserisci il tuo cognome");
} while (!userLastName);

console.log(userLastName);

console.table(surnames);
surnames.push(userLastName);


var lastNameListElement = document.getElementById("lastnames-list");
var listItems = "";

for (var i = 0; i < surnames.length; i++) {
    surnames[i] = surnames[i][0].toUpperCase() + surnames[i].slice(1);
}

// Sort Array

surnames.sort();
console.table(surnames);

for (var i = 0; i < surnames.length; i++) {
    listItems += "<li>" + (i + 1) + " " + surnames[i] + "</li>"
    console.log((i + 1) + " " + surnames[i])
}


lastNameListElement.innerHTML = listItems;
