const {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseWordAlt,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
} = require("../challenges/week1");

describe("capitalize", () => {
  test("returns a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("does nothing if the string is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes the first character if the string is a sentence", () => {
    expect(capitalize("the quick fox")).toBe("The quick fox");
  });
  //practice writing tests
  // does function work if empty string is input
  test("test empty string", () => {
    expect(capitalize("")).toBe("");
  });
  // does function work if string with numbers at start is input
  test("test number in first position of string", () => {
    expect(capitalize("123 test")).toBe("123 test");
  });
  // does function work if string with quotation mark at start is input
  test("test quotation mark character in first position of string", () => {
    expect(capitalize("' test")).toBe("' test");
  });
  // does function work if string with other characters e.g. £ at start is input
  test("test non standard characters in first position of string", () => {
    expect(capitalize("£ test")).toBe("£ test");
  });
  // does function produce error message if undefined word provided
  //Note: need to wrap capitalize expected output into a function
  // to avoid breaking the programme with the error test 
  test("test error message if undefined word provided", () => {
    expect(() => {
      capitalize();
    }).toThrow("word is required");
  });
});

describe("generateInitials", () => {
  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
  });
  // test lowercase firstname, lastname
  test("returns the initials of a lowercase firstname and surname", () => {
    expect(generateInitials("frederic", "bonneville")).toBe("F.B");
  });
  // test undefined firstname
  test("test error message if undefined firstname provided", () => {
    expect(() => {
      generateInitials();
    }).toThrow("firstName is required");
  });
  // test undefined lastname
  test("test error message if undefined lastname provided", () => {
    expect(() => {
      generateInitials("Frederick");
    }).toThrow("lastName is required");
  });
});

describe("addVAT", () => {
  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBe(25);
  });
});

describe("getSalePrice", () => {
  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    //test incorrect here
    // expect(getSalePrice(50, 0)).toBe(0)
    expect(getSalePrice(50, 0)).toBe(50);
  });
  test("reduces a price of 50 by 100%", () => {
    expect(getSalePrice(50, 100)).toBe(0);
  });
  test("negative reduction input", () => {
    expect(getSalePrice(30, -45)).toBe("reduction is less than zero");
  });
});

describe("getMiddleCharacter", () => {
  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });
  // test zero length string
  test("returns zero length string message", () => {
    expect(getMiddleCharacter("")).toBe("string length is zero");
  });
  // test undefined string
  test("test undefined string", () => {
    expect(() => {
      getMiddleCharacter();
    }).toThrow("str is required");
  });
});

describe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });
});
// test reverseWordAlt - using different method for reverseWord function
describe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWordAlt("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWordAlt("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });
});
describe("reverseAllWords", () => {
  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });
  // test empty aray input
  test("handling an empty array", () => {
    expect(reverseAllWords([])).toEqual([]);
  });
  // test undefined array - error message should be produced
  test("test error message if undefined array", () => {
    expect(() => {
      reverseAllWords();
    }).toThrow("words is required");
  });
});

describe("countLinuxUsers", () => {
  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });
  // test empty array, should get count of zero
  test("empty array of users", () => {
    const users = [];
    expect(countLinuxUsers(users)).toBe(0);
  });
  // test undefined array - error message should be produced
  test("test error message if undefined array", () => {
    expect(() => {
      countLinuxUsers();
    }).toThrow("users is required");
  });
});

describe("getMeanScore", () => {
  test.only("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test.only("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });
  // test scores contains non-numeric values
  // non-numeric values not included in mean calculation
  // numeric values included
  test.only("test non-numeric array", () => {
    expect(getMeanScore([24, 44, "abc", "123", "1Xq"])).toBe(34);
  });
  // test no values input
  test.only("test no values", () => {
    expect(getMeanScore([])).toBe(0);
  });
});

describe("simpleFizzBuzz", () => {
  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });
  test("n is non numeric", () => {
    expect(simpleFizzBuzz("a12")).toBe("n is not a number");
  });
});
