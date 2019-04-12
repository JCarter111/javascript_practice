function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  // return any numbers in the nums array
  // that are less than 1 e.g. decimals or negative numbers
  // use for loop to test each number in nums
  // if statement to test whether each number less than 1
  // returned numbers appear in the same order that they
  // appeared in in the nums array
  // define a return array to store the small numbers
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    // if a small number (<1) is located add
    // the number to the return array
    if (nums[i] < 1) smallNums.push(nums[i]);
  }
  // return the small numbers array
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  // return any names in names where the first letter in the
  // item matches char
  // use for loop to check the first character of each
  // name in the names array
  // returned names appear in the same order as they appear 
  // in the names array
  // Assumed that names in the names array will begin
  // with capital letter 
  // The search for char is case sensitive
  // e.g if char = "S", any names beginning "s" would not
  // be returned. 
  // define return array to store matched names
  const matchNames = [];
  for (let i = 0; i < names.length; i++) {
    // if the current name begins with char add the
    // name to the return array
    if (names[i].charAt(0) === char) matchNames.push(names[i]);
  }
  // return array of names with first letter matching char
  return matchNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  // return any strings in the words array that begin
  // with "to" 
  // Note: "to" in the first two characters of the string
  // only
  // use for loop to check the first 2 characters in each
  // string in the words array
  // returned strings appear in the same order as they appear
  // in the words array
  // have assumed that strings are lowercase and search
  // for "to" in this function is case sensitive 
  // e.g. strings beginning "To" or "TO" not returned
  // checking the string contents could use slice
  // or could try startWith method for a string
  // create return array to store the verbs
  // search for "to " to avoid selecting strings starting 
  // with a first word such as "touch"
  const verbsArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) verbsArr.push(words[i]);
    //if (words[i].slice(0,3) === "to ") verbsArr.push(words[i]);
  }
  // return array of verbs
  return verbsArr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  // select the integers in the nums array and 
  // return these in a new array
  // Note: if an integer is repeated in nums
  // the integer should be repeated in the return 
  // array.
  // Note: no sorting of the integers is required
  // need a test to check number in nums is an integer
  // use for loops
  const intArr = [];
  for (let i = 0; i < nums.length; i++) {
    // if an integer is located in nums[i]
    // add the integer to the return array
    if (Number.isInteger(nums[i])) intArr.push(nums[i]);
  }
  // return array of integers
  return intArr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  // return the city display name for each user 
  // in the users array
  // Note: the same display name can be listed 
  // more than once in the return array
  // Note: the city names are returned in the order
  // in which they appear in users i.e. not sorted
  // alphabetically
  // use for loops to check each city in the 
  // array - need to use data.city.displayName for 
  // each user
  // of user objects
  // create a return array to store city display names
  const cityDispNameArr = [];
  for (let i = 0; i < users.length; i++) {
    // check that displayName exists
    if (users[i].data.city.hasOwnProperty("displayName")) {
      cityDispNameArr.push(users[i].data.city.displayName);
    }
  }
  // return the array of city display names
  return cityDispNameArr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  // Math.pow(number, 0.5) can be used to find
  // square root of each number in the nums array
  // Math.sqrt - clearer in the code
  // round the results to 2 decimal places
  // use for loop to loop through nums array
  // Note: assuming that nums only has positive
  // numbers - square root functions above would
  // return NaN for a negative number
  const sqrRootArr = [];
  let sqrRootNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    // find the square root of the current number in the array
    // round the square root to two decimal places
    sqrRootNumber = Math.round(Math.sqrt(nums[i]) * 100) / 100;
    sqrRootArr.push(sqrRootNumber);
  }
  // return the square root array
  return sqrRootArr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  // array of sentences, retain only those sentences
  // containing the specified text
  // search for presence of string in array element
  // search must not be case sensitive
  // use for loops  
  // for each element in the sentences array, split the
  // string into each word, convert each word to lowercase
  // for non case sensitive matching with str
  // if a match is found between str and one of the words
  // add the current sentence to the return array

  // create return array of strings which contain str
  const containsStrArr = [];

  for (let i = 0; i < sentences.length; i++) {
    // convert each word in the sentence to lower case 
    // for non case sensitive matching
    // if str is located in the current sentence add the
    // sentence to the return array
    if (sentences[i].toLowerCase().includes(str)) {
      containsStrArr.push(sentences[i]);
    }
  }
  // return the array of sentences with str in them
  return containsStrArr;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  // for each triangle in the triangles array
  // determine the longest side
  // use for loops to find the longest sides
  // nested for loops - one loop for triangles array
  // one loop for the arrays of sides for each 
  // triangle
  // create a return array to store the longest side
  // of each triangle
  const longestSides = [];
  // loop through each triangle in the triangles
  // array
  for (let i = 0; i < triangles.length; i++) {
    // create a number to store the longest side
    // for each triangle
    let longestSide = 0;
    // reset the triangle sides array to the 
    // array of sides for the current triangle
    for (let j = 0; j < triangles[i].length; j++) {
      if (triangles[i][j] > longestSide) {
        longestSide = triangles[i][j];
      }
    }
    // add the longest side of the current triangle
    // to the return array
    longestSides.push(longestSide);
  }
  // return the array of longestSides
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
