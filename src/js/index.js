// quando o botão for clicado eu quero que 

function toggleDarkMode() {
    var pokeCards = document.querySelectorAll(".poke-card");
    var body = document.getElementById("body");
    var onOff = body.classList[0];
    var img = document.getElementById("img-button")

    if (img.getAttribute("src") === "src/imagens/sun.png") {

        img.style.opacity = "0";

        setTimeout(() => {
            img.src = "src/imagens/moon.png";
            img.style.opacity = "1";
        }, 500);
    } else if (img.getAttribute("src") === "src/imagens/moon.png") {

        img.style.opacity = "0";

        setTimeout(() => {
            img.src = "src/imagens/sun.png";
            img.style.opacity = "1";
        }, 500);
    }
    console.log(img);

    if (onOff == undefined) {
        body.classList.add("dark-mode");
    } else if (onOff === "dark-mode") {
        body.classList.remove("dark-mode");
    }

    if (pokeCards[0].classList.contains("dark-mode")) {
        pokeCards.forEach(function (card) {
            card.classList.remove("dark-mode");
        });
    } else {
        pokeCards.forEach(function (card) {
            card.classList.add("dark-mode");
        });
    }
}

