let firstNumber = 0;

const numbers = document.querySelectorAll(".number-btn");
const numberOutput = document.querySelector(".number-output");

numbers.forEach((number) => number.addEventListener("click", selectNumber));

function selectNumber(firstNumber) {
  if (numberOutput.textContent.length < 9) {
    firstNumber = this.value;
    numberOutput.textContent += firstNumber;
    console.log(numberOutput);
  } else {
    return;
  }
}
