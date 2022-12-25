const inputWrapper = document.getElementById('input-wrapper');
const inputs = document.querySelectorAll('button');
const displayInput = document.querySelector('.display-input');
const displayOutput = document.querySelector('.display-output');
const expression = [];
let operatorClicked = false;

function updateDisplays(button) {
  if (button === "AC") clearAll();
  if (button === "DEL") {
    if (operatorClicked) {
      clearExpression();
      operatorClicked = false;
    }
    removeCharFromDisplay(displayInput);
  }

  if (Number(button)) {
    if (operatorClicked) {
      displayInput.textContent = "";
      operatorClicked = false;
    }
    addCharToDisplay(button, displayInput);
  }

  if ("+-*/".includes(button)) {
    if (!isEmpty(displayInput.textContent) && isEmpty(expression)) {
      expression.push(displayInput.textContent);
      expression.push(button);
      operatorClicked = true;
    }
    if (operatorClicked) expression[1] = button;
  }

  if (button === "=" && !operatorClicked) calculateExpression();

  return;
}

function clearAll() {
  clearDisplays();
  clearExpression();
  operatorClicked = false;
}

function clearDisplays() {
  displayInput.textContent = "";
  displayOutput.textContent = "0";
}

function calculateExpression() {
  if (expression.length === 2 && !isEmpty(displayInput.textContent)) {
    expression.push(displayInput.textContent);
    let result = operate(expression[0], expression[1], expression[2]);
    clearAll();
    displayOutput.textContent = result;
  }
}

function clearExpression() {
  expression.length = 0;
}

function removeCharFromDisplay(displayElement) {
  let currentText = displayElement.textContent;
  displayElement.textContent = currentText.slice(0, -1);
}

function addCharToDisplay(char, displayElement) {
  displayElement.textContent += char; 
}

function isEmpty(variable) {
  if (variable.length === 0) return true;
  return false;
}

function operate(a, operator, b) {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
  return;
}

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  result = a * b;

  return result;
}

function divide(a, b) {
  result = a / b;
  if (String(result).length > 8) return result.toPrecision(4);

  return result;
}


// Button Input
inputWrapper.addEventListener("click", event => {
  if (event.target.nodeName !== "BUTTON") return;

  let buttonText = event.target.textContent;
  updateDisplays(buttonText);
})

// Keyboard Input
document.addEventListener("keydown", event => {
  if(event.repeat) return;
  event.preventDefault();
  let button = document.querySelector(`[class*="${event.key}"]`) || 
               document.querySelector(`[class*="${event.code}"]`);
  if (button) button.click();
  return;
});

