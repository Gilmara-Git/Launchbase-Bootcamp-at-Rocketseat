const fs = require("fs")
const data = require("../data.json")
const { date, blood_type } = require("../utils") //function for rectigying age on file utils -  estamos desestruturando ela em variavel  
const Intl = require("intl")




exports.index = function (req, res) {

    let members = data.members.map(function (member) {

        if (member) {

            const newMembers = {
                ...member,
               

            }
            return newMembers
        }
    })

    return res.render('members/index', { members })
}


exports.create = function (req, res) {

    return res.render("members/create")

}
//POST  -creating resource member

exports.post = function (req, res) {
    
    const keys = Object.keys(req.body) /* this Object constructor has various functionalities such as 'keys'*/
    /*return res.send(keys)  - It creates an ARRAY of Keys*/

    for (let key of keys) {
    
        if (req.body[key] == "") {
            return res.send("Please fill in all the fields!")
        }
    }
    
    dob = Date.parse(req.body.dob) //dob is being changed to timestamp
    
    let id = 1
    const lastMember = data.members[data.members.length -1]
    
    if(lastMember) {

        id = lastMember.id + 1
    }     

    data.members.push({
        id,
        ...req.body,                     
        dob 
        
    }) 


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) { 

        if (err) return res.send("Write file error!")

        return res.redirect("/members")


    })

    // return res.send(req.body)

}

//show

exports.show = function (req, res) {

    const { id } = req.params
    
    const foundMember = data.members.find(function (member) {

        return (member.id == id)   
    })

    if (!foundMember) return res.send("Member not found!")
    
    const member = {
        ...foundMember,
        blood: blood_type(foundMember.blood), 
        dob: date(foundMember.dob).birthday
           
    }

    return res.render("members/show", { member })
}


//edit
// pegando os dados do arquivo data.json validando instrutor por instrutor e escrevendo eles na pagina de edit

exports.edit = function (req, res) {

    const { id } = req.params // tirando o id do parametro

    const foundMember = data.members.find(function (member) {
        //req.params.id
        return (member.id == id)
    })
    if (!foundMember) return res.send("There is not member")

    const member = {

        ...foundMember,
        dob: date(foundMember.dob).iso,// We put "0" manually then, we apply .slice(-2)
        blood: blood_type(foundMember.blood),
        
    }
    console.log(member.blood)
    return res.render("members/edit", { member })


}


// put - data that was edited by the user and then we are saving it on the back-end

exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    //console.log(req.body)

    const foundMember = data.members.find(function (member, foundIndex) {

        if (id == member.id) {
            index = foundIndex
            return true
        }

    })

    if (!foundMember) return res.send("No member found")

    // when foundIntructors is true we are going to save data in the backend
    const member = {

        ...foundMember,
        ...req.body,
        id: Number(req.body.id),
        dob: Date.parse(req.body.dob)
        //dob = Date.parse(dob)
    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("There was a write error")

        return res.redirect(`/members/${id}`)
    })
}

//delete

exports.delete = function (req, res) {
    const { id } = req.body
    console.log(req.body)

    const filteredMembers = data.members.filter(function (member) {

        return member.id != id  // here it will return to the filteredMembers(array) all the resources that are different from the id from req.body

    })
    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {

        if (err) return res.send("There was an error to write file")


        return res.redirect("/members")
    })


}
