// Desafio 1-3  -  Tem um arquivo que copiei o codigo to Mayk
// Aprendi que PARA o looping de dentro funcionar, o looping de fora tem que ter iniciado. Senao sera
//lido somente as primeiras informacoes. 
// Criar funcao que verifica se o usuario trabalho com CSS (true of false)
// se sim utilizar esta funcao , imprimir informacoes do usario(s)
// Aqui o codigo (logica) esta dentro da propria funcao.. e tem um for dentro do outro



const users = [ 
    
    { name: "Carlos", techs: [ "HTML" ,"CSS" ] },
    { name: "Jasmine",techs: [ "JavaScript", "CSS" ]},
    { name: "Tuane",  techs: [ "HTML" , "Node.js"]}
]

function userWorksCss (user) {  
     for (let tech of user.techs) {
        if (tech == "CSS")  return true
              
     }
             
              return false

        }
    

    for (let i = 0; i < users.length; i++) {
        const workswithCSS = userWorksCss(users[i])
         console.log(workswithCSSorNot)

          if(workswithCSS) {
          console.log(`O usuário ${users[i].name} trabalha com CSS`)
      } else {
  
      console.log (` O usuario ${users[i].name} nao trabalha com CSS.`)
  }
    }


