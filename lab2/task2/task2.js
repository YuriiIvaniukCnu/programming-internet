let display = document.getElementById("calculator-display");

function append(value) {
    display.value += value;
    console.log("Appended value: " + value);
}

function clearDisplay() {
    display.value = " ";
    console.log("Display cleared");
}

function calculate() {
    try {
        const expression = display.value
            .replaceAll("×", "*")
            .replaceAll("÷", "/");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }

    console.log("Calculate");
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    console.log("Last character deleted");
}

