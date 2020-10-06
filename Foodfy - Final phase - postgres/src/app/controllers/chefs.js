const { dateInTimeStamp} = require("../../lib/utils")
const db = require ("../../config/db")
const Chef = require("../models/chef")

module.exports = { 

index(req, res){
    
    const  {  filter } = req.query
    console.log(filter)

    Chef.all(filter, function(chefs){       

        return res.render( "admin/chefs/index_admin", { chefs, filter })
    })

},

create(req,res) {

    res.render("admin/chefs/create_chef")
}, 

post(req, res) {
    
    const keys = Object.keys(req.body)

    for(let key of keys) {
        if (req.body[key] == "") return res.send("Fill out all fields")
        //console.log(req.body[key])
    }
   
    Chef.create(req.body, function(chef){
        
        return res.redirect("/admin/chefs")
    })
   
}, 

show(req, res) {

    const{ id } = req.params
    //console.log(id)
    Chef.find(id, function(chef) {
        console.log(chef)

        Chef.findChefsRecipes(id, function(recipes){

            return res.render("admin/chefs/show_admin", { chef, recipes })

        })      

    })
},

edit(req, res) {
    
    const { id } = req.params
  
    Chef.find(id, function(chef){

        res.render("admin/chefs/edit_admin", { chef })

    })


}, 

put(req, res) {

    const key = Object.keys(req.body)
        if(req.body[key]=="") res.send("Please fill out the fields.")  

        //console.log(req.body)
        Chef.update(req.body, function(){

           return res.redirect("/admin/chefs")

        })
    }, 

   delete(req, res) {

    console.log(req.body.id)

    Chef.verifyIfChefHasRecipes(req.body.id, function(chefIdRecipes){
         console.log(chefIdRecipes)
                 

         if(!chefIdRecipes)   
        
         Chef.delete(req.body.id, function(){

             return  res.redirect("/admin/chefs")
         
    
          })

        if(chefIdRecipes) { 
            
            return res.send("Chef cannot be deleted as there is recipes tied to his record.")      
        }
        })
    
        }
    
    
}
  

   
