
const recipes = require("../data")

        
//exports.index = function(req, res){

    // const sixrecipes = recipes.filter((recipe , index) =>{

    //     let i;

    //     for(let i=index; i < 6; i++ )  
    //     return { 
    //         ...recipe, id:index 
    //     }
      
              
    // } ) 
    //console.log(sixrecipes)       
        //res.render("index", {recipes})
   
///}

// exports.sobre = function(req, res){

//     return res.render("sobre")

// }

// exports.receitas = function(req, res){

//     res.render("receitas", {recipes})
// }

exports.show = function(req, res){
    
    const recipeIndex = req.params.index        

    res.render("receita_detalhes", {details: recipes[recipeIndex]})
}

exports.not_found = function(req, res){

    return res.status(404).render("not-found")
 }
 