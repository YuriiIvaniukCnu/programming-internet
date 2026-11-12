const text = document.getElementById("text");
const upperOutput = document.getElementById("upperOutput");
const lowerOutput = document.getElementById("lowerOutput");

function changeCase(str) {
    return {
        upper: str.toUpperCase(),
        lower: str.toLowerCase()
    };
}

document.getElementById("changeButton").addEventListener("click", () => {
    const result = changeCase(text.value);
    upperOutput.value = result.upper;
    lowerOutput.value = result.lower;
});