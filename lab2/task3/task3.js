let matrix = []

function buildMatrix() {
    let rows = Number(document.getElementById("rows-number").value);
    let cols = Number(document.getElementById("columns-number").value);
    let table = document.getElementById("tableMatrix");

    document.getElementById("sumDisplay").value = "";

    matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(11 * (i + 1) + (j + 1));
        }
        matrix.push(row);
    }

    table.innerHTML = "";
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            td.textContent = matrix[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function calculateMatrix() {
    let display = document.getElementById("sumDisplay");
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        result += matrix[i][2];
    }

    display.value = result;
}