// Calculator Logic

const initialValue = 0;
let currentResult = initialValue;

function getInputData() {
  return parseInt(InputData.value);
}

function getAllfunctionOutput(operator, previousValue, ResultValue) {
  const DeclaredValue = `${previousValue} ${operator} ${ResultValue}`;
  mainOutput(currentResult, DeclaredValue);
}
function add() {
  const addValue = getInputData();
  const initialAddValue = currentResult;
  currentResult = currentResult + addValue;
  getAllfunctionOutput("+", initialAddValue, addValue);
}

function Sub() {
  const subValue = getInputData();
  const storesubinitialValue = currentResult;
  currentResult = currentResult - subValue;
  getAllfunctionOutput("-", storesubinitialValue, subValue);
}

function multiply() {
  const multiplyValue = getInputData();
  const multiinitialStoreValue = currentResult;
  currentResult = currentResult * multiplyValue;
  getAllfunctionOutput("*", multiinitialStoreValue, multiplyValue);
}

function divison() {
  const divValue = getInputData();
  const storeDivValue = currentResult;
  currentResult = currentResult / divValue;
  getAllfunctionOutput("/", storeDivValue, divValue);
}

Addition.addEventListener("click", add);
Substraction.addEventListener("click", Sub);
Multiplication.addEventListener("click", multiply);
Division.addEventListener("click", divison);
