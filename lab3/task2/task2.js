const output = document.getElementById('displayOutput');
const operations = document.getElementById('displayOperations');

function calculateResult() {
    formula = '';
    for (let i = 0; i < operations.value.length; i++) {
        if (operations.value[i] === '÷') {
            formula += '/';
        }
        else if (operations.value[i] === '×') {
            formula += '*';
        }
        else {
            formula += operations.value[i];
        }
        
    }
    console.log(formula);
    output.value = eval(formula);
}

function clearDisplay() {
    operations.value = '';
    output.value = '';
}

function deleteLast() {
    operations.value = operations.value.slice(0, -1);
}

function addCharacter(char) {
    operations.value += char;
}    

function changeSign() {
    const value = operations.value;
    let start = value.length;
    while (start > 0 && '0123456789.'.includes(value[start - 1])) {
        start--;
    }

    if (start === value.length) return;

    const before = value.slice(0, start);
    const number = value.slice(start);

    const isNegative = before.endsWith('-') &&
        (before.length === 1 || '+-×÷'.includes(before.at(-2)));

    if (isNegative) {
        operations.value = before.slice(0, -1) + number; 
    } else {
        operations.value = before + '-' + number; 
    }
}