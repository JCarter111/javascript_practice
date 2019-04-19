function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  // return any numbers in the nums array
  // that are less than 1 e.g. decimals or negative numbers
  // use filter function
  // if statement to test whether each number less than 1
  // returned numbers appear in the same order that they
  // appeared in in the nums array
  // define a return array to store the small numbers
  const smallNums = nums.filter(function(numberItem) {
    // if a small number (<1) is located 
    // filter the number to the return array
    // homework comments update - return result
    // of numeric comparision, result is Boolean
    // rather than having if...else statement here
    return (numberItem < 1);
  });
  // return the small numbers array
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  // return any names in names where the first letter in the
  // item matches char
  // use filter function to select people in the names array 
  // with the first letter of their name matching char
  // returned names appear in the same order as they appear 
  // in the names array
  // Assumed that names in the names array will begin
  // with capital letter 
  // The search for char is case sensitive
  // e.g if char = "S", any names beginning "s" would not
  // be returned. 
  // define return array to store matched names

   const matchNames = names.filter (function(nameItem) {
    // if the current name begins with char add the
    // name to the return array
    // homework comments update - return result
    // of character comparision, result is Boolean
    // rather than having if...else statement here
      return (nameItem.charAt(0) === char) 
  });
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
  // use filter function to select only those strings 
  // in the array that start with "to "
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
  const verbsArr = words.filter(function(wordItem) {
    // homework comments update - return result
    // of string character comparision, result is Boolean
    // rather than having if...else statement here
    return (wordItem.startsWith("to "));
  });
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
  // use a filter function to select integers
  // in the array of numbers
  const intArr = nums.filter(function(numsItem) {
    // if an integer is located in nums[i]
    // add the integer to the return array
    // homework comments update - return result
    // of character comparision, result is Boolean
    // rather than having if...else statement here
    return (Number.isInteger(numsItem));
  });
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
  // use map to select each city in the 
  // array - need to use data.city.displayName for 
  // each user
  // of user objects
  // create a return array to store city display names
  const cityDispNameArr = users.map(function(userItem) {
    // check that displayName exists
    if (userItem.data.city.hasOwnProperty("displayName")) {
      return userItem.data.city.displayName;
    }
  });
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
  // use a map function to calculate 
  // square root of each item in nums array
  // and add the square roots to the return array
  // Note: assuming that nums only has positive
  // numbers - square root functions above would
  // return NaN for a negative number
  const sqrRootArr = nums.map(function (numsItem) {
    // find the square root of the current number in the array
    // round the square root to two decimal places
    const sqrRootNumber = Math.round(Math.sqrt(numsItem) * 100) / 100;
    return sqrRootNumber;
  });
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
  // include sentences where str is part of a longer
  // word
  // include sentences where str appears twice or more
  // in the same sentence
  // search must not be case sensitive
  // use a filter function to select sentences from the
  // sentences array which contain str 
  // for each element in the sentences array
  // convert each word to lowercase
  // for non case sensitive matching with str
  // if a match is found between str and one of the words
  // in the sentence
  // add the current sentence to the return array

  // create return array of strings which contain str
  const containsStrArr = sentences.filter(function(sentenceItem) {
    // convert each word in the sentence to lower case 
    // for non case sensitive matching
    // if str is located in the current sentence add the
    // sentence to the return array
    // use filter function to select sentences in the
    // array
    // homework comments update - return result
    // of string comparision, result is Boolean
    // rather than having if...else statement here
    return (sentenceItem.toLowerCase().includes(str));
  });
  // return the array of sentences with str in them
  return containsStrArr;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  // for each triangle in the triangles array
  // determine the longest side
  // use map function on triangles array
  // to create a modified return array - longestSides
  // same number of items in the array but modified
  // to only contain the longest side of each triangle
  // as a number in the triangles array
  const longestSides = triangles.map (function (sideArr) {
    // numerically sort the values in the array of sides
    // for each triangle array element
      sideArr.sort((aValue,bValue) => aValue - bValue);
      // store the value of the longest side
       return sideArr[2];  
  });
  // return the array of longestSides
  return longestSides;
  //console.log(longestSides);
  //console.log(longestSides);
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
