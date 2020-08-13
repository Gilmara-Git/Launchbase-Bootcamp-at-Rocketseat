//9- >> Objetos

//Objeto e uma colecao de propriedades que recebem valores e funcionalidades DE alguma coisa aqui na programacao.

//Analogia
//Cell phone tem suas propriedades (tamanho, cores, peso)
//Cell phone tem suas funcionalidades (Liga, desliga, abaixo volume)


//como criar um objeto :

//Objeto 01 e suas propriedades
const aluno01 = {
	
nome: "Gilmara",
nota: 9.8

}

//Objeto 02 e suas propriedades
const aluno02 = {
	
nome: "Jussara",
nota: 5.8

}

//Objeto 03 e suas propriedades
const aluno03 = {
	
nome: "Gabriela",
nota: 6.8

}

const media = (aluno01.nota + aluno02.nota + aluno03.nota )/3

console.log(`A media dos alunos e: ${media}`)
console.log(aluno02.nota)

//Assim que se acessa as propriedades e funcionalidades de um objeto
//Digita o objeto e '.' para chamar as propriedades e funcionalidades

//*Sempre que falamos de funcionalidade num objeto CHAMAMOS ISSO DE METODO *



//Antes era somente com as variaveis, sem trabalhar com objeto
//const media = notaAluno01 + notaAluno02 + notaAluno3 )

