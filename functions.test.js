const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions');

test("Should return the int 2", () => {
    expect(returnTwo()).toEqual(2);
})

test("Should return greeting and input name", () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

describe("Math Functions", () => {
    
    test("Should add both numbers passed", () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })
    
    test("Should multiply both numbers passed", () => {
        expect(multiply(7, 3)).toEqual(21)
        expect(multiply(15, 2)).toEqual(30)
    })
    
    test("Should multiply both numbers passed", () => {
        expect(divide(12, 4)).toEqual(3)
        expect(divide(15, 3)).toEqual(5)
    })
    
    test("Should multiply both numbers passed", () => {
        expect(subtract(16, 4)).toEqual(12)
        expect(subtract(25, 5)).toEqual(20)
    })
})