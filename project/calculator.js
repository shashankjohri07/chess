const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = evaluateExpression(display.value);
        display.value = result;
    } catch (error) {
        alert("Error: Invalid Expression");
    }
}

function evaluateExpression(expression) {
    // Basic validation and evaluation logic
    const validCharacters = /^[0-9+\-*/.()]*$/;
    if (!validCharacters.test(expression)) {
        throw new Error("Invalid characters in expression");
    }
    return new Function(`return (${expression})`)();
}
