/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr) throw new Error("arr is required");
  // check variable type of arr, if arr is not an array
  // create an error message
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
  if (typeof str !=="string") throw new Error("a string is required");
  // loop through string, checking each string 
  // character, if any character is located that
  // is not equal to "C", "G", "T", "A"
  // return false and exit the loop without
  // checking any further string contents
  // if the whole loop of the string length
  // is completed without returning false,
  // return true as the string must only contain
  // "C", "G", "T", "A"
  // these letters must be in uppercase
  for (let i=0; i<str.length;i++){
    if (str.charAt(i)!=="C" && str.charAt(i)!=="G"&& 
      str.charAt(i)!=="T"&& str.charAt(i)!=="A") return false;
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
  if (typeof str !=="string") throw new Error("a string is required");
  //call isValidDNA to validate the str
  // if the string is not a valid DNA sequence
  // show an error message and exit this function
  if(!isValidDNA(str)) throw new Error("valid DNA sequence is required");
  // initialise string to contain complimentary
  // DNA base sequence
  let strComplementaryDNA = "";
  // loop through DNA string
  str.split("").forEach(item => {
    // use switch to replace each
    // character with the complimentary base
    switch (item) {
      case "G":
        strComplementaryDNA += "C";
        break;
      case "C":
        strComplementaryDNA += "G";
        break;
      case "T":
        strComplementaryDNA += "A";
        break;
      case "A":
        strComplementaryDNA += "T";
        break;
    }
  });
  //return the complimentary DNA base string
  return strComplementaryDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  // return an error message if n is not provided
  if (!n) throw new Error("n is required");
  // return an error message if n is not a number
  if (typeof n !=="number") throw new Error("a number is required");
  // prime numbers are always positive, integer values
  // that are greater than 1
  // return false if n is one or not a positive value
  // return false if n is not an integer
  if (n<=1 || !Number.isInteger(n)) return false;
  // a prime number is only divisible by 1 and by itself
  // loop through all numbers from 2 up to n - 1,
  // checking whether n is divisible by any of these 
  // numbers
  // if n is divisible by any number in the loop, return
  // false and exit the loop after the first number
  // that n is divisible by is located
  for (let i=2;i<n;i++){
    if (n%i===0) return false;
  }
  // end of the loop reached, return true
  // n must be a prime number to reach this stage
  // if n = 2 the loop above is not executed and 
  // true is returned below
  return true;
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
  // create an error message if n is not supplied
  if (!n) throw new Error("n is required");
  // create an error message if fill is not supplied
  if (!fill) throw new Error("fill is required");
  // create an error message if n is not a number
  if (typeof n !=="number") throw new Error("a number is required");
  // initialise a return array, arrMatrix
  const arrMatrix = [];
  // initialise an array to hold each element in arrMatrix
  const arrElement = [];
  // create an array containing each array element
  // this contains fill, n times
  // fill can be any variable type
  // string, number, object, boolean
  for (let i=0; i<n; i++) {
    arrElement.push(fill);
  }
  // add arrElement to the main array, arrMatrix
  // n times
  for (let i=0; i<n; i++){
      arrMatrix.push(arrElement);
  }
  // return the final array
  return arrMatrix;
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
  // check variable type of staff, if staff is not an array
  // create an error message
  if (!Array.isArray(staff)) throw new Error("a staff array is required");
  // check the variable type of day
  // create an error message if the type is not string
  if (typeof day !=="string") throw new Error("a day string is required");
  // if there are less than 3 staff in staff
  // return false because there will never be
  // enough staff to provide full cover on any day
  if (staff.length <3) return false;
  // loop through the staff array checking whether
  // day is in the rota of each staff member
  // count total number of times that day is located

  // possibly also count total number of staff to 
  // ensure that there are 3 or more staff
  // avoids error if one member of staff had the same
  // day twice in their rota
  let iCoverLocated = 0;
  //const staffFrequencies = {};

  staff.forEach(item =>{
    item.rota.forEach(rotaItem =>{
      if (rotaItem === day) {
        iCoverLocated += 1;
       // if (staffFrequencies[item.name] === undefined) {
       //   staffFrequencies[item.name]= 1;
       // } else {
       //   staffFrequencies[item.name] +=1;
       // }
      }
    });
  });
  return (iCoverLocated >= 3);
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
