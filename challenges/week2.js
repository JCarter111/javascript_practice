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
  //rework to use forEach following feedback on homework
  //arr.find(function(element) {
  arr.forEach(function(element) {
  if (element === "sheep") {
    iSheepCounter = iSheepCounter + 1 ;
  }
})
return iSheepCounter;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  // object person with nested address object
  // find postcode starting with M
  // check charAt[0] or substr in postCode property
  // of object is "M"
  // 2nd character in string must be number
  // for Manchester postcode - substr check
  if (person.address.hasOwnProperty("postCode") === false) return false;
  // in my original homework I used code below

  // check for first letter in postcode being "M"
  //if (person.address.postCode.substr(0,1) === "M") {
    // first letter in postcode is M, check whether 
    // 2nd character in postcode is a number
    
   // if (isNaN(person.address.postCode.substr(1,1))) {
      // second character is not a number - non Manchester postcode
   //   return(false);
  //  } else {
      // second character is a number - Manchester postcode
  //    return(true);
  //  } 
  // 1st character in postcode is not "M" -non Manchester postcode
  //} else {
 //     return(false);
 // }
  // reworked to a shorter alternative from feedback and help video
  return person.address.postCode[0] === "M" 
    && !isNaN(person.address.postCode[1])
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
