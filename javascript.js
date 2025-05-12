//audioElement.play();
//add
//subtract
//multiply
//divide
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
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number")
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




const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.getElementById("equals");

const tanks = document.getElementById("tanks");



operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentOperator = button.textContent;
        display.textContent = currentOperator;
    });
});




equalsButton.addEventListener("click", () => {
    if (firstNumber && secondNumber && currentOperator) {
        const a = parseFloat(firstNumber);
        const b = parseFloat(secondNumber);
        const result = operate(currentOperator, a, b);

        display.textContent = result;
        firstNumber = result.toString();
        secondNumber = "";
        currentOperator = null;

        // Show image if result is 1989
        if (result === 1989) {
            tanks.innerHTML = `<img src="style/images/tanks.webp" alt="1989">`;
        } else {
            tanks.innerHTML = ""; // Clear if not 1989
        }
    }
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    resultDisplayed = false;
    display.textContent = "0";
    tanks.innerHTML = "";
});
