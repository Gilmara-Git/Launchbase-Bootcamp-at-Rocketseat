const Intl = require("intl")
const Instructor = require("../models/instructor")
const {age, date } = require("../../lib/utils") 
const db = require("../../config/db")


module.exports = {

index(req, res) {

    const {filter}  =  req.query

    if(filter){
        Instructor.findBy(filter, function(dbInstructors){

            instructors = dbInstructors.map(function(dbInstructor){
                const newInstructors = {
                    ...dbInstructor, 
                    services:dbInstructor.services.split(",")
                }

                return newInstructors

            })
            return res.render("instructors/index", {instructors, filter})

        })
    } else { 

    Instructor.all(function(dbInstructors){      

          let instructors =  dbInstructors.map(function(dbInstructor) {

            if(dbInstructor)  {

                const newInstructors = {
                    ...dbInstructor, 
                    services : dbInstructor.services.split(",")
                }

                return newInstructors
            }            
            
        })
       
    return res.render("instructors/index", {instructors})

    })
       
}
},

create(req,res) {

    return res.render("instructors/create")
    

},

post(req, res) {

    const keys = Object.keys(req.body) 

        for (let key of keys) {
        
            if (req.body[key] == "") {
                return res.send("Please fill in all the fields!")
        }

    }

    Instructor.create(req.body, function(instructor){
        return res.redirect(`/instructors/${instructor.id}`)

    })
    return
        
},

show(req, res) {
    Instructor.find(req.params.id, function(instructor){
          if(!instructor) return res.send("Instructor not found")
 
            instructor.dob = date(instructor.dob).birthday // this returns age
            instructor.services = instructor.services.split(",")
            instructor.created_at = date(instructor.created_at).format

           return res.render("instructors/show" , {instructor})
      })
    
    
},

edit(req, res) {

    Instructor.find(req.params.id, function(instructor){
        if(!instructor) return res.send("Instructor not found")

          instructor.dob = date(instructor.dob).iso // this returns age
          instructor.services = instructor.services.split(",")
          instructor.created_at = date(instructor.created_at).format

         return res.render("instructors/edit" , {instructor})
    })
    
},

put(req, res) {

    const keys = Object.keys(req.body) 

    for (let key of keys) {
        
        if (req.body[key] == "") {
            return res.send("Please fill in all the fields!")
        }
    
    }
    Instructor.update(req.body, function(){

        res.redirect(`/instructors/${req.body.id}`)
    })
},


delete(req, res) {

    Instructor.delete(req.body.id, function(){
        return res.redirect(`/instructors/`)

    })

    
    
}


}