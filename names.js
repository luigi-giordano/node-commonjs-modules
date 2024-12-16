// Exporta la funzione utilizzando CommonJS
function person(firstName, lastName) {
  return {
      firstName: firstName,
      lastName: lastName
  };
}
// Esportazione della funzione
module.exports = person;