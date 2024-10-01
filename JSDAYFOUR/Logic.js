// Calculator Logic

const initialValue = 0;
let currentResult = initialValue;
let logEntries = [];
// Get Value form inputfield.
function getInputData() {
  return parseInt(InputData.value);
}

// It shows the previous value with operator and current result with dynamically.
function getAllfunctionOutput(operator, previousValue, ResultValue) {
  const DeclaredValue = `${previousValue} ${operator} ${ResultValue}`;
  mainOutput(currentResult, DeclaredValue);
}

// Adding the values;
function add() {
  const addValue = getInputData();
  const initialAddValue = currentResult;
  currentResult += addValue;
  getAllfunctionOutput("+", initialAddValue, addValue);
  logEntries.push(addValue);
  console.log(logEntries)
}

// Subtract.
function Sub() {
  const subValue = getInputData();
  const storesubinitialValue = currentResult;
  currentResult -= subValue;
  getAllfunctionOutput("-", storesubinitialValue, subValue);
}

// multiply
function multiply() {
  const multiplyValue = getInputData();
  const multiinitialStoreValue = currentResult;
  currentResult *= multiplyValue;
  getAllfunctionOutput("*", multiinitialStoreValue, multiplyValue);
}

// division
function divison() {
  const divValue = getInputData();
  const storeDivValue = currentResult;
  currentResult /=divValue;
  getAllfunctionOutput("/", storeDivValue, divValue);
}

// Triggers event's for each function
Addition.addEventListener("click", add);
Substraction.addEventListener("click", Sub);
Multiplication.addEventListener("click", multiply);
Division.addEventListener("click", divison);

// Add Comments to code !
/* Hello */
