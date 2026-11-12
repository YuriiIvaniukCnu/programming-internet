const text = document.getElementById("text");
const symbol = document.getElementById("symbol");
const output = document.getElementById("output");

function countSymbol(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

document.getElementById("countButton").addEventListener("click", () => {
    if (symbol.value.length !== 1) {
        output.value = "Введіть один символ";
        return;
    }

    output.value = countSymbol(text.value, symbol.value);
});