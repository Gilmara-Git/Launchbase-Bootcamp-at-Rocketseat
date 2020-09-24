

const currentPage = location.pathname

const menuItems =  document.querySelectorAll("header .links a")

for(let item of menuItems){
    
if(currentPage.includes(item.getAttribute("href"))){
        
    item.classList.add("active")
}

}


// algorithm to calculate pagination based on the number of records in the DB
// [1,2..., 12,"13",14,... 23,24]

//totalPages and selectedPage will come from DB, we will grab data from HTML(dataset)
function paginate(selectedPage, totalPages) {

    let pages= [], 
    previousPageShown
    
    const secondPage = 2

    for(let currentPage = 1; currentPage <= totalPages; currentPage++ ) {  
        
            const twoInitPages = currentPage == 1 || currentPage == secondPage
            const twoEndPages = currentPage == totalPages - 1  || currentPage == totalPages
            let pageBeforeSelected = currentPage >= selectedPage - 1
            let pageAfterSelected = currentPage <= selectedPage + 1

        if(twoInitPages || twoEndPages || pageBeforeSelected && pageAfterSelected) {
            
                if(previousPageShown && currentPage - previousPageShown > 2) { 

                    pages.push("...")
                }
                      
                if(previousPageShown && currentPage - previousPageShown == 2 ) { 

                    pages.push(currentPage - 1)
                }
                                              
                    pages.push(currentPage)
                    previousPageShown = currentPage
                }                   
                                                     
}
                     
     return pages     

}

// Get pagination from HTML - Index page
const pagination = document.querySelector(".pagination")

function createPagination(pagination) {
    const selectedpage  = +pagination.dataset.page
    const totalpages = +pagination.dataset.total
    const filter = pagination.dataset.filter
    
    const pages = paginate(selectedpage, totalpages)
    console.log(pages)
    
    let element = ""
    
        for(let page of pages) {
            if(String(page).includes("...")) {
                element += `<span>${page}</span>`        
            }else { 
                if(filter) {
                    element += `<a href="?page=${page}&filter=${filter}">${page}</a>`
                } else {  
        
                element += `<a href="?page=${page}">${page}</a>`
            }
        } 
        }
        
        
        pagination.innerHTML = element

}

if(pagination) {
    
    createPagination(pagination)

}

 



 
     