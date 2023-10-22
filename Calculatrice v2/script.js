const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
let input = "";
let currentOperator = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      if (currentOperator && input) {
        const result = calculate(input, currentOperator);
        if (result !== null) {
          input = result.toString();
          screen.value = input;
          currentOperator = "";
        } else {
          input = "Error";
          screen.value = input;
        }
      }
    } else if (value === "AC") {
      input = "";
      currentOperator = "";
      screen.value = "";
    } else if (value === "DE") {
      input = input.slice(0, -1);
      screen.value = input;
    } else if (isOperator(value)) {
      currentOperator = value;
      if (input) {
        input += currentOperator;
        screen.value = input;
      }
    } else {
      input += value;
      screen.value = input;
    }
  });
});

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

function calculate(expression, operator) {
  const [left, right] = expression.split(operator).map(parseFloat);
  let result;

  if (operator === "+") {
    result = left + right;
  } else if (operator === "-") {
    result = left - right;
  } else if (operator === "*") {
    result = left * right;
  } else if (operator === "/") {
    if (right === 0) {
      return null; // Division par zéro
    }
    result = left / right;
  }

  return result;
}