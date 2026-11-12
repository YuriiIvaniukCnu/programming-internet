const secondsInput = document.getElementById("seconds");
const output = document.getElementById("output");

const now = new Date();
const time = {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
};

function formatNumber(number) {
    return String(number).padStart(2, "0");
}

function showTime(time) {
    output.value = formatNumber(time.hours) + ":" + formatNumber(time.minutes) + ":" + formatNumber(time.seconds);
}

function changeTime(time, seconds) {
    let total = time.hours * 3600 + time.minutes * 60 + time.seconds + seconds;
    while (total < 0) {
        total += 86400;
    }
    while (total >= 86400) {
        total -= 86400;
    }

    time.hours = Math.floor(total / 3600);
    time.minutes = Math.floor((total % 3600) / 60);
    time.seconds = total % 60;
}

document.getElementById("showButton").addEventListener("click", () => {
    showTime(time);
});

document.getElementById("changeButton").addEventListener("click", () => {
    const seconds = Number(secondsInput.value);

    if (secondsInput.value === "" || !Number.isInteger(seconds)) {
        output.value = "Введіть цілу кількість секунд";
        return;
    }

    changeTime(time, seconds);
    showTime(time);
});