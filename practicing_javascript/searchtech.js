// Desafio 1-3 
// Criar funcao que verifica se o usuario trabalho com CSS (true of false)
// se sim utilizar esta funcao , imprimir informacoes do usario(s)



const users = [ 
    
                { name: "Carlos", tecnologias: [ "CSS" ,"HTML" ] },
                { name: "Jasmine",tecnologias: [ "CSS", "JavaScript" ]},
                { name: "Tuane",  tecnologias: [ "CSS" , "Node.js"]}
]

    
function checaSeUsuarioUsaCSS(user) {
  for (let tecnologia of user.tecnologias) {
        if (tecnologia == "CSS") {
            return true  //// TER MUITA ATENCAO ... SE ESTIVER USANDO " " USE EM TODO CODIGO
     } else {

    return false
}
}
}
//function userWorksCss (user) {
    //for (let tecnologia of user.tecnologias) {
        //if (tecnologia == "CSS") {      
       //console.log(user.name)
       //return true
      //     /} else {
           //   console.log(" Do nothing")
         //     return false
       //    }
     // }
   // }
      const Css = checaSeUsuarioUsaCSS(users[2])      
      console.log(Css)


      //for (let i = 0; i < users.length; i++) {
      //const usuarioTrabalhaComCSS = userWorksCss(users[i])
       // console.log(usuarioTrabalhaComCSS)
        //if(usuarioTrabalhaComCSS) {
        //console.log(`O usuário ${users[i].name} trabalha com CSS`)
    //} else {

    //console.log (` O usuario ${users[i].name} nao trabalha com CSS.`)
//}
//}


// Codigo a partir do codigo do Mayk ( deu certo, mas foi doido)

//function checaSeUsuarioUsaCSS(user) {
  //  for (let tecnologia of user.tecnologias) {
    //    if (tecnologia == "CSS") return true  //// TER MUITA ATENCAO ... SE ESTIVER USANDO " " USE EM TODO CODIGO
    //}

    //return false
//}

//for (let i = 0; i < users.length; i++) {
  //  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(users[i])
    //console.log(usuarioTrabalhaComCSS)
    //if(usuarioTrabalhaComCSS) {
      //  console.log(`O usuário ${users[i].name} trabalha com CSS`)
    //} else {

    //console.log (` O usuario ${users[i].name} nao trabalha com CSS.`)
//}
//}





//Codigo Mayk  - ESta info esta no arquivo desafio1_3
//function checaSeUsuarioUsaCSS(usuario) {
  //  for (let tecnologia of usuario.tecnologias) {
    //    if (tecnologia == 'CSS') return true
    //}

    //return false/
//}

//for (let i = 0; i < usuarios.length; i++) {
  //  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    //if(usuarioTrabalhaComCSS) {
      //  console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    //}}
      //}