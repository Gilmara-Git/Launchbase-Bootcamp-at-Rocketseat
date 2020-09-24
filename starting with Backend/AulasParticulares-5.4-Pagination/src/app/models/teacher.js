const db =  require("../../config/db")
const { date, graduation} =  require("../../lib/utils")

module.exports = { 
all(callback) { 

    db.query( `SELECT teachers.*, count(students) AS total_students
                FROM teachers 
                LEFT JOIN students ON(teachers.id = students.teacher_id)
                GROUP BY teachers.id
                ORDER BY total_students DESC`, function(err, results){

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

 }, 

 findBy(filter, callback){
    db.query(`SELECT teachers.*, count(students) AS total_students
                FROM teachers 
                LEFT JOIN students ON(teachers.id = students.teacher_id)
                WHERE teachers.name ILIKE '%${filter}%'
                OR teachers.subjects ILIKE '%${filter}%'
                GROUP BY teachers.id
                ORDER BY total_students DESC`, function(err, results){
                    if(err) throw `Database erro! ${err}`
                    //console.log(results)
                    callback(results.rows)
                })

 }, 

 paginate(params){

    const { filter, limit, offset , callback} = params

    let query = "",
    filterQuery = "",
    totalQuery = `
                    (SELECT COUNT(*) from teachers) AS total`


    if(filter) { 
        filterQuery = `
                    WHERE teachers.name ILIKE '%${filter}%'
                    OR teachers.subjects ILIKE '%${filter}%'`

        totalQuery = `(
                      SELECT COUNT(*) from teachers
                      ${filterQuery} ) AS total`
                      
    }


        query = `   
                    SELECT teachers.*, ${totalQuery}, COUNT(students) AS total_students
                    FROM teachers
                    LEFT JOIN students ON (students.teacher_id = teachers.id) 
                    ${filterQuery}   
                    GROUP BY teachers.id                       
                    ORDER BY total_students DESC
                    limit $1 
                    OFFSET $2   `

    db.query(query, [limit, offset], function(err, results){
        if(err) throw `Database error. ${err}`

        callback(results.rows)
        //console.log(results)
    })
        
    }    
    
 }
        






