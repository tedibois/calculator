function add(...args) {
    return args.reduce((acc, val) => acc + val, 0);
  }
  function subtract(...args) {
    return args.slice(1).reduce((acc, val) => acc - val, args[0]);
  }
  function multiply(...args) {
    return args.slice(1).reduce((acc, val) => acc * val, args[0]);
  }
  function divide(...args) {
    return args.slice(1).reduce((acc, val) => acc / val, args[0]);
  }
  
  function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
  }
  
  let firstNumber = "";
  let secondNumber = "";
  let currentOperator = null;
  
  const display = document.getElementById("display");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  const equalsButton = document.getElementById("equals");
  const clearButton = document.getElementById("clear");
  const tanks = document.getElementById("tanks");
  
  numberButtons.forEach(button => {
    button.addEventListener("click", () => {
      const digit = button.textContent;
  
      if (currentOperator === null) {
        firstNumber += digit;
        display.textContent = firstNumber;
      } else {
        secondNumber += digit;
        display.textContent = secondNumber;
      }
    });
  });
  
  operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (firstNumber !== "") {
        currentOperator = button.textContent;
      }
    });
  });
  
  equalsButton.addEventListener("click", () => {
    if (firstNumber && secondNumber && currentOperator) {
      const a = parseFloat(firstNumber);
      const b = parseFloat(secondNumber);
      const result = operate(currentOperator, a, b);
  
      display.textContent = `${firstNumber} ${currentOperator} ${secondNumber} = ${result}`;
      firstNumber = result.toString();
      secondNumber = "";
      currentOperator = null;
  
      if (result === 1989) {
        tanks.classList.remove("hidden");
      } else {
        tanks.classList.add("hidden");
      }
    }
  });
  
  clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    display.textContent = "0";
    tanks.classList.add("hidden");
  });
  