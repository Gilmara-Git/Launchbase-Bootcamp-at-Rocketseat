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
        created_at,
        teacher_id
   ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
   RETURNING id    
`

const values = [
data.avatar_url,
data.name,
data.email,
date(data.dob).iso,
data.grade,
data.hours_classes,
date(Date.now()).iso,   // created_at
data.teacher

]           

db.query(query, values, function(err, results){

if(err) throw `Database error! ${err}`

callback(results.rows[0])

})
 
},

find(id, callback){
    //console.log(id)
    db.query(`  SELECT students.*, teachers.name AS teacher_name
                from students
                LEFT JOIN teachers ON( teachers.id = students.teacher_id) 
                WHERE students.id = $1`, [id], function(err, results){

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
                        hours_classes=($6),
                        teacher_id =($7)
                    WHERE id = $8  
                    `  
                
      const values = [
            data.avatar_url,
            data.name,
            data.email,
            date(data.dob).iso,
            data.grade,
            data.hours_classes,  
            data.teacher,          
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

 }, 

 teachersSelectOptions(callback){

    db.query(`SELECT id, name FROM teachers`, function(err, results){
        if(err) throw `Database error! ${err}`

        callback(results.rows)

    })
 }, 

//  findById(id, callback){

//     db.query(`SELECT name, id from teachers
//                WHERE id= $1 `, [id], function(err, results){
//                     if(err) throw `Database erro! ${err}`

//                     callback(results.rows[0])

//                })
//  }
        
}





