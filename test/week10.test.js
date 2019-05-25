const {
    sumDigits,
    createRange 
    
}
= require("../challenges/week10");
// describe block
describe("sumDigits",() =>{

    test("it returns the sum of all the digits in an integer number",  () =>{
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(926060399400)).toBe(48);
        expect(sumDigits(56.0)).toBe(11);
        expect(sumDigits(0)).toBe(0);
    });
    test("it returns the sum of all the digits if a negative integer is provided",  () =>{
        expect(sumDigits(-123)).toBe(6);
        expect(sumDigits(-926060399400)).toBe(48);
        expect(sumDigits(-56.0)).toBe(11);
        expect(sumDigits(-0)).toBe(0);
    });
    
    // error message testing
    test(
        "returns an error message if n is not supplied"
        , () => {
        expect(() => {
        sumDigits();
        }).toThrow("n is required");
        
    });
    test(
        "returns an error message if n is not an integer"
        , () => {
        expect(() => {
        sumDigits("1456");
        }).toThrow("an integer is required");
        // decimal which is not .0 returns error
        expect(() => {
            sumDigits(1456.45);
            }).toThrow("an integer is required");

        expect(() => {
            sumDigits({integer: 123});
            }).toThrow("an integer is required");
        
    });
});

describe.only("createRange",() =>{

    test("returns an array containing the correct numbers",  () =>{
        expect(createRange(3,11,2)).toEqual([3,5,7,9,11]);
        expect(createRange(0,25,5)).toEqual([0,5,10,15,20,25]);
        
    });
    test("returns an array containing the correct numbers, when no step is provided",  () =>{
        expect(createRange(3,11)).toEqual([3,4,5,6,7,8,9,10,11]);
        expect(
            createRange(0,20)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    });
    test("returns an array of descending numbers when the step is negative",  () =>{
        expect(createRange(11,3,-2)).toEqual([11,9,7,5,3]);
        expect(createRange(25,0,-5)).toEqual([25,20,15,10,5,0]);
    });
    
    // error message testing
    test(
        "returns an error message if start is not supplied"
        , () => {
        expect(() => {
        createRange();
        }).toThrow("start is required");
        
    });
    test(
        "returns an error message if end is not supplied"
        , () => {
        expect(() => {
        createRange(10);
        }).toThrow("end is required");
        
    });
    test(
        "returns an error message if step is zero"
        , () => {
        expect(() => {
        createRange(2,8,0);
        }).toThrow("step cannot be zero");
    });
    test(
        "returns an error message if step is provided but is not a number"
        , () => {
        expect(() => {
            createRange(4,20,"2");
            }).toThrow("step must be a number or not provided");
       
        expect(() => {
            createRange(4,20,"");
            }).toThrow("step must be a number or not provided");

        expect(() => {
            createRange(20,50,{integer: 10});
            }).toThrow("step must be a number or not provided");
        
    });
});