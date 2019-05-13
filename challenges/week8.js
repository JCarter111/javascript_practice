const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  //find next number
  // return the next number after n in the array
  // find number of array element where n is located
  // then increase this by one to return next value.
  // if n is not found in the array return null
  // if n is found more than once return the  
  // number after the first instance only - a standard loop
  // might be better for this than a forEach, 
  // map or filter because the standard loop can be 
  // exited using a return statement
  // once the first instance of n is found. 
  // forEach, map, filter will carry on looping through 
  // all the values in the array and will return the 
  // number after the last instance of n
  // in the array if n
  // occurs more than once

  // the loop below does not need to check the final 
  // value in the array because there is nothing
  // after this final value to return,
  // can execute the return statement after the loop
  // instead
  // if the return statement after the loop is reached,
  // then null can be returned because either n
  // was not found in the array or n is in the 
  // last element of the array and there is nothing 
  // after n to return 

  for (let i=0; i<(nums.length -1); i++) {
    // if n is located in the array
    // return the next number in the array and 
    // exit the loop
    if (nums[i] === n) return nums[i+1];
  }
  // return null if the last iteration of the loop has
  // been completed i.e. there is no number after n to return
  // null will also be returned if this point
  // has been reached and n has 
  // not been found in all but the last array element
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  // return an object with 2 elements
  // 1 - number of one digits in the string
  // 0 - number of zero digits in the string
  // could split string into an array an use forEach
  // or regular loop through string using charAt
  // to test each character in the string
  // for the presence of "1" or "0"
  // have checked for both "1" or "0"
  // without assuming that every digit in
  // the string contains these values
  // used forEach below to practice
  // function arrow coding
  
  let iOneCounter = 0;
  let iZeroCounter = 0;

  // split the string into an array
  // and test each element in the array
  str.split("").forEach(item => {
    if (item === "1") { 
      iOneCounter += 1;
    } else if (item === "0") {
      iZeroCounter += 1;
    }
});
  // return an object
  return {1: iOneCounter, 0:iZeroCounter};
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  // number as input to the function
  // could loop through number starting at the end and counting down
  // or split into array
  // might need to convert the reversed values
  // back to a number
  let numberSplit = parseInt(n.toString().split("").reverse().join(""));  
  return numberSplit;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  // forEach loops nested
  // one for outer array arrs
  // one for each array within arrs
  // add all the values together
  // in variable used to store sum of
  // all values
  let iTotalSum = 0;
  arrs.forEach(arrsItem =>  {
    arrsItem.forEach(secondArrayItem =>  {
        iTotalSum = iTotalSum + secondArrayItem;
    });
  });
  return iTotalSum
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  // if array length < 2
  // no action required
  // split array, 
  // keep middle of array
   // add first value to end of the new array
  // use push
  // add last value to start of the new array
  // use unshift

  // if the length of the array is 0,or 1
  // there is no need to change the array
  if (arr.length < 2) return arr;
  // retain the middle values in the array arr
  // by removing first and last values
  const newArr = arr.slice(1,arr.length -1); 
  // add the first value in the array, arr
  // to the start of the new array
    newArr.push(arr[0]);
  // add the last value in array, arr to the
  // start of the new array
    newArr.unshift(arr[arr.length -1]);

  // return the restructured array, newArr
  return newArr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  // each object can have a different number of 
  // properties and the name and data type 
  // of the properties varies
  // use for...in loop to loop through object
  // checking for presence of the search term
  // string in each property
  // some properties are numbers or booleans - do not 
  // need to check these for a string value
  // and trying to convert these to lower case 
  // causes errors
  // could use .includes method to check
  // for the presence of the search term string
  // within each string object in haystack
  // need to have non-case sensitive search
  // convert each item and searchTerm to lowercase
  // before using includes

  // for...in loop to access each property in the haystack object
  for (let key in haystack) {
    // check that the property type is string
    if (typeof (haystack[key]) === "string") {
      // carry out a case-insensitive string comparison
      // and return true if the search term is found within the string property
      // initially used lowercase matching
      // if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) return true;
      // decided to try case-insensitive pattern matching
      // need to supply i as the flag in RegExp constructor
       let patternTerm = new RegExp(searchTerm, "i")
      if (patternTerm.test(haystack[key])) return true; 
    }
    
  }
  // the search term string has not been located, return false
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
