let num1 = 0;
let num2 = 0;
let operator = '';
let displayValue = '';
let equalsStatus = 'disengaged';
let operatorStatus = 'disengaged';

const numberButtons = document.querySelectorAll('.number-btn');
const displayContent = document.querySelector('.display-content');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('.equals-btn');
const clearButton = document.querySelector('.clear-btn');

numberButtons.forEach(numbersFunction, this);
operatorButtons.forEach(operatorFunction, this);


clearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = '';
    displayContent.textContent = '';
})


equalsButton.addEventListener('click', () => {
    num2 = Number(displayContent.textContent);
    operate(operator, num1, num2);
    operator = '';
    equals = 'engaged';
})

function numbersFunction(btn) {

    btn.addEventListener('click', () => {
        toggleOperators('on');
        if (operatorStatus === 'engaged' || equals === 'engaged') {
            displayContent.textContent = '';
            operatorStatus = 'disengaged';
            equals = 'disengaged';
        }
            displayContent.textContent += btn.textContent;
    })
    equals = 'disengaged';
}

function operatorFunction(btn) {
    btn.addEventListener('click', () => {
        if (operator === '') {
            num1 = Number(displayContent.textContent);
        } else {
            num2 = Number(displayContent.textContent);
            operate(operator, num1, num2);
        }
        operator = btn.textContent;
        toggleOperators('off');
        operatorStatus = 'engaged';
    })
}

function toggleOperators(command) {
    operatorButtons.forEach((btn) => {
        if (command === 'on') {
            btn.disabled = false;
        } else if (command === 'off') {
            btn.disabled = true;
        }
    }
    )
}

function add(operand1, operand2) {
    let result = operand1 + operand2;
    displayContent.textContent = result;
    num1 = result;
}

function subtract(operand1, operand2) {
    let result = operand1 - operand2;
    displayContent.textContent = result;
    num1 = result;
}

function multiply(operand1, operand2) {
    let result = operand1 * operand2;
    displayContent.textContent = result;
    num1 = result;
}

function divide(operand1, operand2) {
    if (operand2 === 0) {
        displayContent.textContent = 'How could you?!';
        num1 = 0;
        num2 = 0;
        operator = '';
    } else {
        let result = operand1 / operand2;
        displayContent.textContent = result;
        num1 = result;
    }
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-': 
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;    
    }
}


