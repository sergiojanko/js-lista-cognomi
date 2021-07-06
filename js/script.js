var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
var userLastName;

do {
    userLastName = prompt("Inserisci il tuo cognome");
} while (!userLastName);

console.log(userLastName);

console.table(surnames);
surnames.push(userLastName);
surnames.sort();
console.table(surnames);