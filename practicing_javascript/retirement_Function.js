// Men's contribution need to be at least: 35 years
//If age + contribution >= 95 { entitled to retire
//} else { not entitled to retire }

// Women's contribution need to be at least: 30 years
//If age + contribution >= 85 { entitled to retire
//} else { not entitled to retire }


const contributor = {
    name: "Silvano",
    gender: "M",
    age: 65,
    contribution: 35
}


const satisfy = contributor.age + contributor.contribution


function checkIfPersonCanRetire(contributor) {


    if (contributor.gender == "F" && satisfy >= 85 && contributor.contribution >= 30) {
        console.log(`${contributor.name}, you are entitled to retire!`)

    } else {
        if (contributor.gender == "M" && satisfy >= 95 && contributor.contribution >= 35) {
            console.log(`${contributor.name}, you are entitled to retire!`)
        } else {
            console.log(`${contributor.name}, you are not entitled to retire yet.`)

        }

    }

}

checkIfPersonCanRetire(contributor)

//console.log(contributor)