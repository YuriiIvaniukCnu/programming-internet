const months = ["січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];

function formatNumber(number) {
    return String(number).padStart(2, "0");
}

// 2.1
function showCurrentDate() {
    const now = new Date();

    const dateText = "Дата: " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " року";
    const dayText = "День тижня: " + days[now.getDay()];
    const timeText = "Час: " + formatNumber(now.getHours()) + ":" + formatNumber(now.getMinutes());

    document.getElementById("dateOutput").innerHTML = dateText + "<br>" + dayText + "<br>" + timeText;
}

document.getElementById("dateButton").addEventListener("click", showCurrentDate);

// 2.2
function getLastDayOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

document.getElementById("lastDayButton").addEventListener("click", () => {
    const year = Number(document.getElementById("year").value);
    const month = Number(document.getElementById("month").value);
    const output = document.getElementById("lastDayOutput");

    if (!Number.isInteger(year) || year < 1 || !Number.isInteger(month) || month < 1 || month > 12) {
        output.value = "Введіть коректний рік і місяць";
        return;
    }

    output.value = getLastDayOfMonth(year, month) + " " + months[month - 1] + " " + year + " року";
});

// 2.3
function getSecondsInfo() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfNextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return {
        passed: Math.floor((now - startOfDay) / 1000),
        left: Math.ceil((startOfNextDay - now) / 1000)
    };
}

document.getElementById("secondsButton").addEventListener("click", () => {
    const info = getSecondsInfo();
    document.getElementById("passedOutput").value = info.passed;
    document.getElementById("leftOutput").value = info.left;
});