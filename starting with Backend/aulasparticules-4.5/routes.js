const express = require('express')
const routes = express.Router()
const teachers = require("./teachers")


routes.get('/', function (req, res){

    return res.redirect("/teachers")

})
routes.get('/teachers', function (req, res){

    return res.render('teachers/index')

})
routes.get("/teachers/create", function (req, res){

    return res.render("teachers/create")
})


routes.post("/teachers", teachers.post)

routes.get("/teachers/:id", teachers.show)

routes.get("/teachers/:id/edit", teachers.edit )

routes.put("/teachers", teachers.update) //put

routes.get("/teachers/:id/delete_teacher", teachers.teacher_for_deletion) 

routes.delete("/teachers", teachers.delete) // working on it

routes.get('/students', function (req, res){

    return res.send('students to be developed soon')

})

module.exports = routes