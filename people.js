// Importa le funzioni dai file names.js e hobbies.js
const name = require('./names');
const hobbies = require('./hobbies');

// Funzione che non accetta parametri
function person() {
    // Uso name per ottenere il nome completo
    const fullName = name('Mario', 'Rossi');
    
    // Uso createHobbies per ottenere gli hobby
    const hobbies = hobbies('calcio', 'lettura', 'viaggi');
    
    // Costruisco l'oggetto finale
    return {
        fullName: `${fullName.firstName} ${fullName.lastName}`,
        hobbies: hobbies.hobbies
    };
}
console.log(return):