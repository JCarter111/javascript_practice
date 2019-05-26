/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  // validation to get prevent any number that is not 
  // an integer
  if(!Number.isInteger(n)) throw new Error("an integer is required")
  // convert number to string
  // split string into an array
  // loop through the array converting each item to 
  // a number and summing each value
  // variable to sum each integer in the number
  let iNumberSum = 0;
  //convert the number to an array of single numbers
  // stored in the array as strings
  // if n is negative ignore the minus sign by
  // converting n to a positive integer
  Math.abs(n).toString().split("").forEach(item =>{
    //sum the value of each digit in the array
    // 
    iNumberSum += Number(item);
  });
  return iNumberSum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * if end is greater than start an ascending array of numbers is provided.
 * if end is less than start a descending array of numbers is provided.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * Step must be a positive integer 1 or greater.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  // generate an error message if either start or end are non numeric
  if (typeof start !== "number") throw new Error("start must be a number");
  if (typeof end !== "number") throw new Error("end must be a number");

  // initialise array to hold return values
  const rangeArray = [];

  // set the default arrayStep value as 1
  let arrayStep = 1;

  // if a step value has been passed to the function
  // set the arrayStep value to the step value
  // step must be an integer 

  if (step !== undefined) {
    if (!Number.isInteger(step)) {
      throw new Error("step must be a positive integer, or not provided");
    } else {
      arrayStep = step;
    }   
  }
  
  // if a step of zero has been provided, throw an error
  if (arrayStep < 1 ) 
      throw new Error("step must be an integer >= 1, or not provided");

  // check the start and end values
  // if the end value is greater than the start value 
  // create an array of values, starting with start
  // and increasing by the step value
  // stop adding values to the array once the value exceeds end
  // end value may not be included in the array
  // e.g. start = 2, end = 9, step = 4
  // array values [2,6]

  // if the end value is less than the start value
  // create any array of values starting with end and decreasing by the step value
  // stop adding values to the array once the value is below start
  // end value may not be included in the array
  // e.g. start = 5, end = 1, step = 3
  // array values [5,2]
   
  if (end >= start) {
    // end value greater than start, increasing value return array is required
    // starting with the start value
    // increasing loop required
    for (let i = start; i <= end; i += arrayStep) {
      rangeArray.push(i);
    }
    
  // end value is less than the start value 
  // decreasing value return array is required
  // starting with start value
  // decreasing loop required
  } else {
    for (let i = start; i >=end; i -= arrayStep) {
      rangeArray.push(i);
    }
  }

  return rangeArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

// check each user in the array of users
// compare the date supplied to the function with the
// dates contained in the from the objects in each users
// screenTime array 
// if a match is located add up the time in each element in the usage 
// object in the screenTime array of the user
// if the total usage time is greater than 100 minutes
// return the username of the user in an array of usernames

// create array to hold usernames of users with more than 100 minutes usage time
const usersUsageGT100 = [];

// loop through each user in the users array
users.forEach(item => {
    // set sum of current user's usage to zero
    let sumUserUsage = 0;
    // loop through each date in the user's screenTime array
    item.screenTime.forEach (dateItem => {
      // compare the current date in the user's screenTime array to date
       if (dateItem.date === date) {
         // date match found for the current user
         // add up usage time
         // sum usage values of an object using for let loop
         for (let key in dateItem.usage) {
          sumUserUsage += dateItem.usage[key];
         }
       }
       
    });
    // if the sum of the usage on date is greater than 100
    // add the user's username to the return array
    if (sumUserUsage > 100) usersUsageGT100.push(item.username);  
});
return usersUsageGT100;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  // check array values horizontally, vertically and diagonally
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
