const {
    sumMultiples, 
    isValidDNA,
    createMatrix,
    areWeCovered
}
= require("../challenges/week9");
// describe block
describe("sumMultiples",() =>{
    // test block
    test("it returns the sum of any numbers that are a multiple of 3 or 5",  () =>{
        const result = sumMultiples([1,3,5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("it returns the sum of any numbers that are a multiple of 3 or 5",  () =>{
        expect(sumMultiples([9,2,60,60,3,99,40,0])).toBe(271);
    });
    test("returns zero if there are no multiples of 3 or 5",  () =>{
        expect(sumMultiples([17,0,34,8])).toBe(0);
    });
    test("decimal values can be handled by the function",  () =>{
        expect(sumMultiples([9,2,60.5,60.0,3,99,40.95,0])).toBe(171);
    });
    test("negative values divisible by 3 and 5 result in subtraction from total value",  () =>{
        expect(sumMultiples([9,2,60,-3])).toBe(66);
    });
    test("empty array passed to the function returns 0",  () =>{
        expect(sumMultiples([])).toBe(0);
    });
    // error message testing
    // 1. test for error message if no array of numbers is provided
    // 2. test for error message if an invalid variable type is 
    // passed to the function, instead of an array
    test(
        "returns an error message if array, arr, is not supplied or an variable is supplied that is not an array"
        , () => {
        expect(() => {
        sumMultiples();
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples("foo");
            }).toThrow("an array is required");
        expect(() => {
            sumMultiples(3);
            }).toThrow("an array is required");
    });
});
describe("isValidDNA",() =>{
    test("returns an array of 3 elements, each with 3 values containing 'foo' fill value",  () =>{ 
       
    });
});
describe("createMatrix",() =>{
    // example of using toEqual to check returned array contents
    test("returns an array of 3 elements, each with 3 values containing 'foo' fill value",  () =>{ 
        expect(createMatrix(3,"foo")).toEqual(
            [["foo","foo","foo"],
            ["foo","foo","foo"],
            ["foo","foo","foo"]]
            );
    });
});
describe("areWeCovered",() =>{
    test("it returns false if there are no staff at all",  () =>{ 
        expect(areWeCovered([],"Sunday")).toBe(false);
        expect(areWeCovered([],"Monday")).toBe(false);
        expect(areWeCovered([],"Tuesday")).toBe(false);
        expect(areWeCovered([],"Wednesday")).toBe(false);
        expect(areWeCovered([],"Thursday")).toBe(false);
        expect(areWeCovered([],"Friday")).toBe(false);
        expect(areWeCovered([],"Saturday")).toBe(false);
    });
    test("it returns false there are less than 3 staff in the array",  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"] },
        ]
        expect(areWeCovered(staff,"Monday")).toBe(false);
        expect(areWeCovered(staff,"Tuesday")).toBe(false);
    });
    test("it returns false if < 3 staff to cover the day",  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"] },
            { name: "Chloe", rota: ["Saturday"]}
        ]
        expect(areWeCovered(staff,"Wednesday")).toBe(false);
        expect(areWeCovered(staff,"Thursday")).toBe(false);
    });
    test("returns true if there are 3 staff working but only on the day that all the staff are working",  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Saturday"]},
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"] },
            { name: "Chloe", rota: ["Saturday"]},
            { name: "Patrick", rota: ["Monday", "Friday"]}
        ]
        expect(areWeCovered(staff,"Saturday")).toBe(true);
        expect(areWeCovered(staff,"Tuesday")).toBe(false);
    });
    test("returns true if there are 4 staff working but only on the day that all the staff are working",  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Saturday"]},
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"] },
            { name: "Chloe", rota: ["Saturday"]},
            { name: "Patrick", rota: ["Monday", "Friday"]},
            { name: "Tahir", rota: ["Monday", "Saturday"]}
        ]
        expect(areWeCovered(staff,"Saturday")).toBe(true);
        expect(areWeCovered(staff,"Tuesday")).toBe(false);
    });
});
