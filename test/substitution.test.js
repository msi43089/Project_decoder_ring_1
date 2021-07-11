const substitutionModule = require("../src/substitution");
const expect = require("chai").expect

describe("substitution", () =>{
    it("Should return false if duplicate value", () => {
        const input = "message"
        const alphabet = "xoyqmcgrukswaflnthdjpzibel"
        const actual = substitutionModule.substitution(input, alphabet)
        expect(actual).to.be.false
})
    it("Should return false if alphabet is not 26 characters", () => {
        const input = "message"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev%"
        const actual = substitutionModule.substitution(input, alphabet)
        expect(actual).to.be.false
})
    it("Should return false if alphabet is missing", () => {
        const input = "message"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev%"
        const actual = substitutionModule.substitution(input)
        expect(actual).to.be.false
})
})
