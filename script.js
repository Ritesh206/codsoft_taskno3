let display = document.getElementById('display');
let buttons = document.querySelectorAll('.grid-item');
let operand1 = '';
let operator = '';
let operand2 = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '&lt;':
                backspace();
                break;
            case '=':
                calculateResult();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                operator = value;
                operand1 = display.value;
                display.value = '';
                break;
            default:
                display.value += value;
        }
    });
});

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operator = '';
    operand2 = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    operand2 = display.value;
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }

    display.value = result;
}