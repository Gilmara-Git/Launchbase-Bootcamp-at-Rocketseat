const fs = require("fs")
const data = require("../data.json")
const { age, date } = require("../utils") //function for rectigying age on file utils -  estamos desestruturando ela em variavel  
const Intl = require("intl")




exports.index = function (req, res) {

    let instructors = data.instructors.map(function (instructor) {

        if (instructor) {

            const newInstructors = {
                ...instructor,
                services: instructor.services.split(",")

            }
            return newInstructors
        }
    })

    return res.render('instructors/index', { instructors })
}

exports.create = function (req, res) {

    return res.render("instructors/create")}

//create -  recebendo os dados da pagina create and writing them on the data.json
exports.post = function (req, res) {
    //req.body -  com o post temos que receber no req.

    const keys = Object.keys(req.body) /* this constructor have various functionalities such as 'keys'*/
    /*return res.send(keys)  - It creates an ARRAY of Keys*/

    for (let key of keys) {
        /*res.send(key)  Returned the 1st key which was the avatar*/
        /* In the JS we can do this:*/
        /*req.body.key ==""  */
        if (req.body[key] == "") {
            return res.send("Please fill in all the fields!")
        }

    }
    // vamos desustruturar o objeto para que quem olhar o codigo consiga entender o que esta vindo no req.body

    let { avatar_url, dob, name, services, gender } = req.body

    dob = Date.parse(dob) //dob is being changed
    const created_at = Date.now() // insert "created_at"  - it was not in the req.body originally
    const id = Number(data.instructors.length + 1) //insert "id" on the ARRAY as a number


    data.instructors.push({
        id,
        avatar_url,
        name,
        dob,
        gender,
        services,
        created_at
    }) //[{..}], [{...}] cada vez que fill the form adicionara um objeto


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) { //agora vamos stringify o data e nao o req.body

        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")


    })

    // return res.send(req.body)

}

//show
// Pegando os dados do arquivo data.json , tratando eles e mostrando na pagina show
exports.show = function (req, res) {

    //req.query.id
    //req.params.id
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {

        return (instructor.id == id)   //find somente espera false or true

    })

    if (!foundInstructor) return res.send("Instructor not found!")
    // we are going to rectify some data before rendering it to the browser


    const instructor = {
        ...foundInstructor,
        dob: date(foundInstructor.dob).birthday,
        //age: age(foundInstructor.dob), //em vez de dob colocamos age teremos que mudar la na SHOW
        services: foundInstructor.services.split(","), //transform string into an ARRAY
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)

    }

    return res.render("instructors/show", { instructor })//caso encontre o instrutor
}



//edit
// pegando os dados do arquivo data.json validando instrutor por instrutor e escrevendo eles na pagina de edit

exports.edit = function (req, res) {

    const { id } = req.params // tirando o id do parametro

    const foundInstructor = data.instructors.find(function (instructor) {
        //req.params.id
        return (instructor.id == id)
    })
    if (!foundInstructor) return res.send("There is not instructor")

    const instructor = {

        ...foundInstructor,
        dob: date(foundInstructor.dob).iso // We put "0" manually then, we apply .slice(-2)

    }

    return res.render("instructors/edit", { instructor })


}


// put - data that was edited by the user and then we are saving it on the back-end

exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    //console.log(req.body)

    const foundInstructor = data.instructors.find(function (instructor, foundIndex) {

        if (id == instructor.id) {
            index = foundIndex
            return true
        }

    })

    if (!foundInstructor) return res.send("No instructor found")

    // when foundIntructors is true we are going to save data in the backend
    const instructor = {

        ...foundInstructor,
        ...req.body,
        id: Number(req.body.id),
        dob: Date.parse(req.body.dob)
        //dob = Date.parse(dob)
    }

    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send("There was a write error")

        return res.redirect(`/instructors/${id}`)
    })
}

//delete

exports.delete = function (req, res) {
    const { id } = req.body
    console.log(req.body)

    const filteredInstructors = data.instructors.filter(function (instructor) {

        return instructor.id != id  // here it will return to the filteredInstructors(array) all the resources that are different from the id from req.body

    })
    data.instructors = filteredInstructors

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {

        if (err) return res.send("There was an error to write file")


        return res.redirect("/instructors")
    })


}
