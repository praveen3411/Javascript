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

function withifelseCondtions(cr) {
  let addValue = takeInputValue();
  let addInitialValue = currentValue;
  let mathOperator;
  if (cr === "ADD") {
    currentValue += addValue;
    mathOperator = "+";
  } else if (cr === "SUB") {
    currentValue -= addValue;
    mathOperator = "-";
  } else if (cr === "MULTI") {
    currentValue *= addValue;
    mathOperator = "*";
  } else {
    currentValue /= addValue;
    mathOperator = "/";
  }

  storingLogs(cr, addInitialValue, addValue, currentValue);
  operations(mathOperator, addInitialValue, addValue);
}

function add() {
  withifelseCondtions("ADD");
}

function sub() {
  withifelseCondtions("SUB");
}

function multi() {
  withifelseCondtions("MULTI");
}

function div() {
  withifelseCondtions("DIV");
}

addButton.addEventListener("click", add);
subButton.addEventListener("click", sub);
multiButton.addEventListener("click", multi);
divButton.addEventListener("click", div);
