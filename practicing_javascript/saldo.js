// Program to calculate balance = revenue - expenses 

const users = [

        {
            name: "Salvio",
            revenue: [ 115.3, 48.7, 98.3, 14.5],
            expenses:[ 85.3, 13.5, 19.9]
        },
        {
            name: "Marcio",
            revenue: [ 24.6, 214.3, 45.3],
            expenses:[ 185.3, 12.1, 120.0]
        },
        {
            name: "Lucia",
            revenue: [ 9.8, 120.3, 340.2, 45.3],
            expenses:[ 450.2, 29.9]
        },

]


//for ( let i=0; i<users.length; i++)     { // da para usar os FOR de dois jeitos}

    for (let user of users) {
        calculateBalance( user.revenue , user.expenses )
        
    //calculateBalance(users[i].revenue, users[i].expenses)
    

    if (Balance > 0) {
        console.log(`${user.name} possui saldo POSITIVO de ${Balance.toFixed(2)}`)
        //console.log(`${users[i].name} possui saldo POSITIVO de ${Balance.toFixed(2)}`) // .tofixed(2)//duas casas decimais
   
    } else {
       
        console.log(`${user.name} possui saldo NEGATIVO de ${Balance.toFixed(2)}`)
        //console.log(`${users[i].name} possui saldo NEGATIVO de ${Balance.toFixed(2)}`)
    }
    }
 //}
 
function calculateBalance(revenue, expenses) {

const SumRevenues = sumNumbers(revenue)

const SumExpenses = sumNumbers(expenses)

Balance = SumRevenues - SumExpenses 
return Balance
}

// Esta aqui e uma funcao para trabalhar com um array de numeros (vamos somar)
// e como nao sabemos a extensao do array usamos LET NUMERO OF NUMEROS
// ESTE ARRAY ESTA DENTRO DE UM OBJETO E A FUNCAO LEU NUMA BOA
function sumNumbers(numbers) {  
    
    let sum = 0
    for (let number of numbers) {
        sum = sum + number
        
    }
    return sum
}

    //const SumRevenues = somaNumeros(user[0].revenue)

    //const SumExpenses = somaNumeros(user[0].expenses)

    //const Balance = SumRevenues - SumExpenses 
    
    //console.log(SumRevenues)
    //console.log(SumExpenses)
    
    //console.log(Balance)
    
  




