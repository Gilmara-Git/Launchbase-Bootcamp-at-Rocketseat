
const express = require("express")
const routes = express.Router()
const recipes = require("./app/controllers/recipes")
const chefs =  require("./app/controllers/chefs")


//website routes

routes.get("/", recipes.home )

routes.get("/sobre", recipes.sobre)

routes.get("/receitas", recipes.index)

routes.get("/receitas/:index", recipes.showFromHomePage)

   

//Admin routes - recipes

routes.get("/admin/receitas", recipes.index )

//New recipe form
routes.get("/admin/receitas/create", recipes.create )

routes.get("/admin/receitas/:index", recipes.show)

routes.get("/admin/receitas/:id/edit", recipes.edit )

routes.post("/admin/receitas", recipes.post )

routes.put("/admin/receitas", recipes.put )

routes.delete("/admin/receitas", recipes.delete )

// Admin routes - Chefs
routes.get("/admin/chefs", chefs.index)
routes.get("/admin/chefs/create", chefs.create)
routes.post("/admin/chefs" , chefs.post)
routes.get("/admin/chefs/:id", chefs.show)
routes.get("/admin/chefs/:id/edit", chefs.edit)
routes.put("/admin/chefs", chefs.put)
routes.delete("/admin/chefs", chefs.delete)


//Route not found that redirects user to Home Page
routes.use(recipes.not_found)


module.exports = routes