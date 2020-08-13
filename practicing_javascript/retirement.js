
//2 - Aposentadoria

const name = "Silvano";
const gender = "M";
const age = 65;
const contribution = 35;


//Contribuicao (anos) minima para homens: 35
//Contribuicao(anos) minima para mulheres: 30

//Regra 85-95
//Para homem, a idade + contribuicao >=95 
//Para mulher, a idade + contribuicao >=85  

//Este codigo deu certo - Meu codigo
const satisfy = age + contribution

if (gender == "F" && satisfy >= 85 && contribution >= 30) {
  console.log(`${name}, you are entitled to retire!`)

} else {
  if (gender == "M" && satisfy >= 95 && contribution >= 35) {
    console.log(`${name}, you are entitled to retire!`)
  } else {
    console.log(`${name}, you are not entitled to retire yet.`)

  }

}


// Mayk tinha recomendado este
//if (condicao1) {
// if (condicao2) {
// Condição 1 e 2 passaram
//} else {
// Condição 1 passou, porém condição 2 não passou
// }
//} else {
// Condição 1 não passou
//}   






//Codigo do Mayk  -  Apos REVER O CODIGO DO MAYK PERCEBI QUE PRECISO DE CONSIDERAR O TEMPO DE CONTRIBUICAO
// Vi tambem que posso usar mais de um Operadores relacionais e comparativos na mesma estrutura

//const nome = 'Silvano'
//const sexo = 'M'
//const idade = 62
///const contribuicao = 35

//const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
//const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
//const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

//console.log(homemPodeAposentar)

//if ( homemPodeAposentar || mulherPodeAposentar) {
//   console.log(`${nome}, você pode se aposentar!`)
//} else {
//  console.log(`${nome}, você não pode se aposentar!`)
//}

// MEU CODIGO errado

//2 - Aposentadoria

//const nome = "Silvana";
//const sexo = "M";
//const idade = 62;
//const contribuicao = 23;

//const s = idade + contribuicao
//	if (sexo == "F" && s >=85 ) {
//   console.log(`${nome}, você pode se aposentar!`)
//}
//  if  (sexo == "F" && s <85 ) {
//    console.log(`${nome}, você ainda não de se aposentar!`)


//} else {

//  if (sexo == "M" && s >=95 ) {
//    console.log(`${nome}, você pode se aposentar!`)
//}
//     if  (sexo == "M" && s <95 ) {
//       console.log(`${nome}, você ainda não de se aposentar!`)

//}
//  }