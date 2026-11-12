const text = document.getElementById("text");
const output = document.getElementById("output");

const spamWords = ["100% безкоштовно", "збільшення продажів", "тільки сьогодні", "не видаляйте"];

function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    for (const word of spamWords) {
        if (lowerStr.includes(word)) {
            return true;
        }
    }
    return false;
}

document.getElementById("checkButton").addEventListener("click", () => {
    output.value = checkSpam(text.value);
});