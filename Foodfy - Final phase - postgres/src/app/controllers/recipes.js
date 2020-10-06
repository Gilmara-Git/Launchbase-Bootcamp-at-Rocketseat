const Recipe = require("../models/recipe")

module.exports = { 

 //Website functions

home(req, res) {

    const { filter } = req.query
    
    Recipe.all(filter, function(recipes){

        if(recipes=="") return res.render("not-found")

          return res.render("home", { foundRecipes: recipes, filter })
    })
               
},

showFromHomePage(req, res){
    
    const recipeIndex = req.params.index 
    Recipe.find(recipeIndex, function(recipe){
        res.render("receita_detalhes", {details: recipe} )

    })       

   
},

sobre(req, res){

    return res.render("sobre")

},

//Admin area  
index(req, res){

  let {  filter, page, limit } = req.query
  
  page = page || 1 
  limit = limit || 2
  let offset = limit * (page - 1 )

    const params = {

        filter,
        limit,
        offset,
        callback(recipes){
            if(recipes=="") return res.render("not-found")

            pagination = {

                page,
                total: Math.ceil(recipes[0].total/limit)
                
            }

            res.render("admin/recipes/index_admin", {sixrecipes: recipes, filter, pagination})

        }

    }

    Recipe.paginate(params)  
    
},


create(req, res){

    Recipe.allChefsSelectOne(function(chefsIdName){
        
    return res.render("admin/recipes/create_recipe", {listOfChefs: chefsIdName})

    })

},


show(req, res){

    const { index } = req.params
   
    Recipe.find(index, function(recipe){
        if(!recipe) return res.send("Recipe not found.")
      
        return res.render("admin/recipes/show_admin", {recipe})
     })

}, 

edit(req, res){

    const { id } = req.params

    Recipe.find(id, function(recipe){
        if(!recipe) return res.send("Recipe not found.")
        
        Recipe.allChefsSelectOne(function(chefIdName){
            //console.log(recipe)

        return res.render("admin/recipes/edit_admin", {recipe, listOfChefs: chefIdName})

        })
        
    })
        
       
},          

 post(req, res){

    const keys = Object.keys(req.body)  

    for (let key of keys) {
           
        if(req.body[key] == "") return res.send("Please fill out all fields")
        
}
     Recipe.create(req.body, function(recipe){
        // console.log(recipe)

        res.redirect("/admin/receitas")
     })                

        },                


put(req, res){
    const keys = Object.keys(req.body)
      console.log(req.body)  
    for (let key of keys) {
        
        if (req.body[key] == "") {
            return res.send("Please fill in all the fields!")
        }
    
    }
  
    
    Recipe.update(req.body, function(){

        res.redirect(`/admin/receitas/${req.body.id}`)
    })
 },

 delete(req, res){

    const { id } =  req.body
    //console.log(id)
    Recipe.delete(id, function(){

        return res.redirect("/admin/receitas")
    })
      
 },

 not_found(req, res){

    return res.status(404).render("not-found")
 }


}