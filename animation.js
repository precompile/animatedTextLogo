const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*[].,-=;|'";
let interval = null;

document.querySelector("h1").onmouseover = event => {

    let iteration = 0;

    clearInterval(interval);

    event.target.classList.remove("gray");
    event.target.classList.add("white");

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((_letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
            setTimeout(() => {
                event.target.classList.remove("white");
                event.target.classList.add("gray");
            }, 500);
        }
        iteration += 1 / event.target.dataset.value.length;
    }, 30);
}