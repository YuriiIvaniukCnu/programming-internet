const train = document.getElementById("train");

document.getElementById("trainButton").addEventListener("click", () => {
    const start = Date.now();

    const timer = setInterval(() => {
        const timePassed = Date.now() - start;

        if (timePassed >= 2000) {
            clearInterval(timer);
            return;
        }

        train.style.left = timePassed / 5 + "px";
    }, 20);
});

function animate({ timing, draw, duration }) {
    const start = performance.now();

    requestAnimationFrame(function step(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
            timeFraction = 1;
        }

        const progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(step);
        }
    });
}

function linear(timeFraction) {
    return timeFraction;
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}

function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}

function back(timeFraction) {
    const x = 1.5;
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; ; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}

function elastic(timeFraction) {
    const x = 1.5;
    return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
}

function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    };
}

function makeEaseInOut(timing) {
    return function (timeFraction) {
        if (timeFraction < 0.5) {
            return timing(2 * timeFraction) / 2;
        }
        return (2 - timing(2 * (1 - timeFraction))) / 2;
    };
}

const progressBar = document.getElementById("progress");

document.getElementById("progressButton").addEventListener("click", () => {
    animate({
        duration: 1000,
        timing: linear,
        draw(progress) {
            progressBar.style.width = progress * 100 + "%";
        }
    });
});

const box = document.getElementById("box");
const timings = {
    linear: linear,
    quad: quad,
    circ: circ,
    back: back,
    bounce: bounce,
    elastic: elastic,
    bounceEaseOut: makeEaseOut(bounce),
    bounceEaseInOut: makeEaseInOut(bounce)
};

document.getElementById("boxButton").addEventListener("click", () => {
    const timing = timings[document.getElementById("timing").value];

    animate({
        duration: 2000,
        timing: timing,
        draw(progress) {
            box.style.left = progress * 450 + "px";
        }
    });
});

const field = document.getElementById("field");
const ball = document.getElementById("ball");

document.getElementById("ballButton").addEventListener("click", () => {
    const to = field.clientHeight - ball.clientHeight;

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            ball.style.top = to * progress + "px";
        }
    });
});

const textArea = document.getElementById("textArea");
const text = "JavaScript-анімації дозволяють плавно змінювати властивості елементів сторінки з часом. " +
    "Для цього використовують setInterval або requestAnimationFrame.";

document.getElementById("textButton").addEventListener("click", () => {
    animate({
        duration: 5000,
        timing: bounce,
        draw(progress) {
            textArea.value = text.slice(0, Math.ceil(progress * text.length));
        }
    });
});