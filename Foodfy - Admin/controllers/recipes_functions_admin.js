
const fs = require("fs")
const dataRecipes = require("../data.json")

exports.receitas = function(req, res){

    return res.render()
    
//     const foundRecipes = dataRecipes.recipes.map((recipe)=>{
       
//         console.log(foundRecipes)
//         return recipe
// })

// if(!foundRecipes) return res.send("No recipe found")

// return res.render("receitas", {foundRecipes})
}


exports.home = function(req, res) {
        const foundRecipes = dataRecipes.recipes.map((recipe)=>{
                return recipe
        })

        if(!foundRecipes) return res.send("No recipe found")
        
    return res.render("home", {foundRecipes})
}


exports.sobre = function(req, res){

    return res.render("sobre")

}




exports.index = function(req, res){

    let sixrecipes = [];

    for (let i=0; i< dataRecipes.recipes.length; i++) {

        const recipeObject = dataRecipes.recipes[i];
        recipeObject.index = i; 
        sixrecipes.push(recipeObject)
     
    }
    console.log(sixrecipes)
    res.render("admin/index_admin", {sixrecipes})

}


exports.create =  function(req, res){

    res.render("admin/create_recipe")

}

exports.receitas = function(req, res){

    res.render("receitas", {dataRecipes})
}

exports.show = function(req, res){

    const recipeIndex = req.params.index 

    const foundRecipe = dataRecipes.recipes.find(function(recipe) {

        return recipe.id == recipeIndex

    })

        if(!foundRecipe) return res.send("No Recipe found")

        const recipes = {

            ...foundRecipe
        }

        return res.render("admin/show_admin", {recipes})

} 

exports.edit = function(req, res){

    const { id } = req.params

    const foundRecipe = dataRecipes.recipes.find(function(recipe) {
        
        return id == recipe.id
    })

        if(!foundRecipe) return res.send("No recipe found to be edited.")

            
        
        res.render("admin/edit_admin", {foundRecipe})

 }

 exports.post = function(req, res){

    const keys = Object.keys(req.body)
    //console.log(keys)

    for (let key of keys) {
           
        if(req.body[key] == "") { return res.send("Please fill out all fields")
        
    }
}
          let id = 1;
          lastRecipe = dataRecipes.recipes[dataRecipes.recipes.length -1] 
          if(lastRecipe) {

            id = lastRecipe.id + 1;
          }

          dataRecipes.recipes.push({ 
            id,
            ...req.body
             })

          fs.writeFile('data.json', JSON.stringify(dataRecipes, null, 2), function(err){
              if(err) return res.send("Write file error")

          })                  
            res.redirect("/receitas")

        }                


exports.put = function(req, res){

    const { id } = req.body
    
    let index = 0
    
    const foundRecipe = dataRecipes.recipes.find(function(recipe, foundIndex) {

        if(recipe.id == id) {
           
            index = foundIndex
          
            return true
        }

    })
        if(!foundRecipe) return res.send("Recipe was not found")

        const recipe = {

            ...foundRecipe,
            ...req.body,
            id: Number(req.body.id)

        }

        dataRecipes.recipes[index] = recipe;

        fs.writeFile("data.json", JSON.stringify(dataRecipes, null, 2), function(err){

            if(err) res.send("Write file error")

            return res.redirect(`/admin/receitas/${id}`)
        })       
 }

 exports.delete = function(req, res){

    const { id } =  req.body
   
    remainedFilteredRecipes =  dataRecipes.recipes.filter(function(recipe){

        if(recipe.id != id) {
            return true
        }
    })

    if(!remainedFilteredRecipes) return res.send ("Recipe not found")

    dataRecipes.recipes = remainedFilteredRecipes

    fs.writeFile("data.json", JSON.stringify(dataRecipes, null, 2), function(err){

        if(err) return res.send("Write file error")
    })

        return res.redirect("/admin/receitas")
 }