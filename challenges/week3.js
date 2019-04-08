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
    squaredVals.push(Math.pow(element, 2));
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
  words.forEach(function (element) {
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
  // if two people are taking the same subject
  // this is counted twice
  // only require the number of subjects in the
  // subjects array can obtain this using length
  // property of the array

  // counter to store total number of subjects
  // to obtain for every person in the people array
  let iCounter = 0;

  // loop through each person in the people array
  people.forEach(function (element) {
    // increase number of subjects count by the
    // length of the current person's subject array
    iCounter = iCounter + element.subjects.length;
  });
  // return total number of subjects for all the people
  // in the people array
  return iCounter
}

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  // menu array of food objects with an array 
  // of ingredients for each object
  // loop through food objects in the menu array
  // loop through ingredients array to search 
  // for ingredient passed to this function
  // nested forEach loops?

  // Boolean indicator to specify
  // whether ingredient has been found in the menu
  let bIngredientFound = false;
  // loop through each food object in the menu
  menu.forEach (function(foodObject) {
    // loop through the ingredients array in each
    // food object in the menu
    foodObject.ingredients.forEach (function(ingredientItem) {
      // note: thought about using 
      // if (ingredientItem.includes(ingredient))
      // to check whether an ingredient item
      // in the array includes the ingredient string
      // rather then checking that the ingredient item 
      // is exactly equal to the ingredient
      // using this method would allow a search for
      // ingredient "egg" to return true if one of the
      // menu ingredients is "egg yolk"
      // but would always work e.g search for "milk"
      // would return true for menu item containing "soya milk"
      if (ingredientItem === ingredient) {
        // if the ingredient is found in the 
        // ingredients of the current food object
        // set Boolean indicator to true
        bIngredientFound = true;
      }
    });
  });
  return bIngredientFound;
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
  // 2 arrays to compare arr1 and arr2
  // loop through arr1 values
  // check each arr1 value against all the 
  // values in arr2
  // any matching values need to be stored 
  // in a third array, arr3 and returned in 
  // this function
  // duplicate numbers must appear only once in the
  // final array, arr3
  // arr3 must be sorted so that the numbers are in
  // arr3 in ascending numerical order
  // try nested forEach loops or use for loops?
  // try numeric sort method from MDN 
  // or use slice, join and for loop to resort numbers
  // in arr3?
  const arr3 = [];
  arr1.forEach(function(arr1Element) {
    arr2.forEach(function (arr2Element) {
      if (arr1Element === arr2Element) {
        // duplicate number located -
        // if the duplicate number does not 
        // already exists in arr3, add the 
        // duplicate number to arr3
        // indexOf = -1 if the number does
        // not already exist in arr3
        if (arr3.indexOf(arr1Element) < 0) {
          // number not already in arr3 
            arr3.push(arr1Element);
        }
      }
    });
  });
  // return array, arr3, contains the duplicate numbers
  // this needs to be sorted in ascending numeric
  // order if arr3.sort() was used this would sort in
  // ASCII order e.g. [1,100,6,650,8]
  // the sort method below sorts in numeric order
  // longer hand version of this is:
  // return arr3.sort(function(a,b) {
  //   return a - b;
  // });
  return arr3.sort((aValue,bValue) => aValue - bValue)
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
