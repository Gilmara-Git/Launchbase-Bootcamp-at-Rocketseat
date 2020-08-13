// This is a program code to store business data such as Name, Color, Focus, Address
// Then print it out 


// Meu codigo original

// This is a program code involves the creation of an object to store business data such as Name, Color, Focus, Address
// Then print it out 

//const busiInfo = {

//      name: "Rocketseat",
//    color: "Purple",
//  focus: "Programming",

//address: {

//  street: "Rua Guilherme Gembala",
//number: 260

//}


//}

//console.log(`A empresa ${busiInfo.name} esta localizada em ${busiInfo.address.street}, ${busiInfo.address.number}`)


// Codigo modificado depois que vi o codigo do Diego
const busiInfo = {

  name: "Rocketseat",
  color: "Purple",
  focus: "Programming",


  address: {

    street: "Rua Guilherme Gembala",
    number: 260

  },

  employee: {
    name: "Carlos",
    role: "Web Developer",

    employaddress: {

      empAddress: "Glacinda",
      number: 3
    }

  }
}

//}

console.log(`A empresa ${busiInfo.name} esta localizada em ${busiInfo.address.street}, ${busiInfo.address.number}
e o colaborador ${busiInfo.employee.name} vive na rua ${busiInfo.employee.employaddress.empAddress}, ${busiInfo.employee.employaddress.number}`)


// Codigo do Diego:

//const usuario = {
//  nome: 'Diego',
//empresa: {
//  nome: "Rocketseat",
//cor: "roxo",
//foco: "Programação",
//endereco: {
//  rua: "Rua Guilherme Gembala",
//numero: 260
//}
//}
//}

//console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)