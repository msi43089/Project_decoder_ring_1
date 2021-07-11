// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let realAlphabet = "abcdefghijklmnopqrstuvwxyz"
  let alpha = realAlphabet.split("")

  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //early return false if alphabet is missing or does not have 26 characters
    if (!alphabet || alphabet.length !== 26) return false
    //convert alphabet into an array
    let subAlphabet = alphabet.split("");
    //check for dupicate elements in the array - sort array
    let sortAlpha = subAlphabet.sort()
    //loop thru sorted array
    for (let i = 0; i < sortAlpha.length; i++)
      //if current indexed element equals next indexed element return false
      if(sortAlpha[i +1] === sortAlpha[i]){
        return false
      }
    let inputArray = input.split("")
      //find the index of each "inputArray" element in the aplpha array
      //find the element that corresponds to the same index in the "subAlphabet" array


    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
