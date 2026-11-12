const text = document.getElementById("text");
const output = document.getElementById("output");
const palindromeOutput = document.getElementById("palindromeOutput");

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

function findPalindrome(str) {
    for (let start = 0; start < str.length; start++) {
        for (let end = start + 3; end <= str.length; end++) {
            const substring = str.slice(start, end);
            if (isPalindrome(substring)) {
                return substring;
            }
        }
    }
    return "";
}

function hasPalindrome(str) {
    return findPalindrome(str) !== "";
}

document.getElementById("checkButton").addEventListener("click", () => {
    output.value = hasPalindrome(text.value);
    palindromeOutput.value = findPalindrome(text.value);
});