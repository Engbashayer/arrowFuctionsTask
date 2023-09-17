// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => console.log(`Hello, ${name}!`);
greet("Bashayer");
// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const totOf2 = (num1, num2) => num1 + num2;
console.log(totOf2(10, 20));

// Q3) Write a simple arrow function that squares a number.

const squareAnum = (numsq) => Math.pow(numsq, 2);

console.log(squareAnum(2));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

// const SqArr = (arr) => {

//   const newArr = arr.map(Math.sqrt);
// const element = [];
// for (let index = 0; index < arr.length; index++) {
//   element[index] = squareAnum(arr[index]);
// }
// return element;
// };
const SqArr = (arr) => {
  return arr.map((index) => Math.pow(index, 2));
};
const numberssss = [2, 4, 6, 8];
console.log(SqArr(numberssss));

const numbersX = [1, 2, 3, 4, 5, 6];
//console.log(SqArr(numbersX));

SqArr(numbersX);

// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
