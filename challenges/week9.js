/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an array is required");
  //loop through array - use forEach
  // and test whether each value is divisible 
  // by either 3 or 5
  // if this is true add value to a variable
  // which finds the total sum of the values

  // this function returns a value of 0 if the
  // array passed to the function is empty or
  // contains no numbers divisible by either 
  // 3 or 5.

  // initially set sum of values divisible by 3 or 5 to zero
  let sumThreeFive = 0;
  arr.forEach(function(item){
      if (item%3===0 || item%5===0) sumThreeFive += item;
  });

  return sumThreeFive;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (!str) throw new Error("str is required");
  if (!str) throw new Error("str is required");
  // loop through string, checking each string 
  // character, if any character is located that
  // is not equal to "C", "G", "T", "A"
  // return false and exit the loop without
  // checking any further string contents
  // if the whole loop of the string length
  // is completed without returning false,
  // return true as the string must only contain
  // "C", "G", "T", "A"
  for (let i=0; i<str.length;i++){
    if (str[i]!=="C" && str[i]!=="G"&& str[i]!=="T"&& str[i]!=="A") return false;
  }
  return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "CAGT".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (!str) throw new Error("str is required");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (!n) throw new Error("n is required");
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (!n) throw new Error("n is required");
  if (!fill) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (!staff) throw new Error("staff is required");
  if (!day) throw new Error("day is required");
  if (staff.length===0) {
    return false;
  }
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
