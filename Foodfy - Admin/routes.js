
const express = require("express")
const routes = express.Router()
const recipes_functions = require("./controllers/recipes_functions")
const recipes_functions_admin = require("./controllers/recipes_functions_admin")

//website routes

routes.get("/", recipes_functions_admin.home )

routes.get("/sobre", recipes_functions_admin.sobre)

routes.get("/receitas/:index" , recipes_functions_admin.show)

routes.get("/receitas", recipes_functions_admin.index)

   



//Admin routes

routes.get("/admin/receitas", recipes_functions_admin.index )

//New recipe form
routes.get("/admin/receitas/create", recipes_functions_admin.create )

routes.get("/admin/receitas/:index", recipes_functions_admin.show)

routes.get("/admin/receitas/:id/edit", recipes_functions_admin.edit )

routes.post("/admin/receitas", recipes_functions_admin.post )

routes.put("/admin/receitas", recipes_functions_admin.put )

routes.delete("/admin/receitas", recipes_functions_admin.delete )

//Route not found
routes.use(recipes_functions.not_found)

module.exports = routes