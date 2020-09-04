const { date, blood_type } = require("../../lib/utils") 
const Intl = require("intl")




module.exports = {

    index(req, res) {
        let members = data.members.map(function (member) {
    
            if (member) {
    
                const newmembers = {
                    ...member,
                    services: member.services.split(",")
    
                }
                return newmembers
            }
        })
    
        return res.render('members/index')
    },
    
    create(req, res) {
    
        return res.render("members/create")
        
    },
    
    post(req, res) {
    
    const keys = Object.keys(req.body) 
    
        for (let key of keys) {
            
            if (req.body[key] == "") {
                return res.send("Please fill in all the fields!")
            }
    
        }
            
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