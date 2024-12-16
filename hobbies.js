// Funzione che accetta tre parametri e restituisce un oggetto con un array di hobby
function getHobbies(hobbyOne, hobbyTwo, hobbyThree) {
  return {
      hobbies: [hobbyOne, hobbyTwo, hobbyThree]
  };
}

console.log(getHobbies);
// Esportazione della funzione
module.exports = getHobbies;