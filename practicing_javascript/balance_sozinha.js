
// Esta no GITHUB

const users = [
    {
        name: 'Salvio',
        revenues: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        revenues: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        revenues: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]




function calculateBalance(revenues, expenses) {

    const totalOfRevenue = sumOfNumbers(revenues)
    const totalOfExpenses = sumOfNumbers(expenses)
    //console.log(totalOfRevenue)
    //console.log(totalOfExpenses)

    balance = totalOfRevenue - totalOfExpenses
    return balance



}

function sumOfNumbers(numbers) {
    let sum = 0
    for (let elementValue of numbers) {
        sum = sum + elementValue
    }

    return sum

}



for (let user of users) {

    balanceAmount = calculateBalance(user.revenues, user.expenses)
    //console.log(balanceAmount.toFixed(2))

    let balanceStatus;

    if (balanceAmount >= 0) {

        balanceStatus = "POSIVITE"

        console.log(`${user.name} has a ${balanceStatus} balance of ${balanceAmount.toFixed(2)}.`)
    } else {

        balanceStatus = "NEGATIVE"

        console.log(`${user.name} has a ${balanceStatus} balance of ${balanceAmount.toFixed(2)}.`)

    }

}
//console.log(users[0].expenses)

//const R = calculateBalance(users[0].revenues[0])
//console.log(R)

//console.log(users[0].revenue)

