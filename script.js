let firstNumber = "";
let secondNumber = "";
let numOperator = "";
let result;

const numbers = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");
const firstNumberValue = document.querySelector(".first-number-output");
const secondNumberValue = document.querySelector(".second-number-output");
const equals = document.querySelector(".equals-btn");

function subtract(firstNumber, secondNumber) {
  result = parseFloat(firstNumber) - parseFloat(secondNumber);
  return result;
}

function multiply(firstNumber, secondNumber) {
  result = parseFloat(firstNumber) * parseFloat(secondNumber);
  return result;
}

function divide(firstNumber, secondNumber) {
  result = parseFloat(firstNumber) / parseFloat(secondNumber);
  return result;
}

function percentage(firstNumber, secondNumber) {
  result = (parseFloat(firstNumber) / 100) * parseFloat(secondNumber);
  return result;
}

function add(num1, num2) {
  result = parseFloat(num1) + parseFloat(num2);
  return result;
}

function handleNumber(num) {
  if (firstNumber.length < 10) {
    if (firstNumber === "0") {
      firstNumber = `${num}`;
    } else {
      firstNumber += `${num}`;
    }
  }
}

function handleOperator(operator) {
  numOperator = operator;
  secondNumber = firstNumber;
  firstNumber = "";

  console.log(operator);
}

function operate(num1, num2, numOperator) {
  if (numOperator === "+") {
    firstNumber = add(num1, num2);
  } else if (numOperator === "-") {
    firstNumber = subtract(num2, num1);
  } else if (numOperator === "x") {
    firstNumber = multiply(num1, num2);
  } else if (numOperator === "÷") {
    firstNumber = divide(num2, num1);
  }
}

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
    firstNumberValue.textContent = firstNumber;
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
    secondNumberValue.textContent = `${secondNumber}` + `${numOperator}`;
    firstNumberValue.textContent = firstNumber;
  })
);

equals.addEventListener("click", () => {
  secondNumberValue.textContent =
    `${firstNumber}` + `${numOperator}` + `${secondNumber}` + "=";
  if (firstNumber != "" && secondNumber != "") {
    operate(firstNumber, secondNumber, numOperator);
    firstNumberValue.textContent = result;
  }
});
