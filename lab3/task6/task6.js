const subtitle = document.getElementById('subtitle');
const userInput = document.getElementById('user-input');
const textStyle = document.getElementById('text-style');

const START_TEXT = 'Перейти в кінцевий стан';
const END_TEXT = 'Перейти в початковий стан';


const subtitleStart = subtitle.innerHTML;

function toggleSubtitle(button) {
    if (button.textContent === START_TEXT) {
        subtitle.innerHTML += ' <span>(Важливо!)</span>';
        button.textContent = END_TEXT;
    } else {
        subtitle.innerHTML = subtitleStart;
        button.textContent = START_TEXT;
    }
}
function toggleInput(button) {
    if (button.textContent === START_TEXT) {
        userInput.value = 'Заповнено автоматично';
        button.textContent = END_TEXT;
    } else {
        userInput.value = 'Початкове значення';
        button.textContent = START_TEXT;
    }
}
у
function toggleTextStyle(button) {
    if (button.textContent === START_TEXT) {
        textStyle.style.fontSize = '24px';
        textStyle.style.fontWeight = 'bold';
        button.textContent = END_TEXT;
    } else {
        textStyle.style.fontSize = '';
        textStyle.style.fontWeight = '';
        button.textContent = START_TEXT;
    }
}