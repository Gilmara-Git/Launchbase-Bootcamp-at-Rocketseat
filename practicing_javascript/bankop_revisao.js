user = {
    name: "Mariana",
    transactions:[] ,
    balance: 0
}

// Create the transaction and push it to transactions []
function createTransaction (transaction) {

    user.transactions.push (transaction)

    updateBalance(transaction)
    
}


createTransaction({type:"Credit", value: 50}) 
createTransaction({type:"Credit", value: 120})
createTransaction({type:"Debit", value: 80})
createTransaction({type:"Debit", value: 30})

// IMPORTANTe: apesar de meu parametro na funcao ser "transactions", assim eu consigo passar o objeto                                              
// para dentro do array   com seus dois atributos

// get parameter from createTransaction and update balance
function updateBalance (transaction) {

if (transaction.type==="Credit") {

    user.balance = user.balance + transaction.value

} else {
       
    user.balance = user.balance - transaction.value
}
    return user.balance
}




function getHigherTransactionByType (type){     /// PONTO DE MELHORA... O Mayk usou uniu duas condicoes com &&/ eliminou um laco
    
    let highTransaction
    let Hvalue = 0 

     for ( let transaction of user.transactions) {
        
        if (transaction.type === type && transaction.value > Hvalue)  {
                            
            Hvalue = transaction.value
            highTransaction = transaction
              
       }
       
    } 
    return highTransaction
        
} 

       


console.table(user)
console.log(user.balance)
//const HigherCreditValue = getHigherTransactionByType("Credit")
//const HigherDebitValue =  getHigherTransactionByType("Debit")
//console.log(HigherCreditValue)// Nao preciso nem de criar variavel para armazendar o resultado, ja pode colcoar a funcao no console.log
//console.log(HigherDebitValue)
console.log(getHigherTransactionByType("Credit"))
console.log(getHigherTransactionByType("Debit"))

//Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:

function getAverageTransactionValue (transaction) { // O MAYK USOU A SINTAXE ABAIXO
//let count=0
let SumTransactions = 0
let averageTransaction

for (transaction of user.transactions) {
    
    //SumTransactions = SumTransactions + transaction.value
    SumTransactions += transaction.value
    //count = count + 1
    averageTransaction = SumTransactions /user.transactions.length         ///count
    

}

return averageTransaction

}

// averageTransactionValue = getAverageTransactionValue ()
//console.log(averageTransactionValue)
console.log(getAverageTransactionValue())

//Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, 
//o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
// getTransactionsCount(); // { credit: 2, debit: 2 }

function getTransactionCount () {

let count1 = 0 
let count2 = 0 

for( let transaction of user.transactions) {
    if (transaction.type === "Credit") { 
         count1+= 1


    } else { 

        count2+= 1
    }

  
}

return  (`Credit: ${count1} , Debit: ${count2}`)

   
}

const countOfTransactionsByType = getTransactionCount ()
console.log(countOfTransactionsByType)
//console.log(getTransactionCount())