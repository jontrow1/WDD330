function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
      return numberFloat;
    } else return 0;
}

function updateTotal(value) {
    const outputElement = document.getElementById('answer');
    outputElement.innerHTML = 'Total: ' + value;
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function calculate(operation) {
    const total = operation(
      getNum('inputNum1'),
      getNum('inputNum2')
    );
    updateTotal(total);
}