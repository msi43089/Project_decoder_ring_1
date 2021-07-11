 const caesarModule = require("../src/caesar");
 const expect = require("chai").expect

 describe("caesar", () =>{
     it("Should have a shift value between -25 and 25 - excluding 0", () => {
         const lowerShift = -28
         const highShift = 40
         const zeroShift = 0
         const input = 'message'
         expect(caesarModule.caesar(input, lowerShift)).to.be.false
         expect(caesarModule.caesar(input, highShift)).to.be.false
         expect(caesarModule.caesar(input, zeroShift)).to.be.false

     })
     it("Should be return encoded message", () => {
         const input = "message"
         const shift = 1
         const actual = caesarModule.caesar(input, shift)
         const expected = "nfttbhf"
         expect(actual).to.equal(expected)
})
    it("Should leave spaces and other characters", () => {
        const input = "this is a message"
        const shift = 2
        const actual = caesarModule.caesar(input, shift)
        const expected = "vjku ku c oguucig"
        expect(actual).to.equal(expected)
})
    it("Should ignore capital letters", () => {
        const input = "CapItaL"
        const shift = 2
        const actual = caesarModule.caesar(input, shift)
        const expected = "ecrkvcn"
        expect(actual).to.equal(expected)
})
       it("Should loop at end of alphabet", () => {
        const input = "x-ray"
        const shift = 4
        const actual = caesarModule.caesar(input, shift)
        const expected = "b-vec"
        expect(actual).to.equal(expected)
})     
      it("Should loop at beginning of alphabet", () => {
        const input = "alphabet"
        const shift = -4
        const actual = caesarModule.caesar(input, shift)
        const expected = "whldwxap"
        expect(actual).to.equal(expected)
})   
 })