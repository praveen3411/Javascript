let InputData = document.getElementById("type-number");
let Addition = document.getElementById("addition-type");
let Substraction = document.getElementById("substraction-type");
let Multiplication = document.getElementById("multiplication-type");
let Division = document.getElementById("division-type");

let mainResult = document.getElementById("current-result");
let CalciResult = document.getElementById("current-calci-result");

function mainOutput(result, text) {
  mainResult.textContent = result;
  CalciResult.textContent = text;
}
