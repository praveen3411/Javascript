const initialValue = 0;
var currentValue = initialValue;
let storeLogs = [];

function takeInputValue() {
  return parseInt(inputValue.value);
}

function operations(operator, previousValue, updatedValue) {
  let res = `${previousValue} ${operator} ${updatedValue}`;
  outputResult(currentValue, res);
}

function storingLogs(typeoflog, prevlog, updatedlog, finalvalue) {
  let logEntry = {
    operation: typeoflog,
    previous: prevlog,
    updated: updatedlog,
    mainResult: finalvalue,
  };
  storeLogs.push(logEntry);
  console.log(storeLogs);
}

function add() {
  let addValue = takeInputValue();
  let addInitialValue = currentValue;
  currentValue += addValue;
  storingLogs("ADD", addInitialValue, addValue, currentValue);
  operations("+", addInitialValue, addValue);
}

function sub() {
  let subValue = takeInputValue();
  let subinitialValue = currentValue;
  currentValue -= subValue;
  operations("-", subinitialValue, subValue);
}

function multi() {
  let multiValue = takeInputValue();
  let multiInitialValue = currentValue;
  currentValue *= multiValue;
  operations("x", multiInitialValue, multiValue);
}

function div() {
  let divValue = takeInputValue();
  let divinitialValue = currentValue;
  currentValue /= divValue;
  operations("/", divinitialValue, divValue);
}

addButton.addEventListener("click", add);
subButton.addEventListener("click", sub);
multiButton.addEventListener("click", multi);
divButton.addEventListener("click", div);
