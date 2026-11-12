const text = document.getElementById("text");
const output = document.getElementById("output");

function replaceJavaScript(str) {
    return str.replace(/\bJavaScript\b/g, "JS");
}

document.getElementById("replaceButton").addEventListener("click", () => {
    output.value = replaceJavaScript(text.value);
});