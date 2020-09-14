const db =  require("../../config/db")
const { date, graduation} =  require("../../lib/utils")

module.exports = { 
all(callback) { 

    db.query( `SELECT * FROM teachers ORDER BY name ASC`, function(err, results){

        if(err) throw `Database error! ${err}`

        callback(results.rows)
    })
},


 create(data, callback) {

    const query  = `
    INSERT INTO teachers (
        avatar_url,
        name,
        dob,
        degree,
        delivery,
        subjects,
        created_at
   ) VALUES ($1, $2, $3, $4, $5, $6, $7)
   RETURNING id    
`

const values = [
data.avatar_url,
data.name,
date(data.dob).iso,
data.degree,
data.delivery,
data.subjects,
date(Date.now()).iso    
]           

db.query(query, values, function(err, results){

if(err) throw `Database error! ${err}`

callback(results.rows[0])

})
 
},

find(id, callback){

    db.query(` SELECT * from teachers WHERE id = $1`, [id], function(err, results){
        
        if(err) throw `Database error! ${err}`

        callback(results.rows[0])
    })
},

update(data, callback) {
    
    const query = `
    
                    UPDATE teachers SET 
                        avatar_url=($1),
                        name=($2),
                        dob=($3),
                        degree=($4),
                        delivery=($5),
                        subjects=($6)
                    WHERE id = $7  
                    `  
                
      const values = [
            data.avatar_url,
            data.name,
            date(data.dob).iso,
            data.degree,
            data.delivery,
            data.subjects,
            data.id
      ]             

    db.query(query, values, function(err, results){
        
        if(err) throw `Database error! ${err}`

        callback() // No need to send anything on the callback function

    })                    

},


delete(id, callback) {

        db.query(`DELETE FROM teachers WHERE id= $1 `, [id], function(err, results){
                if(err) throw `Database error! ${err}`

                callback() // No need to send anything on the callback function
        })

 }
        
}





