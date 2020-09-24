module.exports =  {

        age : function(timestamp) {
        const today = new Date() // This is not a construtor. It is an object that contains date. Como nao estou
                                // passando paramentro pega a data de HOJE, ano atual, mes atual
        const birthDate = new Date(timestamp) // Aqui pode-se passar o timestamp quando eu crio um objeto de data
    
        let age = today.getFullYear() - birthDate.getFullYear()
    
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month <0 || month == 0 && today.getDate() <= birthDate.getDate() ) {
                                                        // aqui tem que ser <= senao nao da certo
         age = age - 1
        
        } 
    
    
        return age
    },

        date: function(timestamp) {

            const date = new Date(timestamp)

            //yyyy vamos pegar o year
            const year = date.getUTCFullYear()

            //yyyy vamos pegar o month - o month vem de 0 a 11  (0 = Janeiro e 11 = dezembro)
            const month = `0${date.getUTCMonth() + 1}`.slice(-2)

            //yyyy vamos pegar o day - Datas vem de 1 a 31 
            const day = `0${date.getUTCDate()}`.slice(-2)

           return {
                day,
                month,
                year,
                iso: `${year}-${month}-${day}`,
                birthday: `${day}/${month}`
           }

        },


        blood_type: function(blood){

            switch(blood) {

                case "A1":
                    return "A+";
                
                case "A0":
                    return "A-";

                case "B1":
                    return "B+";
                        
                case "B0":
                    return "B-";

                case "AB1":
                    return "AB+";

                case "AB0":
                    return "AB-";

                case "O1":
                    return "O+";

                case "O0":
                    return "O-";

            }
        } 
        

}