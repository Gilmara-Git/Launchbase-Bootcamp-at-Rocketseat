
const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.listen(5000, function () {

    console.log("I am listening")
})


server.set("view engine", "njk")

nunjucks.configure("views", { express: server })

server.use(express.static("public"))

server.get("/", function (req, res) {

    return res.render("courses")

})

server.get("/about", function (req, res) {
    return res.render("about")

})

server.use(function(req, res){
    return res.status(404).render("not-found")
    
})