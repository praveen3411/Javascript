// Functions are main haed of the js code because it holds the data, We can execute whenever you want
// Function contains function with name and parameters and body holds all the logic
// Function will execute once you invoke
const initilValue = 0;
let currentResult = initilValue;
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
currentResult = add(10, 20);
console.log(currentResult);

function stringfy(a) {
  return `${a}`;
}

function logFunction(a, b) {
  console.log((a * 30) / 2, b);
}
logFunction(100, 30);
console.log(mobileName); // It will show undefined so variables should be declare at the top level.
var mobileName = "Iphone";
console.log(mobileName); // It gives the output.
 // Throws a refference becuase let and const aslo should be declare at the top level and call  
let carName = "Lambargani";
console.log(carName);
// console.log(bikeName);
const bikeName = "FXZ";

// Functions can be access anywhere in the code

let ShadowingName = "Praveen Kumar";
function Showing(data) {
  let ShadowingName = data;
  // alert(ShadowingName);
}
ShadowingName = "Ravan";
Showing("Ganesh Kuma")
