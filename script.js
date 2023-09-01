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
const decimalButton = document.querySelector('.decimal-btn');
const backspaceButton = document.querySelector('.backspace-btn');

numberButtons.forEach(numbersFunction, this);
operatorButtons.forEach(operatorFunction, this);

//backspace button
backspaceButton.addEventListener('click', () => {
    let newString = displayContent.textContent.slice(0, -1);
    displayContent.textContent = newString;
});

//decimal button
decimalButton.addEventListener('click', () => {
    if (operatorStatus === 'engaged') {
        displayContent.textContent = '';
        displayContent.textContent += decimalButton.textContent;
        toggleOperators('off');
        operatorStatus = 'disengaged';
    } else if (displayContent.textContent.includes('.')) {
        decimalButton.disabled = true;
    } else {
        displayContent.textContent += decimalButton.textContent;
    }
    equalsStatus = 'disengaged';
    operatorStatus = 'disengaged';
})

//clear button
clearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    operator = '';
    displayContent.textContent = '';
    equalsStatus = 'disengaged';
    operatorStatus = 'disengaged';
})


equalsButton.addEventListener('click', () => {
    num2 = Number(displayContent.textContent);
    operate(operator, num1, num2);
    operator = '';
    equalsStatus = 'engaged';
    operatorStatus = 'engaged';
})

function numbersFunction(btn) {
    btn.addEventListener('click', () => {
        toggleOperators('on');
        if (operatorStatus === 'engaged' || equalsStatus === 'engaged') {
            displayContent.textContent = '';
            operatorStatus = 'disengaged';
            equalsStatus = 'disengaged';
        }
            displayContent.textContent += btn.textContent;
    })
    equalsStatus = 'disengaged';
}

function operatorFunction(btn) {
    btn.addEventListener('click', () => {
        decimalButton.disabled = false;
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
    let result = Math.round((operand1 + operand2) * 100000) / 100000;
    displayContent.textContent = result;
    num1 = result;
}

function subtract(operand1, operand2) {
    let result = Math.round((operand1 - operand2) * 100000) / 100000;
    displayContent.textContent = result;
    num1 = result;
}

function multiply(operand1, operand2) {
    let result = Math.round((operand1 * operand2) * 100000) / 100000;
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
        let result = Math.round((operand1 / operand2) * 100000) / 100000;
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

//keyboard functionality
window.addEventListener('keyup', function(e) {
    e.preventDefault();
    let currentKey = document.getElementById(`btn-${e.key}`).click();
})


