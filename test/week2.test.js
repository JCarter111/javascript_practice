const {
  getFillings,
  isFromManchester,
  getBusNumbers,
  countSheep,
  hasMPostCode
} = require("../challenges/week2");

describe("getFillings", () => {
  test("returns the fillings of a sandwich", () => {
    const sandwich = {
      bread: "Sourdough",
      fillings: ["brie", "relish", "lettuce"],
      accompaniment: "crisps"
    };
    expect(getFillings(sandwich)).toEqual(["brie", "relish", "lettuce"]);

    const sandwich2 = {
      bread: "Rye",
      fillings: ["smoked salmon", "dill"],
      accompaniment: "wedges"
    };

    expect(getFillings(sandwich2)).toEqual(["smoked salmon", "dill"]);
    // does function produce error message if undefined sandwich object
    // provided
    //Note: from Week 1 advice
    //need to wrap getFillings expected output into a function
    // to avoid breaking the programme with the error test 
    expect(() => {
      getFillings();
    }).toThrow("ingredients is required");
  });
});

describe("isFromManchester", () => {
  test("returns true if the person is from Manchester", () => {
    const person = {
      name: "Mohammed",
      city: "Manchester",
      age: 23
    };
    expect(isFromManchester(person)).toBe(true);
  });

  test("returns false if the person is not Manchester", () => {
    const person = {
      name: "Anisa",
      city: "Leeds",
      age: 39
    };
    expect(isFromManchester(person)).toBe(false);
  });
  // additional tests
  // test for error message if person is undefined
  test("returns error message if undefined person", () => {
    expect(() => {
      isFromManchester();
    }).toThrow("person is required");
  });
  // test to make sure false returned if city property does not exist
  test("function returns false if city property not defined", () => {
    const person = {
      name: "Percy",
      age: 51
    };
    expect(isFromManchester(person)).toBe(false);
  });
});

describe("getBusNumbers", () => {
  // A bus can hold 40 people. This function should return how many buses are required for the number of people
  test("returns 1 if all the people fit in 1 bus", () => {
    expect(getBusNumbers(1)).toBe(1);
    expect(getBusNumbers(10)).toBe(1);
    expect(getBusNumbers(25)).toBe(1);
    expect(getBusNumbers(39)).toBe(1);
    expect(getBusNumbers(40)).toBe(1);
  });

  test("returns 2 if 2 buses are required", () => {
    expect(getBusNumbers(41)).toBe(2);
    expect(getBusNumbers(50)).toBe(2);
    expect(getBusNumbers(55)).toBe(2);
    expect(getBusNumbers(80)).toBe(2);
  });

  test("returns 3 if 3 buses are required", () => {
    expect(getBusNumbers(81)).toBe(3);
    expect(getBusNumbers(85)).toBe(3);
    expect(getBusNumbers(100)).toBe(3);
    expect(getBusNumbers(120)).toBe(3);
  });

  test("returns the correct number of buses for larger numbers of people", () => {
    expect(getBusNumbers(43728)).toBe(1094);
  });
  test("returns the correct number of buses if number provided as string", () => {
    expect(getBusNumbers("123")).toBe(4);
  });
  // test error message if no number of people provided
  test("returns error message if number of people not supplied", () => {
    expect(() => {
      getBusNumbers();
    }).toThrow("people is required");
  });
  // test invalid number provided
  test("returns error message if non-numeric number of people supplied", () => {
    expect(() => {
      getBusNumbers("abc");
    }).toThrow("number is required");
  });
});

describe("countSheep", () => {
  test("returns 0 if there are 0 sheep in the array", () => {
    const arr = ["dog", "badger", "dog", "dog", "chicken"];
    expect(countSheep(arr)).toBe(0);
  });

  test("returns 1 if there is 1 sheep in the array", () => {
    const arr = ["dog", "sheep", "dog", "dog", "chicken"];
    expect(countSheep(arr)).toBe(1);
  });

  test("returns 2 if there are 2 sheep in the array", () => {
    const arr = ["dog", "sheep", "dog", "sheep", "chicken"];
    expect(countSheep(arr)).toBe(2);
  });

  test("returns 5 if there are 5 sheep in the array", () => {
    const arr = [
      "dog",
      "sheep",
      "dog",
      "sheep",
      "chicken",
      "sheep",
      "hare",
      "sheep",
      "sheep"
    ];
    expect(countSheep(arr)).toBe(5);
  });
  // test array with a mix of variable types
  test("returns 2 if there are 2 sheep in the mixed array", () => {
    const arr = [123, "sheep", 48, "sheep", "chicken"];
    expect(countSheep(arr)).toBe(2);
  });
  // test error message if array not provided
  test("returns error message if array not supplied", () => {
    expect(() => {
      countSheep();
    }).toThrow("arr is required");
  });
});

describe("hasMPostCode", () => {
  test("returns true if the person has a postcode starting with M", () => {
    const person = {
      name: "Mohammed",
      age: 23,
      address: {
        line1: "1a Pool Road",
        city: "Manchester",
        postCode: "M16 8DR"
      }
    };
    expect(hasMPostCode(person)).toBe(true);
  });

  test("returns false if the person does not have a postcode starting with M", () => {
    const person = {
      name: "Anisa",
      age: 39,
      address: {
        line1: "44 Bridge Street",
        city: "Leeds",
        postCode: "LS11 6BT"
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });

  test("returns false if the postcode starts with M but is not for Manchester", () => {
    const person = {
      name: "Jahin",
      age: 55,
      address: {
        line1: "11 Stone Street",
        city: "Maidstone",
        postCode: "ME20 5BR"
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });
  // test blank postcode
  test("returns false if the postcode is blank", () => {
    const person = {
      name: "Louise",
      age: 34,
      address: {
        line1: "10a The Bridges",
        city: "Sheffield",
        postCode: ""
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });
  // test postcode missing from object - not Manchester address
  test("returns false if the postcode object missing", () => {
    const person = {
      name: "Carl",
      age: 29,
      address: {
        line1: "41 Meyer Lane",
        city: "Nottingham",
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });
  // test error message
  test("returns error message if person not supplied", () => {
    expect(() => {
      hasMPostCode();
    }).toThrow("person is required");
  });
});
