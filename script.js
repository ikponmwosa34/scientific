const display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    display.innerText += ` ${operator} `;
}

function appendFunction(func) {
    display.innerText += `${func}(`;
}

function calculate() {
    try {
        let expression = display.innerText
            .replace(/\^/g, '**')
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log10');

        const result = eval(expression);
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

function clearDisplay() {
    display.innerText = '';
}