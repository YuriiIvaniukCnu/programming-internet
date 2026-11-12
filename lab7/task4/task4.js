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

class ElectricCar extends Car {
    constructor(brand, model, year, battery) {
        super(brand, model, year);
        this.battery = battery;
    }

    charge() {
        return `${this.brand} ${this.model} заряджається... Батарея: ${this.battery} kWh`;
    }
}

document.getElementById("infoButton").addEventListener("click", () => {
    const brand = document.getElementById("brand").value.trim();
    const model = document.getElementById("model").value.trim();
    const year = document.getElementById("year").value;
    const battery = document.getElementById("battery").value;
    const infoOutput = document.getElementById("infoOutput");
    const chargeOutput = document.getElementById("chargeOutput");

    if (brand === "" || model === "" || year === "" || battery === "") {
        infoOutput.textContent = "Заповніть усі поля";
        chargeOutput.textContent = "";
        return;
    }

    const car = new ElectricCar(brand, model, year, battery);
    infoOutput.textContent = car.info();
    chargeOutput.textContent = car.charge();
});