const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    
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
        }).toThrow("date string is required in the formatt 'YYYY-MM-DD'");
        expect(() => {
            getScreentimeAlertList(userList,{date: "2019-05-02"});
        }).toThrow("date string is required in the formatt 'YYYY-MM-DD'");
        
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
describe.only("hexToRGB",() =>{

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
        "returns an error message if the a string is not provided"
        , () => {
        expect(() => {
        hexToRGB(0x1B1256A);
        }).toThrow("hexadecimal string required in format '#F3A56D'");
        expect(() => {
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
