

// Comentarios a partir do codigo do Mayk

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

function calculaSaldo(receitas, despesas) { // Note que quando a gente cria a funcao e indica os parametros em plural e pq e ARRAY
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    
    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) { // Note que quando a gente cria a funcao e indica os parametros em plural e pq e ARRAY
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}
///// esta funcao "soma" e uma funcao generica que contem um ARRAY de numero... Este array e representacao em plural e o array e criado em 
// memoria no momento que e chamada e sera utilizada para somar as receitas e despesas

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    // Mayk fez assim :
    // (saldoPositivo >=0)
    // If (saldoPositivo)
    let positivoOuNegativo; // Assim a variavel esta declarada como vazio, somente estamos inicializando ela

    if (saldo >= 0) {
        positivoOuNegativo = "POSITIVO";
        console.log(`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
    } else {
        positivoOuNegativo  = "NEGATIVO";
        console.log(`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
    }
}

    // Como o saldo ira variar entre positivo ou negativo iremos criar uma variavel para imprimir em nosso Console