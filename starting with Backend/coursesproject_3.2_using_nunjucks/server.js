
const express = require("express")
const nunjucks = require("nunjucks")
const server = express()

const courses = require("./data")


server.listen(5000, function () {

    console.log("I am listening...")
})


server.set("view engine", "njk")

nunjucks.configure("views", { express: server })

server.use(express.static("public"))


server.get("/", function (req, res) {

    return res.render("courses", { items: courses } )

})

server.get("/about", function (req, res) {
    const about = {
                    title: "Rocketseat",
                    img_logo: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg", 
                    p1: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível !!", 
                    p2: "Instituição Educacional localizada no sul do Brasil com foco em ensinar programação para alunos de qualquer nível",
                    main_techs: "Principais tecnologias utilizadas:",

                    techs: [
                        { tech_name: "CSS" },
                        { tech_name: "Html" },
                        { tech_name: "JavaScript" },
                        { tech_name: "TypeScript" },
                        { tech_name: "React Native"}
 
                    ],


                    links: [
                            { url: "https://github.com/Rocketseat" , name: "Github" }, 
                            { url: "https://www.instagram.com/rocketseat_oficial/channel/?hl=pt", name: "Instagram" }, 
                            { url: "https://www.facebook.com/rocketseat/" , name: "Facebook" }

                    ]                   
    }
    return res.render("about", { DatAbout:about})

})

server.use(function(req, res){
    return res.status(404).render("not-found")
    
})