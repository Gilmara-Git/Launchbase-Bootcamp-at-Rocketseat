
//Desafio 1-4  - Aplication : Bank Operations

// Desafios:
// Booleanos
// Organizacao
// Padronizacao
// Escrita

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


createTransaction({type:"Credit", value: 100}) 
createTransaction({type:"Credit", value: 10})
createTransaction({type:"Credit", value: 1200})
createTransaction({type:"Debit", value: 190})
createTransaction({type:"Debit", value: 200})
createTransaction({type:"Debit", value: 500})

// IMPORTANTe: apesar de meu parametro na funcao ser "transactions", assim eu consigo passar o objeto                                              
// para dentro do array   com seus dois atributos

// get parameter from createTransaction and update balance
function updateBalance (transaction) {

if (transaction.type==="Credit") {

    user.balance = user.balance + transaction.value

} else {
       
    user.balance = user.balance - transaction.value
}

}

console.table(user)
//console.log(user.balance)


function getHigherTransactionByType (type) {     /// PONTO DE MELHORA... O Mayk usou uniu duas condicoes com &&/ eliminou um laco

    let higherTransaction
    let higherValue = 0

        for (let transaction of user.transactions) {
            if (transaction.type == type && transaction.value > higherValue){

                higherValue= transaction.value
                higherTransaction = transaction
                
            }

            }

                return higherTransaction


            }

const HigherCreditValue = getHigherTransactionByType("Credit")
const HigherDebitValue =  getHigherTransactionByType("Debit")
console.log(HigherCreditValue)
console.log(HigherDebitValue)


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

//const averageTransactionValue = getAverageTransactionValue (transaction)
//console.log(averageTransactionValue)


//Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit, 
//o retorno da função deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
// getTransactionsCount(); // { credit: 2, debit: 2 }

function getTransactionCount (transaction) {

let count1 = 0 
let count2 = 0 

for( transaction of user.transactions) {
    if (transaction.type === "credit") { 
         count1+= 1


    } else { 

        count2+= 1
    }

  
}

return  (`Credit: ${count1} , Debit: ${count2}`)

   
}

//const countOfTransactionsByType = getTransactionCount (transaction)
// console.log(countOfTransactionsByType)