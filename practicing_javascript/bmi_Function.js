

const user = {

    name: "Carlos",
    weight: 104,
    height: 1.88

}


const bmi = user.weight / (user.height * user.height)

function checkBmi(user) {

    if (bmi >= 30) {

        console.log(`${user.name}, you are overweight.`)

    } else {

        console.log(`${user.name}, you are not overweight.`)
    }
}

checkBmi(user)