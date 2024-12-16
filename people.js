// Importa le funzioni dai file names.js e hobbies.js
const person = require('./names');
const getHobbies = require('./hobbies');

// Funzione che non accetta parametri
function functionPerson() {
    // Uso name per ottenere il nome completo
    const fullName = person('Mario', 'Rossi');
    
    // Uso createHobbies per ottenere gli hobby
    const personHobbies = getHobbies('calcio', 'lettura', 'viaggi');
    
    // Costruisco l'oggetto finale
    return {
        fullName: `${fullName.firstName} ${fullName.lastName}`,
        hobbies: personHobbies.hobbies
    };
}

// Esportazione della funzione
module.exports = functionPerson;