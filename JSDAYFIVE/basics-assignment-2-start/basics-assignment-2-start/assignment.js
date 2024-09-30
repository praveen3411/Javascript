function functionOne() {
  alert("This is function one");
}
// functionOne();

function functionTwo(name) {
  alert(name);
}
functionTwo("Praveen Kumar");

function threeStrings(string1, string2, string3) {
  // We can use this in both ways.
  let combinedStrings = `${string1} ${string2} ${string3}`
  return (
    "My name is " +
    string1 +
    " My father name is " +
    string2 +
    "Surname is " + 
    string3
  );
}
const passingThreeStrings = threeStrings(
  "praveen Kumar",
  "Venkata Ramana",
  "Kurakula"
);
alert(passingThreeStrings)
const task3Element = document.getElementById("task-3");
task3Element.addEventListener("click", functionOne);
