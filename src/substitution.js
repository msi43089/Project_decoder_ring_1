// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //defince real alphabet with space character
  let realAlphabet = "abcdefghijklmnopqrstuvwxyz "


  //input is a string to be decoded/encoded
  //alphabet is a string of 26 unique characters 
  function substitution(input, alphabet, encode = true) {
    //early return false if alphabet is missing or does not have 26 characters
    if (!alphabet || alphabet.length !== 26) return false
    //convert alphabet into an array
    alphabet = alphabet.split("").push(" ")
    //add space to array
    alphabet.push(" ")
    //check for dupicate elements in the array
    for (let i = 0; i < alphabet.length; i++){
      if (alphabet.indexOf(alphabet[i]) != alphabet.lastIndexOf(alphabet[i])){
        return false
      }
    }
    //convert input to lowercase
    input = input.toLowerCase();
    //initiatie result
    let result = ""
    //loop each input - matching the real alphabet index to the substitution alphabet index and add 
    //corresponding letter to result
    for (let i = 0; i < input.length; i++){
      if (encode){
        result += alphabet[realAlphabet.indexOf(input[i])]
      }
      else{
        result += realAlphabet[alphabet.indexOf(input[i])]
      }
    }
   return result
   
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
