function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

function operate(a, op, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error('Invalid operator');
    }
}

let operand1 = '';
let operand2 = '';
let operator = null;
let isOperand2 = false;
let clear=false;

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');

function updateDisplay(value) {
    display.textContent = value;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isOperand2) {
            operand2 += button.textContent;
            updateDisplay(operand2);
        } else {
            operand1 += button.textContent;
            updateDisplay(operand1);
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operand1 !== '') {
            operator = button.textContent;
            isOperand2 = true;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (operand1 !== '' && operand2 !== '' && operator !== null) {
        const result = operate(parseFloat(operand1), operator, parseFloat(operand2));
        updateDisplay(result);
        operand1 = result.toString();
        operand2 = '';
        operator = null;
        isOperand2 = false;
    }
});

clearButton.addEventListener('click', () => {
    operand1 = '';
    operand2 = '';
    operator = null;
    isOperand2 = false;
    updateDisplay('0');
});

decimalButton.addEventListener('click', () => {
    if (isOperand2 && !operand2.includes('.')) {
        operand2 += '.';
        updateDisplay(operand2);
    } else if (!isOperand2 && !operand1.includes('.')) {
        operand1 += '.';
        updateDisplay(operand1);
    }
});
