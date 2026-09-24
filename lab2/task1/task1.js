let timeDisplay = document.getElementById('timeDisplay');

function fetchTime() {
    let now = new Date();
    let text = now.getFullYear() + "#" + (now.getMonth() + 1) + "#" + now.getDate() +
     "-" + now.getHours() + "#" + now.getMinutes() + "#" + now.getSeconds();
    timeDisplay.textContent = text;
}
fetchTime();
setInterval(fetchTime, 1000);