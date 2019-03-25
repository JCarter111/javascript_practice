function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  //convert first letter of word to uppercase and return capitalised word
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  // extract first letter of each name, capitalise and separate by .
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
  
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  // new price = original price * (vatRate + 100)/100
  // round the new price to 2 decimal places because value is pounds and pence
  // tests expect value in 2 dp format e.g 32.95
  return Math.round(100*(originalPrice * ((100 + vatRate)/100)))/100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  if (reduction < 0) {return "reduction is less than zero";}
  return Math.round(100*((100 - reduction)/100)*originalPrice)/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  // if the string length is zero, return message
  if (str.length === 0) {
    return "string length is zero";
  }
  // check whether string length is odd or even
  if (str.length%2 === 1) {
    //odd string length - select one middle character
    // remember slice first position is zero
    return str.slice(((str.length - 1)/2),((str.length - 1)/2) + 1);
  } else {
    //even length string - select two middle characters
    //remember slice positions start from zero
    return str.slice(str.length/2 - 1,(str.length/2) + 1);
  }
}
// trying out two methods for reverseWord
function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  // using array functions (read about this method on free code camp)
  // Carried out in several steps so that I can remember how to do this
  // split the word into an array of single letters named splitWord
  let splitWord = word.split("");
  // reverse the array order into a second array named reverseArray
  let reverseArray = splitWord.reverse("");
  // join array back together into a string
  return reverseArray.join("");
}
function reverseWordAlt(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  // using a for loop (decrementing loop)
 let reversedWordString = ""
  for (let i = word.length - 1; i >= 0; i= i - 1) {
    reversedWordString = reversedWordString + word[i];
  }
  return reversedWordString;
}
function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here! 
  const reversedWords = [];
  //using my favourite forEach function - eek!
  words.forEach(function(word) {  
    // trying to be clever and do split, reverse and join of
    // each array element in one step
    let currentRevWord = word.split("").reverse("").join("");
    reversedWords.push(currentRevWord);
  });
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let iUserCount = 0;
  users.forEach(function(user) {  
    // trying to be clever and do split, reverse and join of
    // each array element in one step
    // can use user.type instead of user("type")
    if (user("type") === "Linux") {
    iUserCount = iUserCount + 1;
    }
  });
  return iUserCount;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  // split array into individual elements and sum
  // reduce method
  //const reducer = (accumulator, currentvalue) => accumulator + currentvalue;

// return Math.round((scores.reduce(reducer)/scores.length),2);
 //loop through array and add scores - can test for non numeric or blank values 
 let sumMeanScores = 0;
 let countMeanScores = 0;

 scores.forEach(function(score) {
   // if any of the scores is not a number 
   // do not add to the average calculation
   if (typeof score === "number") {
    sumMeanScores += score;
    countMeanScores += 1;
   }
 });
// check that final number of values from the array
//is greater than zero or mean calculation will fail
 if (countMeanScores > 0) {
    return Math.round(100* (sumMeanScores/countMeanScores))/100;
 } else {
    return 0;
 }
}
function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  // check that n is a number
  if (isNaN(n)) {
    return("n is not a number");
  }
  // need to add code to allow for numbers divisble by 3 and 5
  // and both 3 and 5
  let strReturn = "";

  if (n % 3 === 0 || n % 5 === 0) {
    if (n % 3 === 0) {
      strReturn += "fizz"; 
    }
    if (n%5 === 0) {
      strReturn += "buzz"
    }
    return strReturn;
  } else {
    return n;
  }
}

module.exports = {
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
};
