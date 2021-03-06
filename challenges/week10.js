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
  // check that users is an array - can check for object
  if (!Array.isArray(users)) throw new Error("users array is required");
  // check that date is a string
  if (typeof date !== "string") 
    throw new Error("date string is required in the format 'YYYY-MM-DD'");
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


  // week 11 homework feedback 
  // write a function within the getScreentimeAlertList
  // to locate records that match the date and find total
  // usage
  const checkUserUsage = (user,date) => {
    // rework following Week 10 homework comments
    // set sum of current user's usage to zero
    let sumUserUsage = 0;
    // use find to locate an object in the screenTime
    // array that has a date value matching the 
    // date supplied to the function
    // check for date match for the current user
      const screenTimeObj = 
      user.screenTime.find(dateItem => dateItem.date === date);  
      // if a date match has been found screenTimeObj contains
      // the screenTime object with the matching date
      // if the date is not found screenTimeObj will by undefined
      if (screenTimeObj !== undefined){
        // screenTimeObj located matching the date
        // add up usage time
        // sum usage values of an object using for let loop
        for (let key in screenTimeObj.usage) {
          sumUserUsage += screenTimeObj.usage[key];
        } 
        if (sumUserUsage > 100) {
          // usage time is greater than 100, return true
          return true;
        } else {
          // usage time is less than 100, return false
          return false;
        }
      }  else {
      // not date match found, return false
        return false;
      }

    };
  // loop through each user in the users array
  users.forEach(item => {
    
    // check that user has a screenTime property
    if (item.hasOwnProperty("screenTime")) {
      // if the screenTime property is present, call function
      // checkUserUsage to determine whether the user has
      // a usage property on the specified date and whether
      // their usage is greater than 100 mins on that date
      if (checkUserUsage(item,date)) {
        usersUsageGT100.push(item.username);
      }
    }
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
  // split the hexStr into 3 strings of 2 characters
  // store these in an array
  // convert each hexadecimal string to decimal
  // value
  // hexadecimal digits A, B, C, D, E, F can
  // also be written in lowercase
  // return string in the format rgb(255,17,51)
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== "string") 
    throw new Error("hexadecimal string required in format '#F3A56D'");
  
  let hexToConvert = "";
  // remove leading # if this is present
  if (hexStr.charAt(0)==="#") {
      hexToConvert = hexStr.slice(1);
  } else {
      hexToConvert = hexStr;
  }
  // replace any characters in the string  that are
  // not 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F or a,b,c,d,e,f
  hexToConvert = hexToConvert.replace(/[^a-f0-9]/gi,'');
  // if the remaining string contains less than or more than 6 characters the 
  // string is invalid
  if (hexToConvert.length !== 6) throw new Error("hexadecimal string required in format '#F3A56D'");
  
  // split the hexStr into 3 strings of 2 characters
  // store these in an array
  const hexConversion = [];
  for (let i=0; i< hexToConvert.length-1; i+=2) {
   hexConversion.push(hexToConvert.slice(i,i+2));
  }
  // create an array to store the 3 converted decimal values
  const decConversion = [];

  
  // convert each 2 digit hexadecimal value to decimal values
  // reworking following Week10 homework feedback
  // much easier to use parseInt(string, radix)
  // to convert from base 16 string to base 10
  // e.g. parseInt("FF",16) = 15

  hexConversion.forEach(item => {
    // convert each 2 digit hexadecimal value to a decimal value
    // and store in the decConversion array
    decConversion.push(parseInt(item,16)); 
    
  });
  
  // return rgb values as a string in the format
  // "rgb(255,16,15)"
  return (`rgb(${decConversion[0]},${decConversion[1]},${decConversion[2]})`);
    
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * X must be uppercase
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  // check that board is an array 
  if (!Array.isArray(board)) throw new Error("board array is required");

  // check that board has 3 elements, and each is an array containing 3 items

  // check that the length of the array is 3
  if (board.length !==3) throw new Error ("invalid board array size")

  // check that each element in the array has 3 items
  board.forEach(item => {
    if (item.length !==3) throw new Error("invalid board array size")
  })

  // check array values horizontally, vertically and diagonally
  
  // rows
  //check for horizonal lines which are either all zeros
  // or all X
  // X must be uppercase
  // use object to store frequencies of zeros and Xs
  // if a complete row is found (frequency of either 0 or X is 3)
  // exit, without working through the remaining code
  // and return the winner
  

  // diagonal 1 - left to right
  // check board[0][0], board[1][1], board[2][2]
  // use an object to store frequencies of zeros and Xs
  // if a complete diagonal row is found (frequency of 0 or X is 3)
  // exit, without continuing through the code and return the winner

  // in both rows and diagonal 1
  // need to use for for loops rather than forEach
  // so that the loops can be exited as soon
  // as a winner is located

  // can use the same loop for row and diagonal 1 checking
  
  // object to store diagonal 1 frequencies
  let freqDiagonal1 = {"0":0, "X":0};

  for (let i=0; i<board.length; i++) {
    
    // create object to store frequencies of 
    // of zeros and Xs
    let frequencies = {"0":0, "X":0};
     for (let j=0; j<board[i].length; j++) {
       // find frequency of 0 and X in the current row
      if (board[i][j] ==="0" || board[i][j] ==="X") {
          frequencies[board[i][j]]+=1;
      }
     }
    // if the final value of the row frequencies
    // for the zeros or the Xs is 3
    // return the winner 
    if (frequencies["0"]===3) {
        return "0";
    } else if (frequencies["X"]===3) {
       return "X";
    }
    // count diagonal 1 values
    // check each board[i][i] value only
    if (board[i][i]==="0" || board[i][i] === "X"){
      freqDiagonal1[board[i][i]] +=1;  
    }
  }

  // diagonal 1 - left to right
  // if the final value of the freqDiagonal1 frequencies
  // for the zeros or the Xs is 3
  // return the winner 
  if (freqDiagonal1["0"]===3) {
      return "0";
  } else if (freqDiagonal1["X"]===3) {
     return "X";
  }

  // columns
  // columns

  let freqVert1={"0": 0, "X": 0};
  let freqVert2={"0": 0, "X": 0};
  let freqVert3={"0": 0, "X": 0};

  for (let i=0; i<board.length; i++){
    // check first column
    if (board[i][0]==="0"|| board[i][0]==="X" ) {
      freqVert1[board[i][0]]+=1;
    }
    if (board[i][1]==="0"|| board[i][1]==="X") {
      freqVert2[board[i][1]]+=1;
    }
    if (board[i][2]==="0"|| board[i][2]==="X") {
      freqVert3[board[i][2]]+=1;
    }

    if (freqVert1["0"] === 3 || freqVert2["0"] ===3 || freqVert3["0"] === 3) {
      return "0";
    } else if (freqVert1["X"] === 3 || freqVert2["X"] === 3 || freqVert3["X"] === 3) {
      return "X";
    }
  }

  // diagonal 2 - right to left
  // check board[0][2], board[1][1], board[2][0]
  let freqDiagonal2={"0":0,"X":0};

  if (board[0][2]==="0"|| board[0][2]==="X"){
    freqDiagonal2[board[0][2]] +=1;
  }
  if (board[1][1]==="0"|| board[1][1]==="X"){
    freqDiagonal2[board[1][1]] +=1;
  }
  if (board[2][0]==="0"|| board[2][0]==="X"){
    freqDiagonal2[board[2][0]] +=1;
  }

  // if the final value of the freqDiagonal1 frequencies
  // for the zeros or the Xs is 3
  // return the winner 
  if (freqDiagonal2["0"]===3) {
    return "0";
  } else if (freqDiagonal2["X"]===3) {
   return "X";
  }
  // if this point is reached no horizontal, vertical or diagonal
  // winning row has been found, return null
  return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
