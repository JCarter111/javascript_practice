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
