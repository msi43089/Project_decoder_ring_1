const polybiusModule = require("../src/polybius");
const expect = require("chai").expect

describe("polybius", () =>{
    it("Should encode the input", () => {
        const input = 'message'
        const actual = polybiusModule.polybius(input);
        const expected = "23513434112251"
        expect(actual).to.equal(expected)

    })
    it("Should transale i/j both to 42", () => {
        const input = 'i'
        const altInput = 'j'
        const actual = polybiusModule.polybius(input);
        const altActual = polybiusModule.polybius(altInput);
        const expected = "42"
        expect(actual).to.equal(expected)
        expect(altActual).to.equal(expected)
        expect(actual).to.equal(altActual)
    })
    it("Should ignore capital letters", () => {
        const input = 'CaPiTal'
        const actual = polybiusModule.polybius(input);
        const expected = "31115342441113"
        expect(actual).to.equal(expected)

    })

})