const answers = {
    q1: ["Саурон"],
    q2: ["9"],
    q3: ["Гондор", "Роган"],
    q4: ["Гендальф", "Ґімлі", "Леголас"],
    q5: ["9"],
    q6: ["Саруман", "Гендальф"],
    q7: ["3"]
}

function getRadio(name) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? [el.value] : [];
}

function getCheckbox(name) {
    return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(o => o.value);
}

function countScore(chosen, correct) {
    let score = 0;
    for (const value of chosen) {
        if (correct.includes(value)) {
            score++;
        }
        else {
            score--;
        }
    }
    if (score < 0) {
        score = 0;
    }
    return score;
}

function checkTest() {
    const q1 = getRadio("q1");
    const q2 = getRadio("q2");
    const q3 = getCheckbox("q3");
    const q4 = getCheckbox("q4");
    const q5 = [document.getElementById("q5").value];
    const q6 = [...document.querySelector('select[name="q6"]').selectedOptions].map(o => o.value);
    const q7 = [document.getElementById("q7").value.trim().toLowerCase()];

    let score = 0;
    const s1 = countScore(q1, answers.q1);
    const s2 = countScore(q2, answers.q2);
    const s3 = countScore(q3, answers.q3);
    const s4 = countScore(q4, answers.q4);
    const s5 = countScore(q5, answers.q5);
    const s6 = countScore(q6, answers.q6);
    const s7 = countScore(q7, answers.q7);

    score = s1 + s2 + s3 + s4 + s5 + s6 + s7;

    const chosen = [q1, q2, q3, q4, q5, q6, q7];
    const scores = [s1, s2, s3, s4, s5, s6, s7];
    const questions = document.querySelectorAll("#test > p");

    let html = "<table border='1'>";
    html += "<tr><th>Питання</th><th>Обрані відповіді</th><th>Бал</th></tr>";

    for (let i = 0; i < 7; i++) {
        html += `<tr><td>${questions[i].textContent}</td><td>${chosen[i].join(", ")}</td><td>${scores[i]}</td></tr>`;
    }

    html += "</table>";
    html += `<p>Загальний бал: ${score}</p>`;

    document.getElementById("results").innerHTML = html;
}