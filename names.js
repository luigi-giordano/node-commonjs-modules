// Exporta la funzione utilizzando CommonJS
function getPerson(firstName, lastName) {
  return {
      firstName: firstName,
      lastName: lastName
  };
}
// Esportazione della funzione
module.exports = getPerson;