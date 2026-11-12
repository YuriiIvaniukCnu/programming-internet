class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    info() {
        return `Авто: ${this.brand} ${this.model}, ${this.year} року.`;
    }
}

document.getElementById("infoButton").addEventListener("click", () => {
    const brand = document.getElementById("brand").value.trim();
    const model = document.getElementById("model").value.trim();
    const year = document.getElementById("year").value;
    const output = document.getElementById("output");

    if (brand === "" || model === "" || year === "") {
        output.textContent = "Заповніть усі поля";
        return;
    }

    const car = new Car(brand, model, year);
    output.textContent = car.info();
});