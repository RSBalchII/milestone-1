const current = "";
const operation = "";
const result = "";

function number(num) {
    current += num;
    document.getElementById("display").value = current;
}

function operation(op) {
    if (current !== "") {
        if (result !== "") {
            calculate();
        }
        operation = op;
        result = current;
        current = "";
    }
}

function calculate() {
    if (current !== "" && result !== "") {
        switch(operation) {
            case '+':
                current = parseFloat(result) + parseFloat(current);
                break;
            case '-':
                current = parseFloat(result) - parseFloat(current);
                break;
            case '*':
                current = parseFloat(result) * parseFloat(current);
                break;
            case '/':
                current = parseFloat(result) / parseFloat(current);
                break;
            default:
                break;
        }
        document.getElementById("display").value = current;
        result = "";
    }
}

function clearDisplay() {
    current = "";
    operation = "";
    result = "";
    document.getElementById("display").value = "";
}