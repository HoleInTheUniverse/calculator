// Variables required for operations
let firstOperand = '';
let secondOperand = '';
let operator = '';
let newOperation = true;

// DOM objects
const display = document.querySelector(".display span");
const buttons = document.querySelectorAll(".button");

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate () {
    if ((firstOperand != '') && (secondOperand != '') && (operator != '')) {
        let result;
        const firstOperandN = parseInt(firstOperand);
        const secondOperandN = parseInt(secondOperand);

        switch (operator) {
            case 'addition':
                result = add(firstOperandN, secondOperandN);
                break;
            case 'subtraction':
                result = subtract(firstOperandN, secondOperandN);
                break;
            case 'multiplication':
                result = multiply(firstOperandN, secondOperandN);
                break;
            case 'division':
                if (secondOperandN == 0) {
                    clear(true);
                    updateDisplay("Error");
                    return;
                }
                result = divide(firstOperandN, secondOperandN);
                break;
        }

        updateDisplay(result);
        clear(false);
        firstOperand = display.textContent; 
    }
}

function updateDisplay (content) {
    display.textContent = content;
}

function clear (display) {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    newOperation = true;    

    if (display) updateDisplay('');
}

function handleInput (event) {
    if (event.target.id == "assignment") operate();
    else if (event.target.id == "clear") clear(true);
    else if (event.target.className.includes("operand")) {
        const input = event.target.textContent;

        if (newOperation) {
            newOperation = false;
            firstOperand = input;
            updateDisplay(firstOperand);
        }
        else {
            if (operator == '') {
                firstOperand += input;
                updateDisplay(firstOperand);
            }
            else {
                secondOperand += input;
                updateDisplay(secondOperand);
            }
        }
    }
    else if (event.target.className.includes("operator")) {
        operate();
        operator = event.target.id;
        if (firstOperand != '') newOperation = false;
    }
}

// Events handling
buttons.forEach((button) => {
    button.addEventListener("click", handleInput);
});