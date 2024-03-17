let numOperator = "";
let previousNumber = "";
let currentNumber = "";

const numbers = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");

const firstNumberValue = document.querySelector(".first-number-output");
const secondNumberValue = document.querySelector(".second-number-output");

const equals = document.querySelector(".equals-btn");
const clear = document.querySelector(".clear-btn");
const decimal = document.querySelector(".decimal-btn");
const numDelete = document.querySelector(".delete-btn");
const signNum = document.querySelector(".sign-btn");

decimal.addEventListener("click", addDecimals);
numDelete.addEventListener("click", deleteNumber);
signNum.addEventListener("click", signNumber);

equals.addEventListener("click", () => {
  if (currentNumber != "" && previousNumber != "") {
    operate();
  }
});

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

clear.addEventListener("click", clearBtn);

function clearBtn() {
  firstNumberValue.textContent = "0";
  secondNumberValue.textContent = "";
  currentNumber = "";
  previousNumber = "";
  numOperator = "";
}

function addDecimals() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    firstNumberValue.textContent = currentNumber;
  }
}

function deleteNumber() {
  if (currentNumber !== "") {
    currentNumber = currentNumber.slice(0, -1);
    firstNumberValue.textContent = currentNumber;
    if (currentNumber === "") {
      firstNumberValue.textContent = 0;
    }
  }
}

function signNumber() {
  if (!currentNumber.includes("-")) {
    currentNumber = "-" + currentNumber;
    firstNumberValue.textContent = currentNumber;
  } else {
    currentNumber = currentNumber.replace("-", "");
    firstNumberValue.textContent = currentNumber;
  }
}

function handleNumber(num) {
  if (previousNumber !== "" && currentNumber !== "" && numOperator === "") {
    previousNumber = "";
    firstNumberValue.textContent = currentNumber;
  }
  if (currentNumber.length <= 11) {
    currentNumber += num;
    firstNumberValue.textContent = currentNumber;
  }
}

function handleOperator(op) {
  if (previousNumber === "") {
    previousNumber = currentNumber;
    operatorCheck(op);
  } else if (currentNumber === "") {
    operatorCheck(op);
  } else {
    operate();
    numOperator = op;
    firstNumberValue.textContent = "0";
    secondNumberValue.textContent = previousNumber + " " + numOperator;
  }
}

function operatorCheck(text) {
  numOperator = text;
  secondNumberValue.textContent = previousNumber + " " + numOperator;
  firstNumberValue.textContent = "0";
  currentNumber = "";
}

function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
}

function operate() {
  currentNumber = Number(currentNumber);
  previousNumber = Number(previousNumber);

  if (numOperator === "+") {
    previousNumber += currentNumber;
  } else if (numOperator === "-") {
    previousNumber -= currentNumber;
  } else if (numOperator === "x") {
    previousNumber *= currentNumber;
  } else if (numOperator === "%") {
    previousNumber = (previousNumber / 100) * currentNumber;
  } else if (numOperator === "÷") {
    if (currentNumber <= 0) {
      previousNumber = "Error";
      displayResults();
      return;
    } else {
      previousNumber /= currentNumber;
    }
  }

  previousNumber = roundNumber(previousNumber);
  previousNumber = previousNumber.toString();
  displayResults();
}

function displayResults() {
  if (previousNumber.length <= 11) {
    firstNumberValue.textContent = previousNumber;
  } else {
    firstNumberValue.textContent = previousNumber.slice(0, 11) + "...";
  }
  secondNumberValue.textContent = "";
  numOperator = "";
  currentNumber = "";
}
