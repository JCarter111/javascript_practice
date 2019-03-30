function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  // need to return a list of fillings in the sandwich
  //fillings is an array within an object - eek!
  //use sandwich.fillings property of the object
  //list fillings array contents
  return (sandwich.fillings);
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  // code works correctly without check for city property
  // but wanted to try adding property check to see if code 
  // would work
  // does object have a city property?, if it does not return false
  if (person.hasOwnProperty("city") === false) return false;
  // check city property of the person object
  // if city is Manchester return true
  // if city is not Manchester return false
  // use if ... else statement for checking city
  if (person.city === "Manchester") {
    return true;
  } else {
    // this else statement can handle case of city property 
    // does not exist but added extra check above to practice
    // checking property
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  // check for multiples of 40
// if the number of people is divisible
// by 40 this will be the number of buses required
// if the number of people is not exaclty divisible
// by 40 need people/40 rounded to next highest number
// e.g. 81/40 = 2.025
// number of buses = 2 + 1
// could use modulus operator to check for remainder
// if there is a remainder add 1 to people/40
// have kept code that I wrote to do this but had another idea
// maths function to round up to nearest whole number
// e.g. 81/40 = 2.025 round up to 3
// e.g. 1094/40 = 27.35 round up to 28
// Maths.ceil operator can do this
if (isNaN(people)) throw new Error("number is required");
return Math.ceil(people/40);
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  // Your code here!
  // check for values of sheep in array
  // counter to increment by one each time 
  // "sheep" string found
  // find value in an array
  // just need to find value not position 
  // in array
  // find method
  let iSheepCounter = 0;
  arr.find(function(element) {
  if (element === "sheep") {
    iSheepCounter = iSheepCounter + 1 ;
  }
})
return iSheepCounter;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
