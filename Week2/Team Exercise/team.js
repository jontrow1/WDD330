/*function insertInput() {
    const text = document.getElementById('thisInput').value;
    const num = parseInt(text);
    if (num !== NaN) {
        document.getElementById('thisBox').innerHTML = sumNum(num);
    }
}

function sumNum(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}*/

function addButton() {
    const num1 = parseFloat(document.getElementById('thisInput1').value);
    const num2 = parseFloat(document.getElementById('thisInput2').value);
    if ((num1 !== NaN) & (num2 !== NaN)) {
        const total = num1 + num2;
        document.getElementById('thisBox').innerHTML = total;
    }
}