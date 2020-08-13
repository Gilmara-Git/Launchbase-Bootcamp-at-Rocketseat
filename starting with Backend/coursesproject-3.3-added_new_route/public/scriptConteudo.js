

const cards = document.querySelectorAll(".card")

for (let card of cards) {

    card.addEventListener("click", function () {
        cardId = card.getAttribute("id")
        window.location.href=`/course/${cardId}`

        })
}



