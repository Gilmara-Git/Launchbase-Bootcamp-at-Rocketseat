// Challenge 1-4
//Application : Bank Operations


user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {

    user.transactions.push(transaction)
    updateBalance(transaction)

}

createTransaction({ type: "Credit", value: 50 })
createTransaction({ type: "Credit", value: 120 })
createTransaction({ type: "Debit", value: 80 })
createTransaction({ type: "Debit", value: 30 })



function updateBalance(transaction) {

    if (transaction.type === "Credit") {

        user.balance = user.balance + transaction.value

    } else {

        user.balance = user.balance - transaction.value
    }
    return user.balance
}

function getHigherTransactionByType(type) {

    let higherValue = 0
    let higherTransaction

    for (let transaction of user.transactions) {

        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }

    }

    return higherTransaction
}

hTCredit = getHigherTransactionByType("Credit")
hTDebit = getHigherTransactionByType("Debit")
//console.log(hTCredit)
//console.log(hTDebit)


function getAverageTransactionValue() {
    let count = 0
    let sumtransctionsValue = 0

    for (let transaction of user.transactions) {
        count += 1
        sumtransctionsValue += transaction.value
        averageTransactionValue = sumtransctionsValue / count
    }
    return averageTransactionValue
}

ATValue = getAverageTransactionValue()


function getTransactionsCount() {

    let CountCredit = 0
    let CountDebit = 0
    for (transaction of user.transactions) {


        if (transaction.type == "Credit") {

            CountCredit += 1

        } else {

            CountDebit += 1

        }

    }

    return (`Credit:${CountCredit} , Debit: ${CountDebit}`)
}


TCounts = getTransactionsCount()


console.log(user.balance)

createTransaction({ type: "Credit", value: 50 })
createTransaction({ type: "Credit", value: 120 })
createTransaction({ type: "Debit", value: 80 })
createTransaction({ type: "Debit", value: 30 })


console.log(hTCredit)
console.log(hTDebit)
console.log(ATValue)
console.log(TCounts)