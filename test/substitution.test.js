const { substitution } = require("../src/substitution");
const expect = require("chai").expect

describe("substitution", () =>{
    let input = "message"

    it("Should return false if duplicate value", () => {
        alphabet = "xoyqmcgrukswaflnthdjpzibel"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
})
    it("Should return false if alphabet is not 26 characters", () => {
        alphabet = "xoyqmcgrukswaflnthdjpzibev%"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
})
    it("Should return false if alphabet is missing", () => {
        const actual = substitution(input)
        expect(actual).to.be.false
})
    it("Should encode the input", () => {
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(input, alphabet)
        const expected = "amddxgm"
        expect(actual).to.equal(expected)
})
      it("Should maintain spacing", () => {
        const input = "this is a message"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(input, alphabet)
        const expected = "jrud ud x amddxgm"
        expect(actual).to.include(" ")
        expect(actual).to.equal(expected)
})
      it("Should ignore capital letters", () => {
        const input = "Matt Iorio"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(input, alphabet)
        const expected = "axjj ulhul"
        expect(actual).to.equal(expected)
})
    it("Should decode with spacing/ignoring capital letters", () => {
        const input = "Axjj Ulhul"
        const alphabet = "xoyqmcgrukswaflnthdjpzibev"
        const actual = substitution(input, alphabet, false)
        const expected = "matt iorio"
        expect(actual).to.equal(expected)
})
})
