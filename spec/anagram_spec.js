const anagrams = require('../lib/anagram')


describe("anagram", ()=> {

    it("should return [] when input is empty String", ()=> {       // 一个断言,TDD
        expect(anagram()).toEqual([])
    })

    it("should return [a] when input is a", ()=> {       // 一个断言,TDD
        expect(anagram("a")).toEqual(["a"])
    })
    it("should return [ab,ba] when input is ab", ()=> {       // 一个断言,TDD
        expect(anagram("ab")).toEqual(["ab","ba"])
    })
    it("should return [abc,acb,bac,bca,cab,cba] when input is abc", ()=> {       // 一个断言,TDD
        expect(anagram("abc")).toEqual(["abc","acb","bac","bca","cab","cba"])
    })
})