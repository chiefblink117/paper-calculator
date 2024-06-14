let currentNumber = "";
let previousNumber = "";
let operation = "";
document.addEventListener('keypress', handleKeyPress);
console.log("Program Start");

function appendDigit(digit) {
  console.log("Digit appended");
  currentNumber += digit;
  document.getElementById("display").value = currentNumber;
}

function appendDot() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    document.getElementById("display").value = currentNumber;
  }
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
  document.getElementById("display").value = result.toFixed(2); // Display result with 2 decimal places
  currentNumber = result;
}

function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  document.getElementById("display").value = currentNumber;
}

function clearDisplay() {
  console.log("Clearing display");
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("display").value = "";
  }

function handleKeyPress(event) {
  const keyValue = event.key;
  const displayValue = document.getElementById('display').value;
  
  switch (keyValue) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      appendDigit(keyValue);
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      doOperation(keyValue);
      break;
    case '=':
      calculate();
      break;
    case 'Backspace':
      backspace();
      break;
    case 'Enter':
      calculate();
      break;
    default:
      console.log('Unknown key press:', keyValue);
  }
}