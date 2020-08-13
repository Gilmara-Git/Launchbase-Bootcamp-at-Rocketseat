
const fs= require("fs")
const data= require("./data.json")

exports.post = function (req, res) {
    //creating an [] for the object with req.body in order to use "key", then validate if there is empty fields
    const keys = Object.keys(req.body)
    //return res.send(keys) // this brings me an array with the fields name
    // key will be the array index
    for (let key of keys) {
    
        if(req.body[key]=="")
        return res.send("Fill in all the lines")
       
        }

        
       let { avatar_url, name, dob, degree, delivery, subjects } =  req.body
        dob = Date.parse(req.body.dob)
        const id = Number(data.teachers.length + 1)
        const created_at = Date.now()

        data.teachers.push(
            { 
                id, avatar_url, name, dob, degree, delivery, subjects, created_at 
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