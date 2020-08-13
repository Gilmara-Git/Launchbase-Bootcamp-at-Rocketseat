
// Desafio 1-3  -  Tem um arquivo que copiei o codigo to Mayk
// Aprendi que PARA o looping de dentro funcionar, o looping de fora tem que ter iniciado. Senao sera
//lido somente as primeiras informacoes. 
// Criar funcao que verifica se o usuario trabalho com CSS (true of false)
// se sim utilizar esta funcao , imprimir informacoes do usario(s)
// Aqui o codigo (logica) esta dentro da propria funcao.. e tem um for dentro do outro



const users = [ 
    
    { name: "Carlos", tecnologias: [ "HTML" ,"CSS" ] },
    { name: "Jasmine",tecnologias: [ "JavaScript", "CSS" ]},
    { name: "Tuane",  tecnologias: [ "HTML" , "Node.js"]}
]

function userWorksCss (user) {  
     for (let tecnologia of user.tecnologias) {
        if (tecnologia == "CSS") return true
       //console.log(user.name)
       
      } 
             console.log(" Do nothing")
              return false

           }
     
            
    for (let i = 0; i < users.length; i++) {
        const usuarioTrabalhaComCSS = userWorksCss(users[i])
         console.log(usuarioTrabalhaComCSS)

          if(usuarioTrabalhaComCSS) {
          console.log(`O usuário ${users[i].name} trabalha com CSS`)
      } else {
  
      console.log (` O usuario ${users[i].name} nao trabalha com CSS.`)
  }
  }
