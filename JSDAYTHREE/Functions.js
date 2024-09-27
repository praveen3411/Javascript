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

function stringfy(a){
    return (`${a}`);
}
