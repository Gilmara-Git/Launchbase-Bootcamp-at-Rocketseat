
const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")


for (let card of cards) {


    card.addEventListener("click", function () {
        cardId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        document.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`



    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    document.querySelector(".modal").classList.remove("xl")

})


document.querySelector(".maximize-modal").addEventListener("click", function () {

    const max = document.querySelector(".xl")
    const modalMax = document.querySelector(".modal").contains(max)


    if (modalMax) {

        document.querySelector(".modal").classList.remove("xl")

    } else {

        document.querySelector(".modal").classList.add("xl")
    }

})


/*  const max = document.querySelector(".xl")
const modalMax = document.querySelector(".modal").contains(max)
console.log(modalMax)



const act = document.querySelector(".active")
const containAct =  document.querySelector(".modal-overlay").contains(act)
console.log(containAct)


---------------------------------------------------------------------
'Rafael Aragao'

tem uma função chamada toggle que resume isso a uma linha, mas pediram para gente fazer com contains
Fica
document.querySelector('.maximized-modal').addEventListener("click", function(){
modal.classList.toggle("maximize"); //Se tiver a classe maximize ele tira, se não tiver ele coloca a classe maximize no modal ;)
)}*/


/*   Assim funciona com o toggle


document.querySelector(".maximize-modal").addEventListener("click", function (){


document.querySelector(".modal").classList.toggle("xl")


})*/


