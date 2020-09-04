
const { age , graduation, date } = require("../../lib/utils")
const Intl = require("intl")


module.exports = {

    index(req, res) { 

        let teachers = data.teachers.map(teacher => {

            const newteacher = {
                ...teacher,
                grade: grade(teacher.grade)
                
            }
            return newteacher
        })
    
        return res.render('teachers/index')

    }, 
    create(req, res) {

        return res.render("teachers/create")

     }, 
    post(req, res) {
        const keys = Object.keys(req.body)
        
    for(let key of keys) {

        if(req.body[key]=="")    
           return res.send("Fill in all the lines")
       
       }
       //dob = Date.parse(req.body.dob)
       return
     }, 
    show(req, res) { 

        return

    }, 
    edit(req, res) { 

        return

    }, 
    update(req, res) { 

        const keys = Object.keys(req.body)
        
        for(let key of keys) {
    
            if(req.body[key]=="")    
               return res.send("Fill in all the lines")
           
           }
           //dob = Date.parse(req.body.dob)
           return

    }, 
    delete(req, res) {

        return

     } 
}


