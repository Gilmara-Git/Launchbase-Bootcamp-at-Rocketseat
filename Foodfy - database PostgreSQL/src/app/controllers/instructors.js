const {date } = require("../../lib/utils") 
const Intl = require("intl")

module.exports = {

index(req, res) {
    let instructors = data.instructors.map(function (instructor) {

        if (instructor) {

            const newInstructors = {
                ...instructor,
                services: instructor.services.split(",")

            }
            return newInstructors
        }
    })

    return res.render('instructors/index')
},

create(req, res) {

    return res.render("instructors/create")
    
},

post(req, res) {

const keys = Object.keys(req.body) 

    for (let key of keys) {
        
        if (req.body[key] == "") {
            return res.send("Please fill in all the fields!")
        }

    }
    

    let { avatar_url, dob, name, services, gender } = req.body

    return
    
},

show(req, res) {
    return
    
},

edit(req, res) {

return
    
},

put(req, res) {

    const keys = Object.keys(req.body) 

    for (let key of keys) {
        
        if (req.body[key] == "") {
            return res.send("Please fill in all the fields!")
        }
    
    }
    return
},


delete(req, res) {

return
    
}


}