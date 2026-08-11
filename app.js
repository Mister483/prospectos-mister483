
const clicky = document.querySelectorAll(".click\\!");

clicky.forEach(element => {
    element.addEventListener("click", () => {
        const clickyHidden = element.nextElementSibling;

        if (clickyHidden && clickyHidden.matches(".click\\!hidden")) {
            clickyHidden.classList.toggle("hidden");
        }
    });
});