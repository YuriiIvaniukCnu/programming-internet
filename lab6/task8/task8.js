const text = document.getElementById("text");
const output = document.getElementById("output");

function removeVowels(str) {
    return str.replace(/[aeiouаеєиіїоуюя]/gi, "");
}

document.getElementById("removeButton").addEventListener("click", () => {
    output.value = removeVowels(text.value);
});