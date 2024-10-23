let inputValue = document.getElementById("calci");
let addButton = document.getElementById("plus");
let subButton = document.getElementById("minus");
let multiButton = document.getElementById("multi");
let divButton = document.getElementById("divi");
let prevResult = document.getElementById("prev");
let mainResult = document.getElementById("result");

function outputResult(result, text) {
  prevResult.textContent = result;
  mainResult.textContent = text;
}
