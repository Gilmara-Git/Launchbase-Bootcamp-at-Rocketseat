
const { graduation, date } = require("../../lib/utils")
const Intl = require("intl")
const Teacher = require("../models/teacher")

module.exports = {

    index(req, res) { 
        
        let {filter, page, limit} =  req.query

        page = page || 1
        limit = limit || 2
        let offset = limit * (page - 1)


        //console.log(filter)
        // console.log(`${page} =>page`)
        // console.log(limit)

        const params = {
            filter,
            limit,
            offset,
            callback(dbTeachers) {
                   
                const teachers = dbTeachers.map((dbTeacher)=>{

                    newTeacher = {
                        ...dbTeacher,
                        subjects: dbTeacher.subjects.split(",")
                    }

                    return newTeacher
                })
                
                const pagination = {

                    page,
                    total: Math.ceil(dbTeachers[0].total/limit)
              
                }
                     
                

                return res.render('teachers/index', {teachers, filter, pagination})

            }
            
        }
        
        Teacher.paginate(params)
        
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


