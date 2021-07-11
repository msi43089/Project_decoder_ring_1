// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  //define the alphabet in an array
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function caesar(input, shift, encode = true) {
    //if shift is less than -25, greater than 25 or 0 return false - early return
    if(shift === 0 || shift > 25 || shift < -25){       
      return false
    }
    //convert input to lowercase
    let lower = input.toLowerCase()  
    //initialize empty string
    let message = "";
    //loop thru lowercased input 
    for (let j = 0; j < lower.length; j++){    
      //check to see if character is in alphabet
      if(alphabet.includes(lower[j])){ 
        //define empty index to store shifted value
        let index = null
          //if encoding - add shift value to alphabet index                         
          if (encode){
            index = (alphabet.indexOf(lower[j])) + shift           
          }
          //if decoding - subrtract shift from alphabet index
          else {
            index = (alphabet.indexOf(lower[j])) - shift
          }
        //if shifted index exists in alphabet array
        if ((index) < 26 && (index) > -1){
          //add letter to message                         
          message += alphabet[index]                                    
        }
        //if shifted index is greater than array length
        else if(index > 25){    
          //reduce index by array size and add letter to message                                   
          message += alphabet[(index) - 26]                           
        }
        //if index is less than 0  
        else {    
          //add array length to index and add letter to message                                                                   
          message += alphabet[(index) +26]                            
        }
      }
      //if characted is not a letter 
      else {     
        //add character to message                                                 
        message += lower[j]                                           
      }
    }
    return message
 
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
