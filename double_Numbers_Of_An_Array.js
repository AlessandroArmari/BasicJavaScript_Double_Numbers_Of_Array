/*
The function doubleNumbersOfAnArray() first checks if all of the elements of an
Array are numbers. 
Then, if they are, returns the values of the numbers doubled.

*/

function doubleNumbersOfAnArray(givenArray) {
  //FIRST: I check if are there ONLY numbers in my array
  //I used the "typeof" operator wich returns the type of an element

  for (y = 0; y < givenArray.length; y++) {
    if (typeof givenArray[y] != "number") {
      return "The input Array has one or many elements which aren't numbers! Change them it/them to numbers";
    }
  }

  //SECOND: I double each number of the array

  for (i = 0; i < givenArray.length; i++) {
    givenArray[i] = givenArray[i] * 2;
  }

  return givenArray;
}

var input = [123, 2, 3, 4, 1045, 3.7];

console.log(doubleNumbersOfAnArray(input));
