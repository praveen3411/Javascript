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
