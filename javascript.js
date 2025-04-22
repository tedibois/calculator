function add (...theArgs){
    let total = 0;
    for (const arg of theArgs) {
     total += arg;
    }
    return total
}
function subtract (...theArgs) {
    if (theArgs.length === 0) return 0;
    let total = theArgs[0];
    for (let i = 1; i < theArgs.length; i++){
        total -= theArgs[i];
    }
    return total
}
function multiply (...theArgs) {
    if (theArgs.length === 0) return 1;
    let total = theArgs[0];
    for (let i = 1; i < theArgs.length; i++){
        total *= theArgs[i];
    }
    return total
}
function divide (...theArgs) {
    if (theArgs.length === 0) return 1;
    let total = theArgs[0];
    for (let i = 1; i < theArgs.length; i++){
        total /= theArgs[i];
    }
    return total
}
console.log(add(10,5,5,10))
console.log(subtract(10,5,5,10))
console.log(multiply(10,5,5,10))
console.log(divide(10,5,5,10))

function operate(operator, a, b) {
    if (operator === "+") return add(a,b);
    if (operator === "-") return subtract(a,b);
    if (operator === "*") return multiply(a,b);
    if (operator === "/") return divide(a,b);
}

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let resultDisplayed = false;
let expression = "";

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number")

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
    const digit = button.textContent;

    if (currentOperator === null) {
        firstNumber += digit;
        expression = firstNumber;
        display.textContent = expression;
    } else {
        secondNumber += digit;
        expression = `${firstNumber} ${currentOperator} ${secondNumber}`;
        display.textContent = expression;
    }
});
});
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", () => {
    if (currentOperator === null) {
        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            expression = firstNumber;
            display.textContent = expression;
        }
    } else {
        if (!secondNumber.includes(".")) {
            secondNumber += ".";
            expression = `${firstNumber} ${currentOperator} ${secondNumber}`;
            display.textContent = expression;
        }
    }
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber === "") return;
        if (secondNumber !== "") {
            const result = operate(currentOperator, Number(firstNumber), Number(secondNumber));
            firstNumber = result.toString();
            secondNumber = "";
            display.textContent = firstNumber;
        }
        currentOperator = button.textContent;
        expression = `${firstNumber} ${currentOperator}`;
        display.textContent = expression;
        resultDisplayed = false;
    });
});

const equals = document.getElementById("equals")
equals.addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "" && currentOperator !== null) {
        const a = parseFloat(firstNumber);
        const b = parseFloat(secondNumber);

        const result = operate(currentOperator, a, b);
        expression = `${firstNumber} ${currentOperator} ${secondNumber} = ${result}`;
        display.textContent = expression;

        firstNumber = result.toString();
        secondNumber = "";
        currentOperator = null;
    }
});


const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    expression = "";
    display.textContent = "0";
});
