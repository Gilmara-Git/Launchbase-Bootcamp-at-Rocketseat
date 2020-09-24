
const currentPage = location.pathname

const menuItems =  document.querySelectorAll("header .links a")

for(let item of menuItems){
    
if(currentPage.includes(item.getAttribute("href"))){
        
    item.classList.add("active")
}

}


function paginate(selectedPage, totalPages){
//console.log(selectedPage)
//console.log(totalPages)
let  pages = [], 
    previousShownPage

    //[1, ... 13, 14, 15, 16, 17 ..., 20] array of pages

  for(let currentPage=1; currentPage<= totalPages; currentPage++){
        
        const firstLastPages = currentPage==1 || currentPage==totalPages
        const twoPagesBeforeSelectedPage = currentPage >= selectedPage -2 
        const twoPagesAfterSelectedPage = currentPage <= selectedPage +2

        if(firstLastPages || twoPagesBeforeSelectedPage && twoPagesAfterSelectedPage) {
           
            if(previousShownPage && currentPage - previousShownPage > 2 ) {                 
                pages.push("...")

             }         
            
             if(previousShownPage && currentPage - previousShownPage == 2 ) {                 
                pages.push(previousShownPage + 1)

             }
                pages.push(currentPage)                
                previousShownPage = currentPage // previousPage get the value of the currentPage                   
    }   
}
                return pages
}



const pagination = document.querySelector(".pagination")

function createPagination(pagination){
const page = +pagination.dataset.page
const total = +pagination.dataset.total 
const filter = pagination.dataset.filter
const pages =  paginate(page, total)  // here returns an array of pages


let elements =""
for (let page of pages) {

    if(String(page).includes("...")) { 
        elements += `<span>${page}</span>`

        } else {

            if(filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
        } else {

            elements += `<a href="?page=${page}">${page}</a>`
    }
    }
}
        pagination.innerHTML = elements;
}


if (pagination) {

    createPagination(pagination)
}