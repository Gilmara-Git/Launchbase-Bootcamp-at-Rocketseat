
// Desafio 1-3 
// Program to store users
// Users have name, teconologies


const users = [ //{ Assim da erro na hora do Join

        //name: "Carlos",

        //techlist: [
            
           // { t1: "HTML, CSS" }

           // ]   
                 

           {
        name: "Carlos",

        techlist: [ "HTML , Node.js"]
     }
       , 
{  
    
         name: "Jasmine",

         techlist: [ "JavaScript , CSS"  ]
        },

        { name: "Tuane",

          techlist: [ "HTML , Node.js"]
    }
]
    //console.log(users[2].name, users[2].techlist[0] )
  // QUANDO E SO UM ATRIBUTO QUE EU QUERO IMPRIMIR, DA PARA IMPRIMIR ASSIM
  // SE FOR COMO ABAIXO, COLOCANDO MAIS DE 1 ATRIBUTO PARA IMPRIMIR, TEM QUE FAZER COMO ABAIXO
  //OU SEJA DIG ATE O ULTIMO ATRIBUTO  
    


    //for (let user of users) {

       // console.log(`${users[0].name} trabalha com ${users[0].techlist[0].technologies}`)
       // console.log(`${users[1].name} trabalha com ${users[1].techlist[0].technologies}`)
        //console.log(`${users[2].name} trabalha com ${users[2].techlist[0].technologies}`)

    // ESTA SOLUCAO IMPRIMI 3 X  e aprendi como nao imprimi 3 x  -- veja abaixo como imprimir somente uma vez
   //}

    for (let i=2; i<users.length; i++) {

        console.log(`${users[0].name} trabalha com ${users[0].techlist[0].technologies}`)
        console.log(`${users[1].name} trabalha com ${users[1].techlist[0].technologies}`)
        console.log(`${users[2].name} trabalha com ${users[2].techlist[0].technologies}`)

        // ESTA SOLUCAO AINDA NAO E O IDEAL --- veja abaixo solucao que peguei do codigo do "Mayk"
   // }
                        //////IMPORTANTE ////// COISA NOVA /////

                        //for (let usuario of usuarios) {
                            //console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
                        //}

    //for (let user of users) { // aqui ele ira percorrer por pelo array user.length
        //let user of users  //- >  para cada user do users
       //console.log(`${user.name} trabalha com ${user.techlist.join(', ')}`) 

       //console.log(users[0].techlist)

        // Posso CONCATENAR > 
        //console.log(`${user.name}  + "trabalha com " ${user.techlist.join(', ')}`) 

         //aqui nao ira repetir as respostas, ou seja quando ele rodar pela 2 vez e perceber
         //que a informacao e a mesma, ele ira fazer um JOIN da informacao...e mostra somente uma vez
         //e isso acontecera subesequentemente.

}

    /////////////////////// MINHA DUVIDA ESTA AQUI ABAIXO

    /// SE EU TIVESSE DEIXADO O OBJETO ASSIM, DA ERRO, 
    // TAMBEM DA ERRO SE EU COLOCAR MAIS OBJETOS DENTRO DE TECHLIST

    //const users = [ {

       // name: "Carlos",cls

        //techlist: [ {
            
            //t1: "HTML, CSS" }         
        ////]
//}
    //for (let user of users) { // aqui ele ira percorrer por pelo array user.length
        //console.log(`${user.name} trabalha com ${user.techlist[i].join(', ')}`) 
        // aqui nao ira repetir as respostas, ou seja quando ele rodar pela 2 vez e perceber
        // que a informacao e a mesma, ele ira fazer um JOIN da informacao...e mostra somente uma vez
        // e isso acontecera subesequentemente.

   // } 