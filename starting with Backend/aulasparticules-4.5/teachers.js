
const fs= require("fs")
const data= require("./data.json")
const { age , graduation, date } = require("./utils")
const Intl = require("intl")

// POST  - getting data from page create (form)
exports.post = function (req, res) {
    //creating an [] for the object with req.body in order to use "key", then validate if there is empty fields
    const keys = Object.keys(req.body)
    //res.send(keys) // this brings me an array with the fields name
    // key will be the array index
    for (let key of keys) {
        
        if(req.body[key]=="")
        return res.send("Fill in all the lines")
       
        }

        
        //console.log(req.body.degree)

        let { avatar_url, name, dob, degree, delivery, subjects } =  req.body
        dob = Date.parse(req.body.dob)
        const id = Number(data.teachers.length + 1)
        const created_at =  Date.now() // fernando ribeiro usou assim DateUTC.now () em vez de Date.now()


        data.teachers.push(
            { 
                id, avatar_url, name, dob, degree,  delivery, subjects, created_at 
            } ) //push is an ARRAY functionality

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

            if(err) return res.send("Write file error")

        
        })
      //return res.send(key)  // this shows the field name
      //return res.send(req.body[key]) //this shows the conten inside the field
       // if(req.body[key] ==""){
            //return res.send("FILL everything")
            //if (req.body.subjects =="")
            //return res.send("Fill the subjects")
       
        //return res.redirect("/teachers/create")
        
        return res.redirect("/teachers")
}

// SHOW  -  capturing data from data.json and showing to user
exports.show = function(req, res){
        
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){

        return (teacher.id == id) 
    })

        if(!foundTeacher)
        return res.send("Teacher requested doe not exit")

        const teacher = { 
            ...foundTeacher,                       
     
        age: age(foundTeacher.dob),
        subjects: foundTeacher.subjects.split(","), // generating an array with teacher subjects
        degree: graduation(foundTeacher.degree),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at) // to show US date use "en-US"
       
        
        }
    
        return res.render("teachers/show" , {teacher})

    }


exports.edit = function (req, res) {

        const {id } = req.params

        const foundTeacher = data.teachers.find(function(teacher) {

            return (teacher.id == id)
        })

           if (!foundTeacher) {

             return res.render("This teacher does not exist yet.")
           }
          
           
           const teacher = {

            ...foundTeacher,

            dob : date(foundTeacher.dob)
            
           }
           return res.render("teachers/edit", {teacher})
           }

                     
           
exports.update = function(req, res) { //put
const { id } = req.body
let index = 0 

const foundTeacher = data.teachers.find(function(teacher, foundIndex){ // we need the index, to save the right teacher info
    
    if (id == teacher.id) {
    index = foundIndex
    return true
    }

})
    if(!foundTeacher) return res.send("Teacher not found")

    
    const teacher = {
        ...foundTeacher,
        ...req.body,
        dob: Date.parse(req.body.dob),
        id: Number(req.body.id)

    }
    data.teachers[index] =  teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2),  function(err){

        if(err) return res.send("There was a write error")

        res.redirect(`/teachers/${id}`)
    })

}


exports.teacher_for_deletion = function (req, res) { //show data to be deleted

    const { id } = req.params
    console.log(id)


    const foundTeacher = data.teachers.find(function(teacher){

        return id == teacher.id
    })

        if(!foundTeacher) return res.send("Teacher not found.")


        const teacher = {

            ...foundTeacher, 

            dob : date(foundTeacher.dob),
            

        }

    res.render("teachers/delete" , {teacher})


}


exports.delete = function(req, res) {

    const { id } = req.body
    //console.log(req.body)

    const filteredTeachers = data.teachers.filter(function(teacher){

            return id != teacher.id
        })             
             

            data.teachers = filteredTeachers

            fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

                if(err) return res.send("There was write error.")

                res.redirect("/teachers")
            })

   
    }

