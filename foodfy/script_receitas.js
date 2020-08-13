
const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const modalContent = document.querySelector(".modal-content")

for (let card of cards) {
    
    card.addEventListener("click", function (){
        
     /*Variables to catch the image, food name and food author of each card*/         
    let img = card.querySelector(".card-img img").src
    let foodName= card.querySelector(".card-info h6").textContent
    let author = card.querySelector(".card-info p").textContent

    modalOverlay.classList.add("active")
    
    /*document.querySelector(".modal-content").querySelector("img").src = img*/
    /*Then fill out the modal with these variables*/
    modalContent.querySelector("img").src = img
    modalContent.querySelector("h6").textContent = foodName
    modalContent.querySelector("p").textContent = author


    /* Como trazer as mesmas informacoes do card e carregar na modal usando OBJETO
    
       card.addEventListener("click", function (){    
        
        let dataCard = {

            img: card.getAttribute("id") ,
            foodName: card.querySelector("h6").innerHTML,
            foodAuthor: card.querySelector("p").innerHTML         
    
        }

            modalOverlay.classList.add("active")
            modalContent.querySelector("img").src= `assets/${dataCard.img}.png`
            modalContent.querySelector("h6").innerHTML = `${dataCard.foodName}`
            modalContent.querySelector("p").innerHTML = `${dataCard.foodAuthor}`

    

    })*/ 
      
    })
}

document.querySelector("button").addEventListener("click", function (){
modalOverlay.classList.remove("active")
modalContent.querySelector("img").src= ""
    
})

