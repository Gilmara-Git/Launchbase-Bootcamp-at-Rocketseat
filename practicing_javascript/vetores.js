
// Vetores ou arrays : Sao variaveis que permitem guardamos diversos objetos dentro dela.
// Colecao de valores agrupados em uma variavel

// Vamos pegar os objetos criados anteriormente e vamos coloca-lo em um array.

// Array 01 
const alunos = [ //abre colchetes
//aqui dentro do array iremos colocar os objetos do aluno01, aluno02 e aluno03
// alunos = [0,1,2] - array/vetor de 3 posicoes que contem 3 objetos
{ 
    nome: "Gilmara",
    nota: 9.8

},
{   
    nome: "Jussara",
    nota: 5.8
},
{
    nome: "Gabriela",
    nota: 6.8
}
] // fecha colchetes

// Para pegar as propriedades do objeto dentro do array vamos e fazer calculos sera assim:

//console.log(alunos[0].nota)
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota )/3
console.log(media)
console.log(alunos) // aqui imprimi os objetos do array e suas propriedades)


// Array 02 
const nomesdeAlunos = ["Maky", "Diego", "Fulano" ] 
console.log (nomesdeAlunos)


// Array 03 

const numeros = [5,2,9,8,6]
console.log(numeros)


 // Para este objeto entrar no array "obj", este objeto tem que vir antes to array, 
 // Se vier depois ele nao o le.
const aluno = {
	
    nome: "Dayana",
    nota: 9.8
    
    }

const obj = [
    {
        nome: "Dayana",
        nota: 9.8
    },
        {
        nome: "Janaina",
        nota: 9.8

        }

]
    
console.log(obj[0])


//Objeto 01 e suas propriedades
//const aluno01 = {
	
  //  nome: "Gilmara",
    //nota: 9.8
    
    //}
    
    //Objeto 02 e suas propriedades
    //const aluno02 = {
        
    //nome: "Jussara",
    //nota: 5.8
    
    //}
    
    //Objeto 03 e suas propriedades
    //const aluno03 = {
        
    //nome: "Gabriela",
    //nota: 6.8
    
    //}
    
    //const media = (aluno01.nota + aluno02.nota + aluno03.nota )/3
    
    //console.log(`A media dos alunos e: ${media}`)
    //console.log(aluno02.nota)