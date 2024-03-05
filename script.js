let firstNumber = 0;
let secondNumber = 0;

const numbers = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll("operator-btn");
const numberOutput = document.querySelector(".number-output");

function selectNumber(number) {
  number = this.textContent;

  if (numberOutput.textContent.length < 10) {
    if (numberOutput.textContent === "0") {
      numberOutput.textContent = number;
    } else {
      numberOutput.textContent += `${number}`;
    }
  }
}

function operation() {
  if (operator == "+") {
    result = firstNumber + secondNumber;
  } else if (operator == "-") {
    result = firstNumber - secondNumber;
  } else if (operator == "*") {
    result = firstNumber * secondNumber;
  } else if (operator == "/") {
    result = firstNumber / secondNumber;
  }
}

numbers.forEach((number) => number.addEventListener("click", selectNumber));

operators.forEach((operator) => operator.addEventListener("click", operation));
