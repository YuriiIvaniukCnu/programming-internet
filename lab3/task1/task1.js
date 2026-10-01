let side = document.getElementById("side");

side.addEventListener("input", () => {
    area.value = side.value * side.value;
})