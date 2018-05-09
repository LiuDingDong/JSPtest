const fibonacci = require("../lib/fibonacci")

describe("fibonacci", ()=> {

    it("should return 1 when input 1", ()=> {       // 一个断言,TDD
        expect(fibonacci(1)).toBe(1)
    })
    
    it("should return 1 when input 2", ()=> {       // 一个断言,TDD
        expect(fibonacci(2)).toBe(1)
    })
    
    it("should return 2 when input 3", ()=> {       // 一个断言,TDD
        expect(fibonacci(3)).toBe(2)
    })
})