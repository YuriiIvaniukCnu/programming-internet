const logo = document.getElementById("logo");
const circle = document.getElementById("circle");
const tag = document.getElementById("tag");
const text = document.getElementById("text");
const status = document.getElementById("status");

const title = "Інженерія програмного забезпечення";

let running = false;
let animationId = 0;
let lastTime = null;
let elapsed = 0;

let tagX = 20;
let tagY = 20;
let speedX = 0.15;
let speedY = 0.1;

const digits = [];
let nextDigitTime = 0;

function animateCircle() {
    const size = 110 + 30 * Math.sin(elapsed / 400);

    circle.style.width = size + "px";
    circle.style.height = size + "px";
    circle.style.left = 250 - size / 2 + "px";
    circle.style.top = 120 - size / 2 + "px";
    circle.style.fontSize = size / 3 + "px";
    circle.style.background = "hsl(" + (elapsed / 20) % 360 + ", 70%, 45%)";
}

function animateTag(dt) {
    const maxX = logo.clientWidth - tag.offsetWidth;
    const maxY = logo.clientHeight - tag.offsetHeight;

    tagX += speedX * dt;
    tagY += speedY * dt;

    if (tagX < 0) {
        tagX = 0;
        speedX = -speedX;
    }
    if (tagX > maxX) {
        tagX = maxX;
        speedX = -speedX;
    }
    if (tagY < 0) {
        tagY = 0;
        speedY = -speedY;
    }
    if (tagY > maxY) {
        tagY = maxY;
        speedY = -speedY;
    }

    tag.style.left = tagX + "px";
    tag.style.top = tagY + "px";
}

function animateText() {
    const t = elapsed % 10000;
    let count;

    if (t < 4000) {
        count = Math.ceil(title.length * t / 4000);
    } else if (t < 6000) {
        count = title.length;
    } else if (t < 9000) {
        count = Math.ceil(title.length * (9000 - t) / 3000);
    } else {
        count = 0;
    }

    text.textContent = title.slice(0, count);
}

function animateDigits(dt) {
    if (elapsed >= nextDigitTime) {
        const element = document.createElement("span");
        element.textContent = Math.random() < 0.5 ? "0" : "1";
        element.style.position = "absolute";
        element.style.left = Math.random() * 480 + "px";
        element.style.color = "lime";
        logo.prepend(element);

        digits.push({ element: element, y: -20 });
        nextDigitTime = elapsed + 300;
    }

    for (const digit of digits) {
        digit.y += 0.08 * dt;
        digit.element.style.top = digit.y + "px";
        digit.element.style.opacity = 1 - digit.y / 300;
    }

    while (digits.length > 0 && digits[0].y > 300) {
        digits[0].element.remove();
        digits.shift();
    }
}

function draw(dt) {
    animateCircle();
    animateTag(dt);
    animateText();
    animateDigits(dt);
}

function frame(time) {
    const dt = lastTime === null ? 0 : time - lastTime;
    lastTime = time;
    elapsed += dt;

    draw(dt);
    animationId = requestAnimationFrame(frame);
}

logo.addEventListener("click", () => {
    running = !running;

    if (running) {
        lastTime = null;
        animationId = requestAnimationFrame(frame);
        status.textContent = "Анімація працює. Клікніть по логотипу, щоб зупинити";
    } else {
        cancelAnimationFrame(animationId);
        status.textContent = "Анімацію зупинено. Клікніть по логотипу, щоб продовжити";
    }
});

draw(0);