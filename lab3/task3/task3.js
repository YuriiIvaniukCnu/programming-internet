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

function toggleMode() {
    const engineering = document.getElementById('engineeringButtons');
    const toggleButton = document.getElementById('bToggleMode');

    if (engineering.style.display === 'none') {
        engineering.style.display = 'grid';
        toggleButton.textContent = 'Переключити на Простий';
    } else {
        engineering.style.display = 'none';
        toggleButton.textContent = 'Переключити на Інженерний';
    }
}

function applyToLastNumber(func) {
    const value = operations.value;

    let start = value.length;
    while (start > 0 && '0123456789.'.includes(value[start - 1])) {
        start--;
    }

    if (start === value.length) return;

    let before = value.slice(0, start);
    let number = Number(value.slice(start));

    const isNegative = before.endsWith('-') &&
        (before.length === 1 || '+-×÷'.includes(before.at(-2)));

    if (isNegative) {
        before = before.slice(0, -1);
        number = -number;
    }

    const result = Math.round(func(number) * 1e10) / 1e10;

    if (isNaN(result)) {
        output.value = 'Помилка';
        return;
    }

    if (result < 0) {
        operations.value = before + '(' + result + ')';
    } else {
        operations.value = before + result;
    }
}

function squareRoot() {
    applyToLastNumber(x => Math.sqrt(x));
}

function square() {
    applyToLastNumber(x => x * x);
}

function sine() {
    applyToLastNumber(x => Math.sin(x * Math.PI / 180));
}

function cosine() {
    applyToLastNumber(x => Math.cos(x * Math.PI / 180));
}