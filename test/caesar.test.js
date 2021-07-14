 const { caesar } = require("../src/caesar");
 const expect = require("chai").expect

 describe("caesar", () =>{
     it("Should return false if shift is not between -25 and 25 - excluding 0", () => {
         const shifts = [27, -28, 0, -42, 54]
         const input = 'message'
         const actual = shifts.every(shift => {
             if (caesar(input, shift)) return false
         })
         expect(actual).to.be.false
     })
     it("Should be return encoded message", () => {
         const input = "message"
         const shift = 1
         const actual = caesar(input, shift)
         const expected = "nfttbhf"
         expect(actual).to.equal(expected)
})
    it("Should leave spaces and other characters", () => {
        const input = "this is a message"
        const shift = 2
        const actual = caesar(input, shift)
        const expected = "vjku ku c oguucig"
        expect(actual).to.include(" ")
        expect(actual).to.equal(expected)
})
    it("Should ignore capital letters", () => {
        const input = "CapItaL"
        const shift = 2
        const actual = caesar(input, shift)
        const expected = "ecrkvcn"
        expect(actual).to.equal(expected)
})
       it("Should loop at end of alphabet", () => {
        const input = "x-ray"
        const shift = 4
        const actual = caesar(input, shift)
        const expected = "b-vec"
        expect(actual).to.equal(expected)
})     
      it("Should loop at beginning of alphabet", () => {
        const input = "alphabet"
        const shift = -4
        const actual = caesar(input, shift)
        const expected = "whldwxap"
        expect(actual).to.equal(expected)
})   
     it("Should decode the message", () => {
        const input = "vjku ku c oguucig"
        const shift = 2
        const actual = caesar(input, shift, false)
        const expected = "this is a message"
        expect(actual).to.equal(expected)
})   
 })