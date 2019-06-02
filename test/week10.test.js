const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner  
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
        // decimal which is not .0, i.e. cannot be represented by an integer returns error
        expect(() => {
            sumDigits(1456.45);
            }).toThrow("an integer is required");

        expect(() => {
            sumDigits({integer: 123});
            }).toThrow("an integer is required");
        
    });
});

describe("createRange",() =>{

    test("returns an ascending array containing the correct numbers when end value is greater than start value",  
        () =>{
            expect(createRange(3,11,2)).toEqual([3,5,7,9,11]);
            expect(createRange(0,25,5)).toEqual([0,5,10,15,20,25]);
        
    });
    test("returns single value array containing start if start and end are equal",  
        () =>{
            expect(createRange(3,3,2)).toEqual([3]);
            expect(createRange(3,3,2)).toEqual([3]);
            expect(createRange(0,0,5)).toEqual([0]);
        
    });
    test("returns an array containing the correct numbers, when no step is provided",  () =>{
        expect(createRange(3,11)).toEqual([3,4,5,6,7,8,9,10,11]);
        expect(
            createRange(0,20)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    });
    test("returns an array of descending numbers when the end value is less than the start value",  () =>{
        expect(createRange(11,3,2)).toEqual([11,9,7,5,3]);
        expect(createRange(25,0,5)).toEqual([25,20,15,10,5,0]);
    });
    test("may not include the end value if start if step is not set to a value that will include end.",  () =>{
        expect(createRange(2,9,4)).toEqual([2,6]);
        expect(
            createRange(0,20)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    });
    test("returns an array of descending numbers when the end value is less than the start value",  () =>{
        expect(createRange(11,3,2)).toEqual([11,9,7,5,3]);
        expect(createRange(10,2,3)).toEqual([10,7,4]);
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
        "returns an error message if step is zero or less"
        , () => {
        expect(() => {
        createRange(2,8,0);
        }).toThrow("step must be an integer >= 1, or not provided");
        expect(() => {
            createRange(8,2,-1);
            }).toThrow("step must be an integer >= 1, or not provided");
    });
    test(
        "returns an error message if numeric step is provided but is not a positive integer"
        , () => {
        expect(() => {
            createRange(4,20,2.5);
            }).toThrow("step must be a positive integer, or not provided");
       
        expect(() => {
            createRange(4,20,1.987);
            }).toThrow("step must be a positive integer, or not provided");

        expect(() => {
            createRange(20,50,-3.09);
            }).toThrow("step must be a positive integer, or not provided");
        
    });
    test(
        "returns an error message if step is provided but is not a number"
        , () => {
        expect(() => {
            createRange(4,20,"2");
            }).toThrow("step must be a positive integer, or not provided");
       
        expect(() => {
            createRange(4,20,"");
            }).toThrow("step must be a positive integer, or not provided");

        expect(() => {
            createRange(20,50,{integer: 10});
            }).toThrow("step must be a positive integer, or not provided");
        
    });
});
describe("getScreentimeAlertList",() =>{
    test("returns an array of users with greater than 100 minutes usage time - single user on one date",  
        () =>{
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
            ]
            expect(getScreentimeAlertList(userList,"2019-05-02")).toEqual(["beth_1234"]);  
    });
    test("returns an array of users with greater than 100 minutes usage time, several users on one date",  
        () =>{
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
                {
                    username: "esther2867",
                    name: "Esther O'Brien",
                    screenTime: [
                       { date: "2019-05-01", usage: { twitter: 0, whatsApp: 0, linkedIn: 0, safari: 10, instagram:14} },
                       { date: "2019-06-13", usage: { mapMyRun: 27, whatsApp: 0, facebook: 30, safari: 16} },
                       { date: "2019-05-02", usage: { mapMyRun: 16, whatsApp: 58, facebook: 23, safari: 31} },
                               ] 
                   }, 
            ]
            expect(getScreentimeAlertList(userList,"2019-05-02")).toEqual(["beth_1234","esther2867"]);  
    });


    test("returns an empty array if no users have > 100 mins usage on the specified date",  
        () =>{
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-05-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
                {
                    username: "esther2867",
                    name: "Esther O'Brien",
                    screenTime: [
                       { date: "2019-05-01", usage: { twitter: 0, whatsApp: 0, linkedIn: 0, safari: 10, instagram:14} },
                       { date: "2019-06-13", usage: { mapMyRun: 27, whatsApp: 0, facebook: 30, safari: 16} },
                       { date: "2019-05-02", usage: { mapMyRun: 16, whatsApp: 58, facebook: 23, safari: 31} },
                               ] 
                   }, 
            ]
            expect(getScreentimeAlertList(userList,"2019-05-01")).toEqual([]);  
    });
    test("can return correct list of users if user has no objects in usage on the requested date",  
        () =>{
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
                {
                    username: "ritchie@hotmail",
                    name: "Ritchie Campbell",
                    screenTime: [
                      { date: "2018-05-14", usage: {facebook: 40}},
                      { date: "2019-05-02", usage: { }},
                      { date: "2019-06-13", usage: { twitter: 12, instagram: 15, facebook: 19} },
                      { date: "2019-06-14", usage: { twitter: 10, instagram: 56, facebook: 61} },
                                ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
                {
                    username: "esther2867",
                    name: "Esther O'Brien",
                    screenTime: [
                       { date: "2019-05-01", usage: { twitter: 0, whatsApp: 0, linkedIn: 0, safari: 10, instagram:14} },
                       { date: "2019-06-13", usage: { mapMyRun: 27, whatsApp: 0, facebook: 30, safari: 16} },
                       { date: "2019-05-02", usage: { mapMyRun: 16, whatsApp: 58, facebook: 23, safari: 31} },
                               ] 
                   }, 
            ]
            expect(getScreentimeAlertList(userList,"2019-05-02")).toEqual(["beth_1234","esther2867"]);  
    });
    test("can return correct list of users if user has no usage on requested date",  
        () =>{
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
                {
                    username: "ritchie@hotmail",
                    name: "Ritchie Campbell",
                    screenTime: [
                      { date: "2018-05-14", usage: {facebook: 40}},
                      { date: "2019-05-02"},
                      { date: "2019-06-13", usage: { twitter: 12, instagram: 15, facebook: 19} },
                      { date: "2019-06-14", usage: { twitter: 10, instagram: 56, facebook: 61} },
                                ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
                {
                    username: "esther2867",
                    name: "Esther O'Brien",
                    screenTime: [
                       { date: "2019-05-01", usage: { twitter: 0, whatsApp: 0, linkedIn: 0, safari: 10, instagram:14} },
                       { date: "2019-06-13", usage: { mapMyRun: 27, whatsApp: 0, facebook: 30, safari: 16} },
                       { date: "2019-05-02", usage: { mapMyRun: 16, whatsApp: 58, facebook: 23, safari: 31} },
                               ] 
                   }, 
            ]
            expect(getScreentimeAlertList(userList,"2019-05-02")).toEqual(["beth_1234","esther2867"]);  
    });
    test("can return correct list of users if user has no date in screenTime object",  
        () =>{
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
                {
                    username: "ritchie@hotmail",
                    name: "Ritchie Campbell",
                    screenTime: [
                      { date: "2018-05-14", usage: {facebook: 40}},
                      { usage: { linkedIn: 12, instagram: 23, facebook: 29}},
                      { date: "2019-06-13", usage: { twitter: 12, instagram: 15, facebook: 19} },
                      { date: "2019-06-14", usage: { twitter: 10, instagram: 56, facebook: 61} },
                                ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
                {
                    username: "esther2867",
                    name: "Esther O'Brien",
                    screenTime: [
                       { date: "2019-05-01", usage: { twitter: 0, whatsApp: 0, linkedIn: 0, safari: 10, instagram:14} },
                       { date: "2019-06-13", usage: { mapMyRun: 27, whatsApp: 0, facebook: 30, safari: 16} },
                       { date: "2019-05-02", usage: { mapMyRun: 16, whatsApp: 58, facebook: 23, safari: 31} },
                               ] 
                   }, 
            ]
            expect(getScreentimeAlertList(userList,"2019-05-02")).toEqual(["beth_1234","esther2867"]);  
    });
    test("can return correct list of users if user has no screenTime object",  
        () =>{
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
                {
                    username: "ritchie@hotmail",
                    name: "Ritchie Campbell"
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
                {
                    username: "esther2867",
                    name: "Esther O'Brien",
                    screenTime: [
                       { date: "2019-05-01", usage: { twitter: 0, whatsApp: 0, linkedIn: 0, safari: 10, instagram:14} },
                       { date: "2019-06-13", usage: { mapMyRun: 27, whatsApp: 0, facebook: 30, safari: 16} },
                       { date: "2019-05-02", usage: { mapMyRun: 16, whatsApp: 58, facebook: 23, safari: 31} },
                               ] 
                   }, 
            ]
            expect(getScreentimeAlertList(userList,"2019-05-02")).toEqual(["beth_1234","esther2867"]);  
    });
    test("returns a blank array if the list of users is blank",  
        () =>{
            const userList = []
            expect(getScreentimeAlertList(userList,"2019-05-02")).toEqual([]);  
    });
    test("returns a blank array if the list of users has no objects",  
        () =>{
            expect(getScreentimeAlertList(["beth_1234", "sam_j_1989"],"2019-05-02")).toEqual([]);  
    });
    // error message testing
    test(
        "returns an error message if users array is not supplied"
        , () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");
        
    });
    test(
        "returns an error message if date not supplied"
        , () => {
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
            ]
        expect(() => {
            getScreentimeAlertList(userList);
        }).toThrow("date is required");
        
    });
    test(
        "returns an error message if date is not a string"
        , () => {
            const userList = [
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
               {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }, 
            ]
        expect(() => {
            getScreentimeAlertList(userList, 2019);
        }).toThrow("date string is required in the format 'YYYY-MM-DD'");
        expect(() => {
            getScreentimeAlertList(userList,{date: "2019-05-02"});
        }).toThrow("date string is required in the format 'YYYY-MM-DD'");
        
    });
    test(
        "returns an error message if users is not an array"
        , () => {
            const userList = { user1: 
                {
                  username: "beth_1234",
                  name: "Beth Smith",
                  screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                              ]
                },
                user2: {
                 username: "sam_j_1989",
                 name: "Sam Jones",
                 screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ] 
                }
            }
        expect(() => {
            getScreentimeAlertList(userList,"2019-05-02");
        }).toThrow("users array is required");
        expect(() => {
            getScreentimeAlertList(1234,"2019-05-02");
        }).toThrow("users array is required");
        expect(() => {
            getScreentimeAlertList("beth_1234, sam_j_1989","2019-05-02");
        }).toThrow("users array is required");
    });
});
describe("hexToRGB",() =>{

    test("produces the correct rgb value if a valid hexadecimal string starting with # is provided",  () =>{
        expect(hexToRGB("#123456")).toBe("rgb(18,52,86)");
        expect(hexToRGB("#DEFABC")).toBe("rgb(222,250,188)");
        expect(hexToRGB("#1AF90C")).toBe("rgb(26,249,12)");
        expect(hexToRGB("#F05ACD")).toBe("rgb(240,90,205)");
    });
    test("it returns the correct rgb value if the # is omitted in a valid hexadecimal string",  () =>{
        expect(hexToRGB("123456")).toBe("rgb(18,52,86)");
        expect(hexToRGB("DEFABC")).toBe("rgb(222,250,188)");
        expect(hexToRGB("1AF90C")).toBe("rgb(26,249,12)");
        expect(hexToRGB("F05ACD")).toBe("rgb(240,90,205)");
    });
    test("it returns the correct rgb value if the hexadecimal letters are lower case",  () =>{
        expect(hexToRGB("123a56")).toBe("rgb(18,58,86)");
        expect(hexToRGB("defabc")).toBe("rgb(222,250,188)");
        expect(hexToRGB("1Af90C")).toBe("rgb(26,249,12)");
        expect(hexToRGB("f05ACd")).toBe("rgb(240,90,205)");
    });
    // error message testing
    test(
        "returns an error message if a hexadecimal string is not provided"
        , () => {
        expect(() => {
        hexToRGB();
        }).toThrow("hexStr is required");
        
    });
    test(
        "returns an error message if the hexadecimal string is too long"
        , () => {
        expect(() => {
        hexToRGB("#1B1256A");
        }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
            hexToRGB("3A290B8");
            }).toThrow("hexadecimal string required in format '#F3A56D'");
    });
    test(
        "returns an error message if the hexadecimal string is too short"
        , () => {
        expect(() => {
        hexToRGB("#1B25A");
        }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
            hexToRGB("3A29");
            }).toThrow("hexadecimal string required in format '#F3A56D'");
    });
    test(
        "returns an error message if the hexadecimal string contains invalid characters"
        , () => {
        expect(() => {
        hexToRGB("#1B25AG");
        }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
            hexToRGB("3A29HZ");
            }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
            hexToRGB("3 29H!");
            }).toThrow("hexadecimal string required in format '#F3A56D'");
    });
    test(
        "returns an error message if the string format is not correct"
        , () => {
        expect(() => {
            // do not permit hexadecimal written in the numeric format 0x3F4D3A
            hexToRGB(0x1B125A);
            }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
            // number instead of string
            hexToRGB(12789);
            }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
            hexToRGB(false);
            }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
            hexToRGB(["FF","18","9A"]);
            }).toThrow("hexadecimal string required in format '#F3A56D'");
    });
});
describe("findWinner",() =>{
    test("returns the winner when a row has been completed",  () =>{
        // horizontal rows of "X"
        const gameArray = [
                            ["X", "X", "X"],
                            ["0", null, "0"],
                            ["X", null, "0"]
                        ];
        const gameArray1 = [
                            ["X", "0", "X"],
                            ["X", "X", "X"],
                            ["0", null, "0"]
                        ];
        const gameArray2 = [
                            ["0", "X", "X"],
                            ["0", null, "0"],
                            ["X", "X", "X"]
                        ];
        // horizontal rows of "0"
        const gameArray3 = [
                            ["0", "0", "0"],
                            ["X", null, "0"],
                            ["0", "X", "X"]
                        ];
        const gameArray4 = [
                            ["0", "X", "0"],
                            ["0", "0", "0"],
                            ["X", "0", "X"]
                        ];
        const gameArray5 = [
                            ["X", "X", null],
                            ["X", null, "0"],
                            ["0", "0", "0"]
                        ];
        expect(findWinner(gameArray)).toBe("X");
        expect(findWinner(gameArray1)).toBe("X");
        expect(findWinner(gameArray2)).toBe("X");
        expect(findWinner(gameArray3)).toBe("0");
        expect(findWinner(gameArray4)).toBe("0");
        expect(findWinner(gameArray5)).toBe("0");
    });
    test("returns the winner when a column has been completed",  () =>{
        // vertical rows of "X"
        const gameArray = [
                            ["X", "0", "X"],
                            ["X", null, "0"],
                            ["X", null, "0"]
                        ];
        const gameArray1 = [
                            ["X", "X", "X"],
                            ["0", "X", "X"],
                            ["0", "X", "0"]
                        ];
        const gameArray2 = [
                            ["0", "X", "X"],
                            ["0", null, "X"],
                            ["X", "0", "X"]
                        ];
        // horizontal rows of "0"
        const gameArray3 = [
                            ["0", "X", "0"],
                            ["0", null, "0"],
                            ["0", "X", "X"]
                        ];
        const gameArray4 = [
                            ["X", "0", "0"],
                            ["0", "0", null],
                            [null, "0", "X"]
                        ];
        const gameArray5 = [
                            ["X", "X", "0"],
                            ["X", null, "0"],
                            ["0", "X", "0"]
                        ];
        expect(findWinner(gameArray)).toBe("X");
        expect(findWinner(gameArray1)).toBe("X");
        expect(findWinner(gameArray2)).toBe("X");
        expect(findWinner(gameArray3)).toBe("0");
        expect(findWinner(gameArray4)).toBe("0");
        expect(findWinner(gameArray5)).toBe("0");
    });
    test("returns the winner when a diagonal line has been completed",  () =>{
        // left to right diagonal line of "X"
        const gameArray = [
                            ["X", "0", null],
                            ["0", "X", "0"],
                            ["X", null, "X"]
                        ];
        // left to right diagonal line of "0"
        const gameArray1 = [
                            ["0", "0", null],
                            ["0", "0", "0"],
                            ["X", null, "0"]
                        ];
        // right to left diagonal line of "X"
        const gameArray2 = [
            [null, null, "X"],
            ["X", "X", "0"],
            ["X", "0", "X"]
        ];
        // right to left diagonal line of "0"
        const gameArray3 = [
            [null, null, "0"],
            ["X", "0", "0"],
            ["0", "0", "X"]
        ];
        expect(findWinner(gameArray)).toBe("X");
        expect(findWinner(gameArray1)).toBe("0");
        expect(findWinner(gameArray2)).toBe("X");
        expect(findWinner(gameArray3)).toBe("0");
    });
    test("returns null if no rows, columns or horizontal lines have been completed",  () =>{
        const gameArray = [
                            ["X", "0", "X"],
                            ["0", null, "0"],
                            ["X", null, "0"]
                        ];
        const gameArray1 = [
            [null, "X", null],
            ["0", null, "0"],
            ["0", "0", "X"]
        ];
        expect(findWinner(gameArray)).toBe(null);
        expect(findWinner(gameArray1)).toBe(null);
    });
    test("returns null if the array contains values that are not '0','X' or null",  () =>{
        const gameArray = [
                            ["X0", "0", "X"],
                            ["0", "", "0"],
                            ["X", null, 123]
                        ];
        const gameArray1 = [
            [27, "X", null],
            ["0", false, "0"],
            ["0", "0", "X"]
        ];
        const gameArray2 = [
            ["X0X", "X", null],
            ["0X", {x:0,0:0}, "0"],
            ["0", "0", "X"]
        ];
        const gameArray3 = [
            ["X0X", "X0", "XXXX"],
            ["0X", "0", 0],
            ["x0", "0", "X"]
        ];
        
        expect(findWinner(gameArray)).toBe(null);
        expect(findWinner(gameArray1)).toBe(null);
        expect(findWinner(gameArray2)).toBe(null);
        expect(findWinner(gameArray3)).toBe(null);
    });
    test("returns null if the array contains lowercase 'x' values instead of 'X'",  () =>{
        // lowercase x is not permitted
        const gameArray = [
            ["x", "x", "x"],
            ["x", "0", 0],
            ["x", "0", "x"]
        ];
        expect(findWinner(gameArray)).toBe(null);
    });
    test("returns null if a row, column or horizonal containing all nulls is present",  () =>{
        // vertical row of null values
        const gameArray = [
                            ["X", null, "X"],
                            ["0", null, "0"],
                            ["X", null, "0"]
                        ];
        // horizontal row of null values
        const gameArray1 = [
            [null, "X", null],
            [null, null, null],
            ["0", "0", "X"]
        ];
        // left to right diagonal line of null values
        const gameArray2 = [
            [null, null, "0"],
            ["0", null, "0"],
            ["0", "0", null]
        ];
        // right to left diagonal line of null values
        const gameArray3 = [
            [null, "0", null],
            ["0", null, "0"],
            [null, "0", "X"]
        ];
        expect(findWinner(gameArray)).toBe(null);
        expect(findWinner(gameArray1)).toBe(null);
        expect(findWinner(gameArray2)).toBe(null);
        expect(findWinner(gameArray3)).toBe(null);
    });
    test("returns null if the whole array is full of null values",  () =>{
        const gameArray = [
                            [null, null, null],
                            [null, null, null],
                            [null, null, null]
                        ];
        
        expect(findWinner(gameArray)).toBe(null);
    });
    
    // error message testing
    test(
        "returns an error message if no board array is supplied"
        , () => {
        expect(() => { findWinner();}).toThrow("board is required");   
    });
    test(
        "returns an error message if board is not an array"
        , () => {
        expect(() => { findWinner("X","0","X");}).toThrow("board array is required"); 
        expect(() => { findWinner({X:"X",0:"0"});}).toThrow("board array is required");  
        expect(() => { findWinner(false);}).toThrow("board array is required");   
    });
    test("returns error message if a 3 x 3 array is not supplied",  () =>{
        // board is blank
        const gameArray = [];  
        // board is a 4 x 4 array - too large
        const gameArray1 = [
            [null, "X", null, "X"],
            ["X", null, "0",null],
            ["0", "0","0", "0"],
            ["X", "0","0", "X"]
        ];
        // board is a 2 x 2 array - too small
        const gameArray2 = [
            ["0","0"],
            ["X", null],
        ];   
        // one array element contains more than 3 items
        const gameArray3 = [
            ["0","0","X"],
            ["X", null,"0","X"],
            ["X","0","0"]
        ];   
        // the length of the array is too long
        const gameArray4 = [
            ["0","0","X"],
            ["0", null,"0"],
            ["0","X","X"],
            ["0","X","0"]
        ];   
        expect(() => { findWinner(gameArray);}).toThrow("invalid board array size");
        expect(() => { findWinner(gameArray1);}).toThrow("invalid board array size");
        expect(() => { findWinner(gameArray2);}).toThrow("invalid board array size");
        expect(() => { findWinner(gameArray3);}).toThrow("invalid board array size");
        expect(() => { findWinner(gameArray4);}).toThrow("invalid board array size");
    });
});