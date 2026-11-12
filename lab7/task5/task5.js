class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

document.getElementById("addButton").addEventListener("click", () => {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const output = document.getElementById("output");

    if (a === "" || b === "") {
        output.value = "Введіть обидва числа";
        return;
    }

    output.value = MathHelper.add(Number(a), Number(b));
});