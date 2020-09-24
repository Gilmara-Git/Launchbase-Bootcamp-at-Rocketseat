const Intl = require("intl")
const Instructor = require("../models/instructor")
const {age, date } = require("../../lib/utils") 
const db = require("../../config/db")


module.exports = {

index(req, res) {

    let {filter, page, limit}  =  req.query
    console.log(req.query)

    page = page || 1
    limit = limit || 2
    let offset = limit *(page -1) 

    
    const params = {

        filter,
        page,
        limit,
        offset,
        callback(dbInstructors) { 
            console.log(dbInstructors)
            //console.log(Math.ceil(dbInstructors[0].total/limit))
            if (dbInstructors == "") return res.redirect("/instructors")
            
            let instructors =  dbInstructors.map(function(dbInstructor) {

                            if(dbInstructor)  {
                
                                const newInstructors = {
                                    ...dbInstructor, 
                                    services : dbInstructor.services.split(",")
                                }
                
                                return newInstructors
                            }            
                            
                        })
                                             


                     const pagination = {
                            page,
                            total : Math.ceil(dbInstructors[0].total/limit)
                            
                            
                     }
                     
                     

                    return res.render("instructors/index", {instructors, filter, pagination})

        }

    }

    Instructor.paginate(params)

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