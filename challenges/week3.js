function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here!
  // find square of each value in an array of numbers
  // loop through array - forEach
  // find square of each number number*number or
  // mathematical function to do this - Math.pow()
  // create a new array to return the squared values
  // initially array of return values is blank
  const squaredVals = [];
  nums.forEach(function (element) {
    //add square of number to array of return values
    squaredVals.push(Math.pow(element,2));
  });
  return squaredVals;
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
  // first letter of the first word in the array needs to
  // remain lowercase
  // the first letter of any remaining words in the array
  // needs to be coverted to uppercase
  // need to check position of element in the array
  // to determine whether conversion of first letter 
  // to uppercase required - indexOf
  //camelCaseVals string stores the return values
  let camelCaseVals = "";
  words.forEach (function(element){
    // check position in the array of the element
    if (words.indexOf(element) > 0) {
      //element is not the first element of the array
      //conversion of first letter to uppercase required
      //add converted work to return string
      camelCaseVals += (element[0].toUpperCase() + element.slice(1));
    } else {
      //no upper case conversion required
      //add element to return array
      camelCaseVals += element;
    }    
  });
   //return array of camelCase values
   return camelCaseVals
}

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
  // people is an array of person objects
  // in each person object there is an array of subjects
  // loop through each person element in the people array
  // forEach
  // loop through the subject array for the current person
  // increment a counter for each subject in the subject array
  // retain the counter value when moving to the next person
  // in the people array
  // nested forEach?
  // find length of each subjects array
  let iCounter = 0;
  //let jCounter = 0;
  people.forEach(function(element){
    //iCounter = iCounter + 1;
    //console.log (iCounter);
    //element.subjects.forEach(function() { 
    //  console.log(jCounter);
    // jCounter = jCounter + 1
   // });
    iCounter = iCounter + element.subjects.length;
  });
  return iCounter
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
