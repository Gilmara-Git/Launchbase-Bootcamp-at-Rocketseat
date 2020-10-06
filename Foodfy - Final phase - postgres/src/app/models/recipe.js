const { dateInTimeStamp } =  require("../../lib/utils")
const db =  require("../../config/db")



module.exports = {
all(filter, callback) { 

    let filterQuery = ""
    let query =`
                SELECT recipes.*, chefs.name AS recipe_author
                FROM recipes
                LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
    `
    
    if(filter){

         filterQuery = `
                    WHERE recipes.title ILIKE '%${filter}%'`       
    }
    
        query =     ` 
                    SELECT recipes.*, chefs.name AS recipe_author
                    FROM recipes
                    LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
                    ${filterQuery}`
    
    db.query(`
                    ${query}
                    GROUP BY recipes.id, recipe_author
                    ORDER BY chefs.name`
    
    , function(err, results){
        if(err) throw `Database error. ${err}`
        //console.log(results)
        return callback(results.rows)

    })

},

allChefsSelectOne(callback) {

    db.query(`SELECT id, name FROM chefs`, function(err, results){
        if(err) throw `Database error. ${err}`
        
        return callback(results.rows)

    })
}, 

create(data, callback){

    const query = `INSERT INTO recipes (
        chef_id,
        image, 
        title,
        ingredients,
        steps,
        information,
        created_at                                                  
    ) VALUES ( $1, $2, $3, $4, $5, $6, $7)
    RETURNING id`
     
const values = [                
data.recipe_author_id,
data.recipe_image,
data.recipe_title,
data.ingredients,
data.steps,
data.add_information, 
dateInTimeStamp(Date.now()).iso

]              


db.query(query, values, function(err, results){
if(err) throw `Database error ${err}`
//console.log(results)
return callback(results.rows[0])

})
},

find(id, callback){
    db.query(
        `SELECT recipes.*, chefs.name AS recipe_author
         FROM recipes 
         LEFT JOIN chefs ON (recipes.chef_id =chefs.id)
         WHERE recipes.id = $1
         GROUP BY recipes.id, chefs.id 
   
          `, [id], function(err, results){
        if(err) throw `Database error ${err}`
       console.log(results)
       return callback(results.rows[0])

    })

}, 

update(data, callback){

    const query = `UPDATE recipes SET 
                    image=($1),
                    title=($2),
                    information=($3),
                    chef_id=($4),
                    steps=($5),
                    ingredients=($6)
                    WHERE id = ($7)

    `
    const values = [

                    data.recipe_image,
                    data.recipe_title,
                    data.add_information,
                    data.recipe_author_id,
                    data.steps,
                    data.ingredients,
                    data.id
    ]


    db.query(query, values, function(err, results){
        if(err) `Database error ${err}`
        console.log(results) 

        return callback()

    })

},

delete(id, callback){

    db.query(`
                 DELETE FROM recipes
                 WHERE id = $1 `, [id], function(err, results){
        if(err) throw `Database error ${err}`
        console.log(results)
        return callback()
    })

}, 

paginate(params) {

    const { callback, filter, limit, offset} = params
    console.log(filter)

    let filterQuery = "",
    query = "",
    totalQuery = `(SELECT COUNT(*)
                  FROM recipes) AS total`
    
    if(filter){

        filterQuery = `
                    WHERE recipes.title ILIKE '%${filter}%'
                    `   
        
        totalQuery = ` (SELECT COUNT(*) 
                       FROM recipes
                      ${filterQuery}) AS total`
                    
    }
    
        query =     ` 
                    SELECT recipes.*, ${totalQuery}, chefs.name AS recipe_author
                    FROM recipes
                    LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
                    ${filterQuery}
                    GROUP BY recipes.id, recipe_author
                    ORDER BY chefs.name
                    LIMIT $1
                    OFFSET $2`
    
        
        db.query(query, [limit, offset ], function(err, results){
        if(err) throw `Database error. ${err}`
        //console.log(results)
        return callback(results.rows)

    })

}

}

    
