const {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
} = require("../challenges/week8");

describe("findNextNumber", () => {
  test("returns the next number after the given number in the array", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
    expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
  });

  test("if the number is not found in the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  test("if the number is found more than once, returns the number after the first instance", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  });

  test("if the number is found in the final index position of the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });

  // test for error message if no array of numbers is provided
  test("returns an error message if nums array is not supplied", () => {
    expect(() => {
      findNextNumber();
    }).toThrow("nums is required");
  });

  // test for error message if no number, n is provided
  test("returns an error message if nums array is not supplied", () => {
    expect(() => {
      findNextNumber([5, 3, 7, 8, 1, 3, 10]);
    }).toThrow("n is required");
  });
});

describe("count1sand0s", () => {
  test("returns an object with the count of 1s and 0s in a string", () => {
    expect(count1sand0s("11000")).toEqual({
      1: 2,
      0: 3
    });

    expect(count1sand0s("0101010111")).toEqual({
      1: 6,
      0: 4
    });

    expect(count1sand0s("1111111")).toEqual({
      1: 7,
      0: 0
    });

    expect(count1sand0s("0111")).toEqual({
      1: 3,
      0: 1
    });
  });
  // test for error message if no number,n, is provided
  test("returns an error message if no string is supplied", () => {
    expect(() => {
      count1sand0s();
    }).toThrow("str is required");
  });
});

describe("reverseNumber", () => {
  test("reverses the digits of a number", () => {
    expect(reverseNumber(5)).toBe(5);
    expect(reverseNumber(104)).toBe(401);
    expect(reverseNumber(12345)).toBe(54321);
    expect(reverseNumber(100)).toBe(1); // No leading 0 necessary
  });
  // test for error message if no number,n, is provided
  test("returns an error message if no number is supplied", () => {
    expect(() => {
      reverseNumber();
    }).toThrow("n is required");
  });
});

describe("sumArrays", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(sumArrays(arrs)).toBe(44);
  });
  // test empty sub arrays
  test("returns the total of the numbers in all sub arrays, handles empty sub arrays", () => {
    const arrs = [[], [6, 3, 1], [1], [],[9, 10], []];
    expect(sumArrays(arrs)).toBe(30);
  });
  // test for error message if the input array, arrs, is not provided
  test("returns an error message if no string is supplied", () => {
    expect(() => {
      sumArrays();
    }).toThrow("arrs is required");
  });
});

describe("arrShift", () => {
  test("returns an array with the first and last items swapped", () => {
    expect(arrShift([1, 2])).toEqual([2, 1]);
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(arrShift([1])).toEqual([1]);
    expect(arrShift([])).toEqual([]);
  });
  // test for error message if the input array, arr is not defined
  test("returns an error message if no string is supplied", () => {
    expect(() => {
      arrShift();
    }).toThrow("arr is required");
  });
});

describe("findNeedle", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(findNeedle(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true
    };
    expect(findNeedle(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(findNeedle(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true
    };
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };

    expect(findNeedle(obj1, "warrington")).toBe(true);
    expect(findNeedle(obj1, "linnmon")).toBe(true);
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
  // test for error message if the haystack object is not provided
  test("returns an error message if no haystack object is provided", () => {
    expect(() => {
      findNeedle();
    }).toThrow("haystack is required");
  });
  // test for error message if the search term is not provided
  test("returns an error message if no search term string is supplied", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(() => {
      findNeedle(obj1);
    }).toThrow("searchTerm is required");
  });
});

describe("getWordFrequencies", () => {
  test("returns the frequencies of each word in a string", () => {
    expect(getWordFrequencies("hello world")).toEqual({
      hello: 1,
      world: 1
    });

    expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
      the: 2,
      cat: 1,
      is: 1,
      hairier: 1,
      than: 1,
      rat: 1
    });

    expect(getWordFrequencies("hello hello hello")).toEqual({
      hello: 3
    });
  });

  test("ignores capitalisation", () => {
    expect(getWordFrequencies("Hello hello hello")).toEqual({
      hello: 3
    });
  });

  test("ignores punctuation", () => {
    // Hint: Google "JavaScript remove special characters from string" to get some ideas!
    expect(
      getWordFrequencies("Hello, hello hello! What have we here?")
    ).toEqual({
      hello: 3,
      what: 1,
      have: 1,
      we: 1,
      here: 1
    });
  });
  // test for error message if the string, str is not provided
  test("returns an error message if no string is provided", () => {
    expect(() => {
      getWordFrequencies();
    }).toThrow("str is required");
  });
  // test for error message if an empty str is not provided
  test("returns an error message if empty string is provided", () => {
    expect(() => {
      getWordFrequencies("");
    }).toThrow("str is required");
  });
  // test for error message if a string with just one space is provided
  test("returns an error message if string with just one space provided", () => {
    expect(() => {
      getWordFrequencies(" ");
    }).toThrow("str is required");
  });
});
