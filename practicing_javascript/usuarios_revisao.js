const users = [
  {
    name: "Carlos",
    techlist: ["HTML , CSS"]
  }
  ,
  {

    name: "Jasmine",
    techlist: ["JavaScript , CSS"]
  },

  {
    name: "Tuane",
    techlist: ["HTML , Node.js"]
  }
]

// Desafio 
//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

//Solucao com o primeiro for: MINHA SOLUCAO MELHORADA

for (let i = 0; i < users.length; i++) {

  //console.log(`${users[i].name} trabalha com ${users[i].techlist}`)
  console.log( users[i].name + " "+ "works with " + users[i].techlist) /// Aqui eu concatenei sem chamar a variavel dentro de ${}


}


//=====================================================================
// Solucao 1 do MAyk na revisao


//for (a=0; a<users.length; a++) {  

//let tecnologias = " ";

//for (let i=0; i < users[a].techlist.length; i++) {

//  if (i=0) {
//tecnologias = users[a].techlist[i]
//} else {

//  tecnologias  = tecnologias + users[a].techlist[i]
//}

//console.log(users[a].name + "trabalha com"+ tecnologias)
//console.log(`${users[a].name} trabalha com ${users[a].techlist.join( " ," )}`) - O join transforma o ARRAY em string
///// Aqui ele ensiou  a fazer o JOIN - Note que tem um array dentro do outro
//}

//}

// ================================================================================

// Solucao 1 do MAyk na revisao

// Vamos usar o "For of"

//for (qualquercoisa of seila){
// for (UmaPosicaoDoArray of users)     
//for (user of users) {
//Este user e uma posicao ou objeto do array e o SEgundo USERS e o array em si.
// Eu posso declarar com CONST , LET

//console.log (`${user.name} trabalha com ${user.techlist.join( "," )}`)   // O JOIN transforma o ARRay em string
// }





