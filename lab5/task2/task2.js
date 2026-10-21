const fields = [
    {
        id: "email",
        regex: /^[^\s@]+@pnu\.edu\.ua$/,
        hint: "Пошта має закінчуватися на @pnu.edu.ua"
    },
    {
        id: "fullName",
        regex: /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ]+ [A-ZА-ЯІЇЄҐ]+$/,
        hint: "Лише літери: ім'я з великої літери, ПРІЗВИЩЕ великими"
    },
    {
        id: "login",
        regex: /^[a-zA-Z]+$/,
        hint: "Лише латинські літери"
    },
    {
        id: "password",
        regex: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[_\-!@#$%^&*]).{8,}$/,
        hint: "Мінімум 8 символів: латинська буква, цифра і спецсимвол _-!@#$%^&*"
    },
    {
        id: "postalCode",
        regex: /^\d{5}$/,
        hint: "Індекс має складатися з 5 цифр"
    }
];

document.querySelector("button").addEventListener("click", function () {
    for (const field of fields) {
        const input = document.getElementById(field.id);
        const mark = document.getElementById(field.id + "Mark");

        if (field.regex.test(input.value)) {
            input.className = "valid";
            mark.className = "valid";
            mark.textContent = "✔";
        } else {
            input.className = "invalid";
            mark.className = "invalid";
            mark.textContent = field.hint;
        }
    }
});