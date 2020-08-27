const express = require("express")
const server = express()
const nunjucks =  require("nunjucks")
const recipes = require("./data")
const indexRecipes = require("./data_index")


nunjucks.configure("views", { express: server })

server.set("view engine", "njk")
server.use(express.static("public"))

server.get("/", function(req, res){

   return res.render("index", {indexRecipes})
   
})

server.get("/sobre", function(req, res){

    return res.render("sobre")

})

server.get("/receitas", function(req, res){

    res.render("receitas", {recipes})
})

server.get("/receitas/:index" , function(req, res){
    
    const recipeIndex = req.params.index
    //res.send(recipeIndex)
    //console.log(recipes[recipeIndex])
    

    res.render("receita_detalhes", {details: recipes[recipeIndex]})
})
server.listen(5500, function(){  console.log("Server is UP") })