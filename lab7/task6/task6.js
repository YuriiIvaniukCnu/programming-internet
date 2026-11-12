class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    static hasEqualSides(width, height) {
        return width === height;
    }
}

const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const result = document.getElementById("result");

document.getElementById("infoButton").addEventListener("click", () => {
    const width = Number(widthInput.value);
    const height = Number(heightInput.value);

    if (widthInput.value === "" || heightInput.value === "" || width <= 0 || height <= 0) {
        result.innerHTML = "<p>Сторони мають бути додатними числами</p>";
        return;
    }

    let figure;
    let name;
    if (Square.hasEqualSides(width, height)) {
        figure = new Square(width);
        name = "Квадрат";
    } else {
        figure = new Rectangle(width, height);
        name = "Прямокутник";
    }

    result.innerHTML = `<p>Фігура: ${name}</p>
        <p>Ширина: ${figure.width}, висота: ${figure.height}</p>
        <p>Площа: ${figure.getArea()}</p>
        <p>Периметр: ${figure.getPerimeter()}</p>
        <p>Усі сторони рівні: ${Square.hasEqualSides(width, height) ? "так" : "ні"}</p>`;
});

document.getElementById("clearButton").addEventListener("click", () => {
    widthInput.value = "";
    heightInput.value = "";
    result.innerHTML = "";
});