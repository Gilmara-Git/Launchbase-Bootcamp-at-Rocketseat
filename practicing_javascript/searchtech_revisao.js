// Revisao sobre SEARCHTECH

// Criar funcao que verifica se o usuario trabalha com CSS (true of false)
// se sim utilizar esta funcao , imprimir informacoes do usario(s)


const users = [

  {
    name: "Carlos",
    techs: ["HTML", "CSS"]
  },

  {
    name: "Jasmine",
    techs: ["JavaScript", "CSS"]
  },

  {
    name: "Tuane",
    techs: ["HTML", "Node.js"]
  }
]



//for (let i=0; i< users.length; i++) {

//   const result= (users[i].name == "Carlos" || users[i].name == "Tuane")

// if (result) {
//  console.log(result)

//} else { 
// console.log( " Negativo")

//}


//}

function teste(user) {

  //for  (let tech of user.techs) { // deu certo

  //const result= (tech == "CSS")

  //if (result ){ // deu certo
  //return true  // deu certo

  for (let i = 0; i < users[t].techs.length; i++) {

    const result = (users[t].techs[i] == "CSS")

    if (result) {
      return true

    }
    //}
  }
}


//for (let user of users) { deu certo com o array de TECH sendo for let tech of techs

for (t = 0; t < users.length; t++) {

  const resultadoFuncaoTeste = teste(users[t])

  if (resultadoFuncaoTeste) {

    //console.log(`${user.name} possui CSS`) deu certo
    console.log(`${users[t].name} possui CSS`)

  } else {
    console.log(`${users[t].name} nao possui CSS`)
  }
}
//}

//function checaSeUsuarioUsaCSS(usuario, dois, tresdados, quatro, quantosDadosEuQuiser){


// 5 Coisas que precisamos saber sobre funcao
// 1 - Escrever a funcao/ Criar
// 2 - Saber como enviar um dado para dentro da funcao ( valor , variavel , objeto, array)
// 3 - Saber RETURN dados para fora da Funcao
// 4 - Saber utilizar a funcao ( Pega no nome da funcao e colocar os PARENSTESES)
// 5 - Saber enviar os dados para dentro da funcao QUANDO EXECUTAR - LA 
// 6 - Enviamos variaveis que estao em nosso projeto (usuario, dois, tresdados, quatro, quantosDadosEuQuiser)
// 7 - Em nosso caso agora somente temos uma variavel ( users, que e um ARRAY), no caso eu so posso mandar (users) assim.
// 8 - Saber como captura o retrun no escopo global

// ******* - Curiosidade extra:  *******
// 9 - Para que server a FUNCAO : 
// Para reutilizar um bloco de codigo.

// 10 - Qual o objetivo?
// Para eu nao repetir o mesmo codigo

// 11 -  Porque eu vou usuar uma funcao ? 
//       Para facilitar e diminuir o codigo

//Ao executar uma funcao eu pego uma variavel no contexto de fora (escopo global) e jogo para o contexto de dentro (Escopo local)
// Em tese eu pego a variavel de FORA e jogo para a funcao que poder ter qualquer nome de parametro (x,y, ou juro) no parenteses
// Claro que ai vc tem que imprimir este qualquer nome (x,y ou juro) no console
// UMA FUNCACO NAO PRECISA OBRIGATORIAMENTE RECEBER OU RETORNAR VALORES===>> vc pode fazer funcao que 
// nao receba valoes e vc pode fazer funcao que nao retorna valores.

//}

//function checaSeUsuarioUsaCss(user) {
                    //function checaSeUsuarioUsaCss(juro) {
                  // Esse juro e uma variavel 
                  // vamos ver se podemos mudar ela?
                  // juro = "ALO"     - Isso aqui muda o objeto users para ALO

//console.log( `Que tem aqui :`+ user)

//console.log(users)

//}

//checaSeUsuarioUsaCss ()

//for (let user of users) {
// ATENCAO : For o USER que esta aqui no FOR e um contexto completamento diferente do usuario da FUNCAO,
// Um contexto nao tem nada a ver com o outro
//checaSeUsuarioUsaCss(user)

//}



//function checaSeUsuarioUsaCss(user) {

//for (let tech of users.techs) {
//  console.log (tech === "CSS")


// }




//console.log(users)

////}

//checaSeUsuarioUsaCss ()

//for (let user of users) {
// ATENCAO : For o USER que esta aqui no FOR e um contexto completamento diferente do usuario da FUNCAO,
// Um contexto nao tem nada a ver com o outro
//checaSeUsuarioUsaCss(user)
//}

//}


//// VAr
/// variavem "var" existe mas nao se usa muito  e sim Let e const

//Mayk explica erro de variavel var no JS  - 1:45 do video
//https://www.youtube.com/watch?v=WuTQjWmeBVA&feature=youtu.be

// excecucao de funcao uma dentro da outra 2:12 do video