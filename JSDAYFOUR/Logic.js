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

function findTheLogs(operationTypes, prevValue, numberedVAlue, finalValue) {
  let logEntry = {
    operation: operationTypes,
    previousRes: prevValue,
    addedResult: numberedVAlue,
    results: finalValue,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
// Adding the values;
function add() {
  const addValue = getInputData();
  const initialAddValue = currentResult;
  currentResult += addValue;
  findTheLogs("ADD", initialAddValue, addValue, currentResult);
  getAllfunctionOutput("+", initialAddValue, addValue);
}

// Subtract.
function Sub() {
  const subValue = getInputData();
  const storesubinitialValue = currentResult;
  currentResult -= subValue;
  findTheLogs("SUB", storesubinitialValue, subValue, currentResult);
  getAllfunctionOutput("-", storesubinitialValue, subValue);
}

// multiply
function multiply() {
  const multiplyValue = getInputData();
  const multiinitialStoreValue = currentResult;
  currentResult *= multiplyValue;
  findTheLogs("MULTIPLY", multiinitialStoreValue, multiplyValue, currentResult);
  getAllfunctionOutput("*", multiinitialStoreValue, multiplyValue);
}

// division
function divison() {
  const divValue = getInputData();
  const storeDivValue = currentResult;
  currentResult /= divValue;
  findTheLogs("DIVISION", storeDivValue, divValue, currentResult);
  getAllfunctionOutput("/", storeDivValue, divValue);
}

// Triggers event's for each function
Addition.addEventListener("click", add);
Substraction.addEventListener("click", Sub);
Multiplication.addEventListener("click", multiply);
Division.addEventListener("click", divison);

// Add Comments to code !
/* Hello */
