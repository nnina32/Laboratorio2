function createDates(name, ci, email) {
    var personDate = "Nombre: ".concat(name, " CI: ").concat(ci, " EMAIL: ").concat(email);
    return personDate;
}
var person = createDates("Noemi", "8509603", "noemi18@gmail.com");
console.log(person);
