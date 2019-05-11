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
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
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
