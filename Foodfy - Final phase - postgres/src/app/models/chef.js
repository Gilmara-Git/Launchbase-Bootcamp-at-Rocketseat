
const { dateInTimeStamp} = require("../../lib/utils")
const db = require ("../../config/db")

module.exports = { 

all(filter, callback) {

    let filterQuery = ""
    let query = `SELECT * FROM chefs`

    if(filter){

        filterQuery = `WHERE chefs.name ILIKE '%${filter}%'`

        query = `${query}
                 ${filterQuery} `
                 
    }


    query = `${query}
            ORDER BY chefs.avatar_url   `


    db.query(query, function(err, results){

        if(err) throw `Database error ${err}`

        return callback(results.rows)
    })
},



create(data, callback){


    const query = `
                    INSERT INTO chefs (
                        name,
                        avatar_url,
                        created_at  
                    )
                    VALUES ($1, $2, $3)
                    RETURNING id
    
    `

    const values = [

            data.chef_name,
            data.chef_avatar,
            dateInTimeStamp(Date.now()).iso
    ]     

    db.query(query, values, function(err, results) {
            if(err) throw `Database error ${err}`
            
            return callback(results.rows[0])
           
           
            
    })
},

find(id, callback){
    db.query(`
                
                SELECT chefs.*, count(recipes) AS qty_recipes
                FROM chefs
                LEFT JOIN recipes ON (recipes.chef_id = chefs.id)
                where chefs.id = $1
                group by chefs.id
               
    `, [id], function(err, results){

            if(err) throw `Database error. ${err}`
            console.log(results)
            return callback(results.rows[0])
    })
},

findChefsRecipes(id, callback){

    db.query(`
                SELECT recipes.title, recipes.image FROM recipes 
                WHERE recipes.chef_id = $1`, [id], function(err, results){

                    if(err) throw `Database erro${err}`
                    //console.log(results)
                    return callback(results.rows)
                })
},

update(data, callback){

   const query =  `
                    UPDATE chefs SET
                    name=($1),
                    avatar_url=($2)
                    WHERE id = $3 ` 
                    
    const values = [

            data.chef_name,
            data.chef_avatar,
            data.id
    ]                
                    
                    
    db.query(query, values , function(err, results){

            if (err) throw `Databse err${err}`
               //console.log(results)
                return callback()
                    })
},

verifyIfChefHasRecipes(id, callback) {

    let query  = `   
                     SELECT * FROM recipes
                     WHERE recipes.chef_id = $1`


                db.query(query, [id], function(err, results){

                    if(err) throw `Database error ${err}`
                       // console.log(results)
                    callback(results.rows[0])
                })
    
},


delete(id, callback){  
    
    
    db.query(`
    
                DELETE FROM chefs
                WHERE id=$1`, [id], function(err, results){

                    if(err) throw `Database error ${err}`
                    return callback()
                })

}
}