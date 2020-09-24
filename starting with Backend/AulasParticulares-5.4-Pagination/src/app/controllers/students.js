
const { grade, date } = require("../../lib/utils")
const Intl = require("intl")
const Student = require("../models/student")


module.exports = {

    index(req, res) { 

        let {filter, page, limit}  = req.query

        page = page || 1
        limit = limit | 2 
        let offset = limit * (page - 1 )

        // console.log(filter)
        // console.log(limit)
        // console.log(page)

        const params = {
            filter,
            limit, 
            offset,
            callback(students){

                const pagination = {

                    page,
                    total: Math.ceil(students[0].total/limit)
                }

                return res.render("students/index", {students, filter, pagination})  

            }
        }
        

        Student.paginate(params)
       

        
    }, 
    create(req, res) {

        Student.teachersSelectOptions(function(teacherIdName){
            
            return res.render("students/create", { teacherOptions : teacherIdName})

        })

       
     }, 

    post(req, res) {
        const keys = Object.keys(req.body)
        console.log(req.body)
        
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
            
            student.dob = date(student.dob).iso,
            student.grade = grade(student.grade)

            Student.teachersSelectOptions(function(teacherIdName){
                    console.log(teacherIdName)
                return res.render("students/edit", {student, teacherOptions: teacherIdName})

            })
            
            

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



