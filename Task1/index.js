// Problem 1

// function processArray(arr, callback) {
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// function double(num) {
//   return num * 2;
// }

// var numbers = [1, 2, 3, 4, 5];
// var doubledNumbers = processArray(numbers, double);
// console.log(doubledNumbers);

//-------------------------------------------------------------------------------------------

//Problem 2

// function getEvenNumbers(input) {
//   const numbersArray = input.trim().split(",").map(Number);

//   const evenNumbers = numbersArray.filter((num) => num % 2 === 0);

//   return evenNumbers;
// }

// // Example usage
// const input = " 1,2,3,4,5";
// const output = getEvenNumbers(input);
// console.log(output);

//------------------------------------------------------------------------------------------------------

// Problem 3
function sumNumbers(input) {
  const numbersArray = input.trim().split(";").map(Number);

  const sum = numbersArray.reduce((acc, cur) => acc + cur, 0);

  return sum;
}

const input = "5;10;15";
const output = sumNumbers(input);
console.log(output); // Output: 30
