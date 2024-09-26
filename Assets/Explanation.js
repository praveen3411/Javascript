// Variable Declerations

let userName = "praveen Kumar";

// By using let we can able to reassing the value;

userName = "Ganesh Kumar";
// console.log(userName);
// console.log(userName);

// But const will not allow once we assign the value we can't able to reassign

const userData = "Stored in MongoDB";

// when you are giving the output it will through error;

var className = "Apple Class";
// Var is the global variable we can use any where in the code and we can reassing.
// But let and const are the block scope variable we cannot access outside of blockscope.

// Variable Declerations
// alert("Javascript Code")

let usersData = "Stored";
let _usersData = "Stored";
let $usersData = "Stored";
let userData5 = "Stored";

// These are the ways to decleare the variables;
let currentResult = 20;

let currentResult1 = "hello";
let editorName = "VSCODE";
let currentResult2 = `My name is ${currentResult} and my editor name is ${editorName}`;
let linebreak = "My name is \n" + "K.praveen kumar";
console.log(linebreak);

console.log(currentResult2);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

function CallFunction(resultone, resulttwo) {
  console.log(resultone);
}

CallFunction(currentResult);

let userInput = 15;
let result;
result = ((18 + userInput) * 30) / 2 - 1;
alert(result);
alert(userInput);
