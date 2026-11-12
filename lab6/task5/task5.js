const text = document.getElementById("text");
const output = document.getElementById("output");

function swapPairs(str) {
    let result = "";
    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            result += str[i + 1] + str[i];
        }
        else {
            result += str[i];
        }
    }
    return result;
}

document.getElementById("swapButton").addEventListener("click", () => {
    output.value = swapPairs(text.value);
});