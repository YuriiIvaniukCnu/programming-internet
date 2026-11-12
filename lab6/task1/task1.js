const text = document.getElementById("text");
const output = document.getElementById("output");

function getLength(str) {
    return str.length;
}

document.getElementById("calculateButton").addEventListener("click", () => {
    output.value = getLength(text.value);
});