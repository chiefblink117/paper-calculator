let currentNumber = "";
let previousNumber = "";
let operation = "";
console.log("Program Start");

function appendDigit(digit) {
  console.log("Digit appended");
  currentNumber += digit;
  document.getElementById("display").value = currentNumber;
}

function doOperation(op) {
  console.log("Operation done")
  previousNumber = currentNumber;
  currentNumber = "";
  operation = op;
}

function calculate() {
  console.log("Calculation running");
  let result = 0;
  switch (operation) {
    case "+":
    result = parseFloat(previousNumber) + parseFloat(currentNumber);
    break;
    case "-":
    result = parseFloat(previousNumber) - parseFloat(currentNumber);
    break;
    case "*":
    result = parseFloat(previousNumber) * parseFloat(currentNumber);
    break;
    case "/":
    result = parseFloat(previousNumber) / parseFloat(currentNumber);
    break;
  }
  document.getElementById("display").value = result;
  currentNumber = result;
}

function clear() {
  console.log("The clear button has been pressed.");
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("display").value = "";
  }