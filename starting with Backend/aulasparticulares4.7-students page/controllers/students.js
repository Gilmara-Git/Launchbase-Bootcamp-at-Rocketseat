
const fs= require("fs")
const data= require("../data.json")
const { grade, date } = require("../utils")
const Intl = require("intl")

//Index

exports.index = function (req, res){

    let students = data.students.map(student => {

        const newStudent = {
            ...student,
            grade: grade(student.grade)
            
        }
        return newStudent
    })

    return res.render('students/index', { students } )
}


exports.create = function (req, res){

    return res.render("students/create")
}

// POST  - getting data from page create (form) and saving it on data.json
exports.post = function (req, res) {   
    
    const keys = Object.keys(req.body)
        
    for(let key of keys) {

        if(req.body[key]=="")    
           return res.send("Fill in all the lines")
       
       }

        dob = Date.parse(req.body.dob)
        
       let id = 1
       const lastStudent = data.students[data.students.length -1]

            if(lastStudent) {

                id = lastStudent.id + 1 

                               
            }
                           
                data.students.push({
                    id,
                    ...req.body,
                    dob,
                   

                })
            
                fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

                    if(err) return res.send("Write file error")
                })
            
            return res.redirect("/students")
             }      
                
    

// SHOW  -  capturing data from data.json and showing to user
exports.show = function(req, res){
        
    const { id } = req.params

    const foundStudent = data.students.find(function(student){

        return (student.id == id) 
    })

        if(!foundStudent)
        return res.send("Student requested doe not exit")

        const student = { 
            ...foundStudent,                       
     
        dob: date(foundStudent.dob).birthday, 
        grade: grade(foundStudent.grade),                 
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundStudent.created_at) // to show US date use "en-US"
               
        }
    
        return res.render("students/show" , {student})

    }


exports.edit = function (req, res) {

        const {id } = req.params

        const foundStudent = data.students.find(function(student) {

            return (student.id == id)
        })

           if (!foundStudent) {

             return res.render("This student does not exist yet.")
           }
          
           
           const student = {

            ...foundStudent,

            dob : date(foundStudent.dob).iso,
            grade: grade(foundStudent.grade)
            
           }
           return res.render("students/edit", {student})
           }

                     
           
exports.update = function(req, res) { //put
const { id } = req.body

let index = 0 
const foundStudent = data.students.find(function(student, foundIndex){ // we need the index, to save the right student info
    
    if (id == student.id) {
    index = foundIndex
    return true
    }

})
    if(!foundStudent) return res.send("Student not found")

    
    const student = {
        ...foundStudent,
        ...req.body,
        dob: Date.parse(req.body.dob),  
        id: Number(req.body.id)
       

    }
    data.students[index] =  student

    fs.writeFile("data.json", JSON.stringify(data, null, 2),  function(err){

        if(err) return res.send("There was a write error")

        res.redirect(`/students/${id}`)
    })

}

exports.delete = function(req, res) {

    const { id } = req.body
    //console.log(req.body)

    const filteredStudents = data.students.filter(function(student){

            return id != student.id
        })             
             
            //console.log(filteredStudents)

            data.students = filteredStudents

            fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

                if(err) return res.send("There was write error.")

                res.redirect("/students")
            })

   
    }

