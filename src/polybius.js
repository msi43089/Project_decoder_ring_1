// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //define polybius square
  const toEncode = {a: "11", b: "21", c: "31", d: "41", e: "51",
                    f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
                    l: "13", m: "23", n: "33", o: "43", p: "53",
                    q: "14", r: "24", s: "34", t: "44", u: "54",
                    v: "15", w: "25", x: "35", y: "45", z: "55", " ": " "
                    }
  const toDecode = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
                    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
                    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
                    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
                    15: "v", 25: "w", 35: "x", 45: "y", 55: "z", 56: " "
                    }
  
  //input is a string to encode/decode
  function polybius(input, encode = true) {
    //if decoding
    if(encode === false){
      //replace spaces with two digit placeholder
      let addSpaces = input.replace(" ", 56)
      //returns false if input is not even
      if (addSpaces.length % 2 !== 0) return false;
      //split string into array of 2 digit values
      //map array based on num value in object - return to string
      return addSpaces.match(/.{1,2}/g).map(num => toDecode[num]).join("")
    }
    //convert input to lowercase
    const lower = input.toLowerCase();
    //convert input to array
    let result = lower.split("")
    //map corresponing object value to array and convert to string
    return result.map(letter => toEncode[letter]).join("")    
  }

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
