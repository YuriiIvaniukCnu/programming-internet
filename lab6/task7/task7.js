const text = document.getElementById("text");
const maxLength = document.getElementById("maxLength");
const output = document.getElementById("output");

function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength - 3) + "...";
}

document.getElementById("truncateButton").addEventListener("click", () => {
    const length = Number(maxLength.value);

    if (maxLength.value === "" || !Number.isInteger(length) || length < 3) {
        output.value = "Довжина має бути цілим числом від 3";
        return;
    }

    output.value = truncate(text.value, length);
});