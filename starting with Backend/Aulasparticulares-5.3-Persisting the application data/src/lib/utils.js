

module.exports = {

  age(timestamp) {

    const today = new Date()
    const birthDate = new Date(timestamp)

    currentYear = today.getFullYear()
    birthYear = birthDate.getFullYear()


    let age = currentYear - birthYear

    const monthDifference = today.getMonth() - birthDate.getMonth()

    if (monthDifference < 0 || monthDifference == 0 && today.getDate() <= birthDate.getDate()) {

      age = age - 1

    }
    return age
  },


  graduation(userDegree) {


    switch (userDegree) {

      case "H":
        return "High School";

      case "A":
        return "Associates";

      case "B":
        return "Bachelor";

      case "M":
        return "Masters";

      case "D":
        return "Doctorate";

    }

  },


  date(timestamp) {

    const dob = new Date(timestamp)

    const year = dob.getUTCFullYear()
    const month = `0${dob.getUTCMonth() + 1}`.slice(-2) // We needed to include and then slice 2 digits
    const day = `0${dob.getUTCDate()}`.slice(-2)

    return {

      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthday: `${month}/${day}`,// now we are returning an ISO object
      format: `${day}/${month}/${year}`
    }
  },

  grade(grade) {

    switch (grade) {
      case "5":
        return "5th";

      case "6":
        return "6th"

      case "7":
        return "7th"

      case "8":
        return "8th"

      case "9":
        return "9th"

      case "10":
        return "10th"

      case "11":
        return "11th"

      case "12":
        return "12th"

    }
  }
}








