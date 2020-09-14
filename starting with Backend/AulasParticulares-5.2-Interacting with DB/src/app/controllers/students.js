
const { grade, date } = require("../../lib/utils")
const Intl = require("intl")
const Student = require("../models/student")


module.exports = {

    index(req, res) { 

        Student.all(function(students){

          return res.render("students/index", {students})  
        })

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
       Student.create(req.body, function(student){

        return res.redirect(`/students/${student.id}`)

       })


     }, 

    show(req, res) { 

        Student.find(req.params.id, function(student){
            if(!student) return res.send("Student does not exist")

            student.dob = date(student.dob).birthday,
            student.created_at = date(student.created_at).format,
            student.grade = grade(student.grade)

            return res.render("students/show", {student})

        })

    }, 

    edit(req, res) { 

        Student.find(req.params.id, function(student){
            if(!student) res.send("Student does not exist.")
            //console.log(student)

            student.dob = date(student.dob).iso,
            student.grade = grade(student.grade)
            
            return res.render("students/edit", {student})

        })
        
        
    },

    update(req, res) { 

        const keys = Object.keys(req.body)        
            for(let key of keys) {    
                if(req.body[key]=="")    
                return res.send("Fill in all the lines")
            
           }

           Student.update(req.body, function(){
            //console.log(req.body)
            return res.redirect(`students/${req.body.id}`)
        

        })

    }, 
    delete(req, res) {

        Student.delete(req.body.id, function(){

            return res.redirect("students")
        })

        
     } 
}



