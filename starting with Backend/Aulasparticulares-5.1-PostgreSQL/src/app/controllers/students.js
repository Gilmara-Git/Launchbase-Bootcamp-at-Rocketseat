
const { grade, date } = require("../../lib/utils")
const Intl = require("intl")



module.exports = {

    index(req, res) { 

        let students = data.students.map(student => {

            const newStudent = {
                ...student,
                grade: grade(student.grade)
                
            }
            return newStudent
        })
    
        return res.render('students/index')

    }, 
    create(req, res) {

        return res.render("students/create")

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



