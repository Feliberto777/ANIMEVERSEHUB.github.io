document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector("input[type='search']");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", () => {
        const text = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(text)) {
                card.style.display = "";   // ⚡ mantiene tamaño normal
            } else {
                card.style.display = "none";
            }
        });
    });

});