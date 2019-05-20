const {
    sumMultiples, 
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
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
        "returns an error message if array, arr, is not supplied or a variable is supplied that is not an array"
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
    test("returns true if a string containing only G,T,C,A characters is supplied",  () =>{ 
       // tried using toBeTruthy instead of toBe(true), which can also be used
        expect(isValidDNA("G")).toBeTruthy();
        expect(isValidDNA("T")).toBeTruthy();
        expect(isValidDNA("C")).toBeTruthy();
        expect(isValidDNA("A")).toBeTruthy();
        expect(isValidDNA("GTCA")).toBeTruthy();
        expect(isValidDNA("CTGTCAACGTA")).toBeTruthy();
    });
    
    test("returns false if a string containing characters that are not G,T,C,A is supplied",  () =>{ 
        // tried using toBeTruthy instead of toBe(false), which can also be used
        expect(isValidDNA("P")).toBeFalsy();
        expect(isValidDNA("RCYUIA")).toBeFalsy();
        expect(isValidDNA("G1RTY")).toBeFalsy();
        expect(isValidDNA("G!TTCA")).toBeFalsy();
        expect(isValidDNA(" ")).toBeFalsy();
    });
    test("returns false if the string contains only lowercase g,t,c,a",  () =>{ 
        expect(isValidDNA("cttaaagg")).toBeFalsy();
    });
    // test error messages
    test(
        "returns an error message if str is not supplied, empty string supplied or a string variable is not supplied"
        , () => {
        expect(() => {
        isValidDNA();
        }).toThrow("str is required");
        // empty string not allowed in the function
        // empty string generates error message "str is required"
        // returns false in !str code
        expect(() => {
            isValidDNA("");
            }).toThrow("str is required");
        expect(() => {
            isValidDNA(35);
            }).toThrow("a string is required");
        expect(() => {
            isValidDNA({name: "Jane", id: 342});
            }).toThrow("a string is required");
    });
});
describe("getComplementaryDNA",() =>{
    test("returns complementary DNA base string",  () =>{ 
        expect(getComplementaryDNA("G")).toBe("C");
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("GTCA")).toBe("CAGT");
        expect(getComplementaryDNA("CTGTCAACGTA")).toBe("GACAGTTGCAT");
    });
    
    // test error messages
    test(
        "returns an error message if str does not contain a valid DNA sequence"
        , () => {
        expect(() => {
            getComplementaryDNA("bATGc");
        }).toThrow("valid DNA sequence is required");
        expect(() => {
            getComplementaryDNA();
            }).toThrow("str is required");
        // empty string not allowed in the function
        // empty string generates error message "str is required"
        // returns false in !str code
        expect(() => {
            getComplementaryDNA("");
            }).toThrow("str is required");
        expect(() => {
            getComplementaryDNA(35);
            }).toThrow("a string is required");
    });
    test(
        "returns an error message if DNA sequence is in lower case"
        , () => {
        expect(() => {
            // validation of DNA string is case sensitive
            getComplementaryDNA("gataccgtaa");
            }).toThrow("valid DNA sequence is required");
    });
});
describe("isItPrime",() =>{
    test("returns false n is less than one or n is not an integer or both",  () =>{ 
        // used toBeFalsy() instead of toBe(false), both tests work
        expect(isItPrime(0)).toBeFalsy();
        expect(isItPrime(0.8)).toBeFalsy();
        expect(isItPrime(1)).toBeFalsy();
        expect(isItPrime(-2)).toBeFalsy();
        expect(isItPrime(2.3)).toBeFalsy();
        expect(isItPrime(-32.7)).toBeFalsy();
    });
    test("returns true if n is a prime number",  () =>{ 
        // used toBeThruthy() instead of toBe(true), both tests work
        expect(isItPrime(2)).toBeTruthy();
        expect(isItPrime(17)).toBeTruthy();
        expect(isItPrime(31)).toBeTruthy();
        expect(isItPrime(345143)).toBeTruthy();
    });
    test("returns false if n is not a prime number",  () =>{ 
        // used toBeFalsy() instead of toBe(false), both tests work
        expect(isItPrime(12)).toBeFalsy();
        expect(isItPrime(225)).toBeFalsy();
        expect(isItPrime(345147)).toBeFalsy();
    });
    // test error message generation
    test(
        "returns an error message if n is not supplied, or n is not a number"
        , () => {
        expect(() => {
        isItPrime();
        }).toThrow("a number is required");
        // pass boolean false value to the function
        expect(() => {
            isItPrime(false);
            }).toThrow("a number is required");

        // pass boolean true value to the function
        expect(() => {
            isItPrime(true);
            }).toThrow("a number is required");

        // passing a string to the function
        expect(() => {
            isItPrime("4");
            }).toThrow("a number is required");
    });
});
describe("createMatrix",() =>{
    // example of using toEqual to check returned array contents
    test("returns an array of 3 elements, each with 3 values containing 'foo' fill value",  () =>{ 
        expect(createMatrix(3,"foo")).toEqual(
            [
                ["foo","foo","foo"],
                ["foo","foo","foo"],
                ["foo","foo","foo"]
            ]
            );
    });
    test("returns an array of 4 elements, each with 4 values containing number 37 fill value",  () =>{ 
        expect(createMatrix(4,37)).toEqual(
            [
                [37,37,37,37],
                [37,37,37,37],
                [37,37,37,37],
                [37,37,37,37]
            ]
            );
    });
    test("returns an array of 2 elements, each with 2 values containing object fill value",  () =>{ 
        expect(createMatrix(2,{name: "John", id:67})).toEqual(
            [
                [{name: "John", id:67},{name: "John", id:67}],
                [{name: "John", id:67},{name: "John", id:67}]
            ]
            );
    });
    test("returns an array of 4 elements, each with 4 values containing number 37 fill value",  () =>{ 
        expect(createMatrix(4,[1,"pigeon"])).toEqual(
            [
                [[1,"pigeon"],[1,"pigeon"],[1,"pigeon"],[1,"pigeon"]],
                [[1,"pigeon"],[1,"pigeon"],[1,"pigeon"],[1,"pigeon"]],
                [[1,"pigeon"],[1,"pigeon"],[1,"pigeon"],[1,"pigeon"]],              
                [[1,"pigeon"],[1,"pigeon"],[1,"pigeon"],[1,"pigeon"]]
            ]
        );
        expect(createMatrix(5,true)).toEqual(
            [
                [true, true, true, true, true],
                [true, true, true, true, true],
                [true, true, true, true, true],              
                [true, true, true, true, true],
                [true, true, true, true, true]
            ]
        );
        expect(createMatrix(2," ")).toEqual(
            [
                [" "," "],
                [" "," "]
            ]
        );
    });  
    test("returns an empty array if n=0",  () =>{ 
        expect(createMatrix(0,"foo")).toEqual(
            []
        );     
    });
    test("returns an array of zeros if fill = 0",  () =>{ 
        expect(createMatrix(4,0)).toEqual(
            [
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ]
        );     
    });
    test("returns an array of empty strings if fill=''",  () =>{ 
        expect(createMatrix(3,"")).toEqual(
            [
                ["","",""],
                ["","",""],
                ["","",""]
            ]
        );     
    });
    // test error messages
    test(
        "returns an error message if n is not supplied"
        , () => {
        expect(() => {
            createMatrix();
        }).toThrow("a number is required");
        expect(() => {
            createMatrix(3);
            }).toThrow("fill is required");
        expect(() => {
            createMatrix(3,null);
            }).toThrow("fill is required");
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
        ];
        expect(areWeCovered(staff,"Monday")).toBe(false);
        expect(areWeCovered(staff,"Tuesday")).toBe(false);
    });
    test("it returns false if < 3 staff to cover the day",  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"] },
            { name: "Chloe", rota: ["Saturday"]}
        ];
        expect(areWeCovered(staff,"Wednesday")).toBe(false);
        expect(areWeCovered(staff,"Thursday")).toBe(false);
    });
    test("returns true if there are 3 staff working but only on the day that 3 of the staff are working"
    ,  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Saturday"]},
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"] },
            { name: "Chloe", rota: ["Saturday"]},
            { name: "Patrick", rota: ["Monday", "Friday"]}
        ];
        expect(areWeCovered(staff,"Saturday")).toBe(true);
        expect(areWeCovered(staff,"Tuesday")).toBe(false);
    });
    test("returns true if there are 4 staff working but only on the day that 4 of the staff are working"
    ,  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Saturday"]},
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"] },
            { name: "Chloe", rota: ["Saturday"]},
            { name: "Patrick", rota: ["Monday", "Friday"]},
            { name: "Tahir", rota: ["Monday", "Saturday"]}
        ];
        expect(areWeCovered(staff,"Saturday")).toBe(true);
        expect(areWeCovered(staff,"Tuesday")).toBe(false);
    });
    test("carries out case-insensitive matching of the day provided and the rota days"
    ,  () =>{ 
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Saturday"]},
            { name: "Pedro", rota: ["SATURDAY", "Sunday", "Tuesday"] },
            { name: "Chloe", rota: ["SaturDay"]},
            { name: "Patrick", rota: ["Monday", "Friday"]}
        ];
        expect(areWeCovered(staff,"saturday")).toBe(true);
        expect(areWeCovered(staff,"SATURDAY")).toBe(true);
        expect(areWeCovered(staff,"SaturDaY")).toBe(true);
        expect(areWeCovered(staff,"Tuesday")).toBe(false);
        expect(areWeCovered(staff,"TUESDAY")).toBe(false);
    });
    test("returns false if staff rotas are missing",  () =>{ 
        const staff = [
            { name: "Sally" },
            { name: "Pedro"  },
            { name: "Chloe" },
            { name: "Patrick"},
            { name: "Tahir"}
        ];
        expect(areWeCovered(staff,"Saturday")).toBe(false);
    });
    test("returns false if staff rotas empty",  () =>{ 
        const staff = [
            { name: "Sally",rota:[]},
            { name: "Pedro", rota:[]},
            { name: "Chloe", rota:[]},
            { name: "Patrick", rota:[]},
            { name: "Tahir", rota:[]}
        ];
        expect(areWeCovered(staff,"Saturday")).toBe(false);
    });
    test("returns correct value if some staff rotas are empty/missing but some have rotas"
        ,  () =>{ 
        const staff = [
            { name: "Sally",rota:["Monday", "Tuesday", "Thursday","Friday"]},
            { name: "Pedro", rota:[]},
            { name: "Chloe", rota:["Thursday"]},
            { name: "Patrick", },
            { name: "Tahir", rota:["Monday", "Thursday"]}
        ];
        expect(areWeCovered(staff,"Thursday")).toBe(true);
        expect(areWeCovered(staff, "Monday")).toBe(false);
    });
    // test error messages
    test(
        "returns an error message if staff or day is not supplied"
        , () => {
            const staff = [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Saturday"]},
                { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"]},
                { name: "Chloe", rota: ["Saturday"]},
                { name: "Patrick", rota: ["Monday", "Friday"]}
            ];
        expect(() => {
            areWeCovered();
        }).toThrow("staff is required");
        
        expect(() => {
            areWeCovered(staff);
        }).toThrow("day is required");
    });
    test (
        "returns an error message if invalid data types are provided for staff or day"
        , () => {
            const staff = [
                { name: "Sally", rota: ["Monday", "Tuesday", "Friday","Saturday"]},
                { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday"]},
                { name: "Chloe", rota: ["Saturday"]},
                { name: "Patrick", rota: ["Monday", "Friday"]}
            ];
        expect(() => {
            areWeCovered(3,"Tuesday");
            }).toThrow("a staff array is required");          
        expect(() => {
            areWeCovered(staff,true);
            }).toThrow("a day string is required");
    });
    test(
        "returns an error message if a blank day string is supplied"
        , () => {
            const staff = [
                { name: "Sally", rota: ["Monday", "Tuesday","Friday","Saturday"]},
                { name: "Pedro", rota: ["Saturday", "Sunday","Tuesday"] },
                { name: "Chloe", rota: ["Saturday"]},
                { name: "Patrick", rota: ["Monday", "Friday"]}
            ];
        expect(() => {
            areWeCovered(staff,"");
        }).toThrow("day is required");
    });
});
