
// This code is to store a Developer's data

const devdata = {

        name: "Carlos",
        age: 32,
        
        tech : [  // atencao aqui pode-se colocar o array direto dentro do objeto(neste caso use : e nao =)

            {
                name: "C++ ",
                specialty: "Desktop"

            }, 
            {
                name: "Python",
                specialty: "Data Science"
            },
            {
                name: "JavaScript",
                specialty: "Web/Mobile"

            }


        ]
       
        }

        
    console.log(`O usuario ${devdata.name} tem "${devdata.age}" e usa a tecnologia (${devdata.tech[0].name}) com especialidade em ${devdata.tech[0].specialty}.`)    

    //console.log(devdata) // isso imprimi o objecto e o array



///// Codigo to Mayk

// Vetores e objetos

//const programador = {
 //   nome: "Mayk",
 //   idade: 35,
 //   tecnologias:  [
  //      { nome: 'JavaScript', especialidade: 'Desktop' }, 
   //     { nome: 'JavaScript', especialidade: 'Web/Mobile' }
   // ]
//}

//console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)