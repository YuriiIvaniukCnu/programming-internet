const text = document.getElementById("text");
const symbol = document.getElementById("symbol");
const output = document.getElementById("output");

function findIndex(str, char) {
    return str.indexOf(char);
}

document.getElementById("findButton").addEventListener("click", () => {
    if (symbol.value.length !== 1) {
        output.value = "Введіть один символ";
        return;
    }

    output.value = findIndex(text.value, symbol.value);
});