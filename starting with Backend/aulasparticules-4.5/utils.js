
data = require("./data.json")             


module.exports = {

age : function(timestamp){

    const today = new Date()
    const birthDate = new Date(timestamp)

    currentYear = today.getFullYear()
    birthYear = birthDate.getFullYear()
    
    
    let age =  currentYear - birthYear
   
    const monthDifference = today.getMonth() - birthDate.getMonth()

    if (monthDifference < 0 || monthDifference == 0 && today.getDate() <= birthDate.getDate() ){

    age = age - 1 
    
   }
   return age
}, 


graduation : function(userDegree){
           
                   
		switch(userDegree) {

      case "H":
      return "High School";
  
      case "A":
      return "Associates";
  
      case "B":
      return "Bachelor";
      
      case "M":
      return "Master";
  
      case "D":
      return "Doctorate";

    }
                
  },                 
          

date: function(timestamp) {

    const dob = new Date(timestamp)

    const year = dob.getUTCFullYear()
    const month =  `0${dob.getUTCMonth() + 1}`.slice(-2) // We needed to include and then slice 2 digits
    const day = `0${dob.getUTCDate()}`.slice(-2)

   return(`${year}-${month}-${day}`) // html expects return of dob as year , month and day
}


}


    

   