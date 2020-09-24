const { date, blood_type } = require("../../lib/utils") 
const Intl = require("intl")
const Member = require("../models/member")
const { instructorsSelectOptions } = require("../models/member")




module.exports = {

    index(req, res) {

        let {filter, page, limit } = req.query

        page = page || 1
        limit = limit ||2
        let offset = limit * (page - 1)

        const params = {
            page,
            filter,
            limit,
            offset,
            callback(members){
                
                if(members == "") return res.redirect("/members")

                const pagination = {
                    page,
                    total: Math.ceil(members[0].total/limit)
                }
                return res.render("members/index", {members, filter, pagination})
            }
            
        }

        Member.paginate(params) 
    },
    
    create(req,res) {

        Member.instructorsSelectOptions(function(instructorsIdName){
            
            return res.render("members/create", { instructorOptions: instructorsIdName})
        })
      
    },
    
    post(req, res) {
    
        const keys = Object.keys(req.body) 
    
            for (let key of keys) {
            
                if (req.body[key] == "") {
                    return res.send("Please fill in all the fields!")
            }
    
        }
    
        Member.create(req.body, function(Member){
            return res.redirect(`/members/${Member.id}`)
    
        })
        return
            
    },
    
    show(req, res) {
        Member.find(req.params.id, function(member){
              if(!member) return res.send("Member not found")
                member.dob = date(member.dob).birthday // this returns age
                member.blood = blood_type(member.blood)   
               return res.render("members/show" , {member})
        })
        
    },
    
    edit(req, res) {
    
        Member.find(req.params.id, function(member){
            if(!member) return res.send("Member not found")
    
              member.dob = date(member.dob).iso // this returns age

              Member.instructorsSelectOptions(function(instructorsIdName){
            
                return res.render("members/edit", {member,  instructorOptions: instructorsIdName})
            })
    
             
        })
        
    },
    
    put(req, res) {
    
        const keys = Object.keys(req.body) 
    
        for (let key of keys) {
            
            if (req.body[key] == "") {
                return res.send("Please fill in all the fields!")
            }
        
        }

        Member.update(req.body, function(){
    
            res.redirect(`/members/${req.body.id}`)
        })
    },
    
    
    delete(req, res) {
    
        Member.delete(req.body.id, function(){
            return res.redirect(`/members/`)
    
        })      
        
    }

}