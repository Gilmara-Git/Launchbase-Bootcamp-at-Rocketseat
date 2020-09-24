const db =  require("../../config/db")
const {date } = require("../../lib/utils") 

module.exports = {

    all(callback){
        db.query(`SELECT instructors.*, count(members) AS total_members
                    FROM instructors
                    LEFT JOIN members ON (members.instructor_id = instructors.id) 
                    GROUP by instructors.id
                    ORDER by total_members DESC`

        , function(err, results){
            if(err) throw `Database Error! ${err}`
            callback(results.rows)
    
        })   
    },

    create(data, callback) { 
           

    const query = ` 

        INSERT INTO instructors ( 

            name,
            avatar_url,
            dob,
            gender,
            services,
            created_at
        ) VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id    
    `

    const values = [
        data.name,
        data.avatar_url,
        date(data.dob).iso,
        data.gender,
        data.services,
        date(Date.now()).iso
    ] 

    db.query(query, values, function(err, results){

        if(err)  throw `Database Error! ${err}`

        callback(results.rows[0])
    })
    
    },

    find(id, callback){

         db.query(`
            SELECT * 
            FROM instructors 
            WHERE id = $1`, [id], function(err, results){
               if(err)  throw `Database Error! ${err}`

                callback(results.rows[0])

         })
       },

    findBy(filter, callback){
       db.query(` SELECT instructors.*, count(members) AS total_members
                    FROM instructors
                    LEFT JOIN members ON (members.instructor_id = instructors.id)
                    WHERE instructors.name ILIKE '%${filter}%'
                    OR instructors.services ILIKE '%${filter}%'
                    GROUP by instructors.id
                    ORDER by total_members DESC`
       , function(err, results){
           if(err) throw `Database error! ${err}`

           callback(results.rows)
       })

    },

       update(data, callback){

        const query = `
            UPDATE instructors SET
            avatar_url = ($1),
            name = ($2),
            dob = ($3),
            gender = ($4),
            services = ($5)
            WHERE id = $6        
        `
            const values  = [

            data.avatar_url,
            data.name,
            date(data.dob,).iso,
            data.gender,
            data.services,
            data.id
            
            ]

            db.query(query, values, function(err, results){

                if(err)  throw `Database Error! ${err}`

                callback()
            })

       },

       delete(id, callback){
        db.query(`DELETE FROM instructors WHERE id= $1`, [id], function(err, results){
            if(err) throw `Database Error! ${err}`
            
            
            return callback()

        })

       },
       paginate(params){

       const { filter, limit, offset, callback } = params

       let query ="", 
           filterQuery = "",
           totalQuery = `(SELECT count(*) FROM instructors) AS total` 


       if(filter) { 
        filterQuery = `
        WHERE instructors.name ILIKE '%${filter}%'
        OR instructors.services ILIKE '%${filter}%'`
      

       totalQuery =`(   
                    SELECT count(*) from instructors
                    ${filterQuery} ) AS total`

                    
            }


        query = 
            `SELECT instructors.*, ${totalQuery}, count(members) AS total_members
                FROM instructors
                LEFT JOIN members ON (members.instructor_id = instructors.id)
                ${filterQuery}
                GROUP BY instructors.id
                ORDER BY total_members DESC
                LIMIT $1 
                OFFSET $2
                         `


            db.query(query, [limit, offset], function(err, results){

                        if(err) throw `Database error! ${err}`

                        callback(results.rows)
            })
                        
            }

    }
