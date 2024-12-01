let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return; // Avoid multiple leading zeros
    if (currentInput === '0' && number !== '.') {
        currentInput = number; // Replace leading zero
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return; // Allow '-' as first character
    if (isNaN(currentInput.slice(-1))) return; // Prevent multiple operators in a row
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        let expression = currentInput.replace(/%/g, '/100');
        currentInput = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        alert("Invalid input");
        clearDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
