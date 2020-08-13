// searching for techs

//Esta no GITHUB

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

function CSS(user) {
  // Quando tem necessidade de um sub looping, prepara o sub looping primeiro e depois rodar o outro 
  // "for"  com for( let i=0; i < ........)
  // Neste ponto a funcao foi so declarada
  // A mesma ainda sera chamada pelo segundo laco de repeticao

  for (let tech of user.techs) {
    if (tech == "CSS") return true

  }

  return false


}

for (let i = 0; i < users.length; i++) {
  result = CSS(users[i])
  if (result) {

    console.log(`User ${users[i].name} works with CSS.`)
  } else {

    console.log(`User ${users[i].name} does not work with CSS.`)
  }
}
//}


//const result= CSS(users[0])
//const result= CSS(users[1])
//const result= CSS(users[2])

//console.log(result)
// Exercicio de Cima  >  funcao retorna true or false
//----------------------------------------------------------------------------
