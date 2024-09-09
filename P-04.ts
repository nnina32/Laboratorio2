function createDates(name: string, ci: string, email: string): string { 
    const personDate = `Nombre: ${name} CI: ${ci} EMAIL: ${email}` 
    return personDate;
}


const person = createDates("Noemi", "8509603", "noemi18@gmail.com");
console.log(person);