// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']  //define the alphabet in an array

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift > 25 || shift < -25){       //if shift is less than -25, greater than 25 or 0 return false - early return
      return false
    }
    let lower = input.toLowerCase()                          //convert input to lowercase
    let message = "";                                        //initialize empty string
    for (let j = 0; j < lower.length; j++){                  //loop thru lowercased input 
      if(alphabet.includes(lower[j])){                          //check to see if character is in alphabet
        if (encode){
        let index = (alphabet.indexOf(lower[j])) + shift           //define the index of the new letter
        if ((index) < 26 && (index) > -1){                         //if index exists in alphabet array
        message += alphabet[index]                                    //add letter to message
        }
        else if(index > 25){                                       //if index is greater than array length
          message += alphabet[(index) - 26]                           //reduce index by array size and add letter to message
        }
        else {                                                     //if index is less than 0                    
          message += alphabet[(index) +26]                            //add array length to index and add letter to message
        }
      }
      else {
        let index = (alphabet.indexOf(lower[j])) - shift           //define the index of the new letter
        if ((index) < 26 && (index) > -1){                         //if index exists in alphabet array
        message += alphabet[index]                                    //add letter to message
        }
        else if(index > 25){                                       //if index is greater than array length
          message += alphabet[(index) - 26]                           //reduce index by array size and add letter to message
        }
        else {                                                     //if index is less than 0                    
          message += alphabet[(index) +26]                            //add array length to index and add letter to message
        }
      }
      }
      else {                                                      //if characted is not a letter 
        message += lower[j]                                           //add character to message
      }
    }
    return message
 
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
