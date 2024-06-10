let currentNumber = "";
let previousNumber = "";
let operation = "";

function appendDigit(digit) {
  currentNumber += digit;
  document.getElementById("display").value = currentNumber;
}

function doOperation(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operation = op;
}

function calculate() {
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
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("display").value = "";
  }