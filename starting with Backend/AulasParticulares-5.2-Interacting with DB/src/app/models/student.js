const db =  require("../../config/db")
const { date, graduation} =  require("../../lib/utils")

module.exports = { 
all(callback) { 

    db.query( `SELECT * FROM students ORDER BY name ASC`, function(err, results){

        if(err) throw `Database error! ${err}`

        callback(results.rows)
    })
},


 create(data, callback) {

    const query  = `
    INSERT INTO students (
        avatar_url,
        name,
        email,
        dob,
        grade,
        hours_classes,
        created_at
   ) VALUES ($1, $2, $3, $4, $5, $6, $7)
   RETURNING id    
`

const values = [
data.avatar_url,
data.name,
data.email,
date(data.dob).iso,
data.grade,
data.hours_classes,
date(Date.now()).iso    // created_at
]           

db.query(query, values, function(err, results){

if(err) throw `Database error! ${err}`

callback(results.rows[0])

})
 
},

find(id, callback){
    //console.log(id)
    db.query(` SELECT * from students WHERE id = $1`, [id], function(err, results){
        
        if(err) throw `Database error! ${err}`
        //console.log(results)
        callback(results.rows[0])
    })
},

update(data, callback) {

    //console.log(data)
    
    const query = `    
                    UPDATE students SET 
                        avatar_url=($1),
                        name=($2),
                        email=($3),
                        dob=($4),
                        grade=($5),
                        hours_classes=($6)
                    WHERE id = $7  
                    `  
                
      const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.dob).iso,
            data.grade,
            data.hours_classes,            
            data.id
      ]             

    db.query(query, values, function(err, results){
        
        if(err) throw `Database error! ${err}`

        callback() // No need to send anything on the callback function. Therefore no need params on the function  in the front

    })                    

},


delete(id, callback) {

        db.query(`DELETE FROM students WHERE id= $1 `, [id], function(err, results){
                if(err) throw `Database error! ${err}`

                callback() // No need to send anything on the callback function
        })

 }
        
}





