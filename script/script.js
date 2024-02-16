"use strict";
function generate() {
    const url = "https://api.adviceslip.com/advice";
    fetch(url, { cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => {
        const idText = document.getElementById("advice-id");
        const adviceText = document.getElementById("advice");
        const { id, advice } = data.slip;
        if (idText)
            idText.innerHTML = id.toString();
        if (adviceText)
            adviceText.innerHTML = advice;
    });
}
window.addEventListener("load", () => {
    generate();
    const btn = document.getElementById("generate");
    if (btn) {
        btn.addEventListener("click", generate);
    }
});
