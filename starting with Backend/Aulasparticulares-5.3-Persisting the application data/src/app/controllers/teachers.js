
const { graduation, date } = require("../../lib/utils")
const Intl = require("intl")
const Teacher = require("../models/teacher")

module.exports = {

    index(req, res) { 
        const {filter} =  req.query

        if(filter){
            Teacher.findBy(filter, function(dbTeachers){

                teachers = dbTeachers.map(function(dbTeacher){

                    newTeacher = {

                        ...dbTeacher,
                        subjects: dbTeacher.subjects.split(",")
                    }
                    
                    return newTeacher
                })

                return res.render('teachers/index', {teachers, filter})

            })
                } else {

           Teacher.all(function(dbTeachers){

            teachers = dbTeachers.map(function(dbTeacher){             

                    newTeacher = {
                        ...dbTeacher,
                        subjects : dbTeacher.subjects.split(",")
                    }

                    return newTeacher
                })
                
            return res.render('teachers/index', {teachers})
           })
        }
           },
    
    
    create(req, res) {
    
        return res.render("teachers/create")

     }, 

    post(req, res) {
        const keys = Object.keys(req.body)
        
            for(let key of keys) {
                if(req.body[key]=="") {   
                return res.send("Fill in all the lines")
          }
        }
            
        Teacher.create(req.body, function(teacher){

            
            return res.redirect(`/teachers/${teacher.id}`)
            
        })
    
  
     }, 


    show(req, res) { 

        const keys = Object.keys(req.body)
        
            for(let key of keys) {
                if(req.body[key]=="") {   
                return res.send("Fill in all the lines")
            
            }
        }

        Teacher.find(req.params.id, function(teacher){
            if(!teacher) return res.send("Teacher does not exist.")

            teacher.dob = date(teacher.dob).birthday
            teacher.subjects = teacher.subjects.split(",")
            teacher.created_at = date(teacher.created_at).format
            teacher.degree =  graduation(teacher.degree)

            return res.render('teachers/show', {teacher})

        })

    }, 

    edit(req, res) { 

        Teacher.find(req.params.id, function(teacher){
            if(!teacher)  res.send("Teacher not found.")
            
            teacher.dob = date(teacher.dob).iso
        
            return res.render("teachers/edit", {teacher})

        })    

    }, 
    update(req, res) { 

        const keys = Object.keys(req.body)
        
        for(let key of keys) {
    
            if(req.body[key]=="")    
               return res.send("Fill in all the lines")
           
           }
           Teacher.update(req.body, function(){

            return res.redirect(`/teachers/${req.body.id}`)


           })
    }, 
    delete(req, res) {

        Teacher.delete(req.body.id, function(){

            return res.redirect("/teachers")
        })

        } ,
    }


