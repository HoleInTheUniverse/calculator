let firstOperand = 0;
let secondOperand = 0;
let operator = '';

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

function operate (firstOperand, secondOperand, operator) {
    switch (operator) {
        case 'addition':
            add(firstOperand, secondOperand);
            break;
        case 'subtraction':
            subtract(firstOperand, secondOperand);
            break;
        case 'multiplication':
            multiply(firstOperand, secondOperand);
            break;
        case 'division':
            divide(firstOperand, secondOperand);
            break;
    }
}