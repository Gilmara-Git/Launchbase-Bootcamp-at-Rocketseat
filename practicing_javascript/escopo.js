//14 .....>> ESCOPO


//Termo:
//Escopo de bloco
//O que e bloco no Js ?

//Um If que abriu e fechou as chaves
//Um for que abriu e fechou as chaves
//Um functions que abriu e fechou as chaves

//Muitas vezes estoura erro, e pode ser que uma variavel so funciona dentro 
//do escopo de bloco

//Exemplo:

//for (let i=0; i<aluno.length; i++) {
//	if (i==0) {
//	let soma = 0
//}
	//Se o comando de imprimir a soma vier aqui...vai dar erro, pois
//vai dizer que a variavel nao foi definida
//	Soma = soma + aluno[i].nota


// Vamos ver como funciona a passagem de parametro em variaveis de escopo Escopo global e escopo local
// 

const aluno =  [
// SE COLOCAR AQUI LET EM VEZ DE CONST, ALGUM ATRIBUTO DO ALUNO PODERA SER MUDADO (PARAMETRO POR REFERENCIA)
// Colocarmos Const para nao ter problema com mudanca de dados e ter dados mais consistentes e mais logico 
// para manipular
{ 
            name: "Mayk",
            nota: 1.8
        },


        { 
            name: "Diego",
            nota: 10
        },

        { 
            name: "Fulano",
            nota: 2
        }



]

function calculaMedia () {

    let soma = 0 
    for (let i= 0; i < aluno.length; i++) {         
       soma = soma + aluno[i].nota        
    } 
    const media = soma/ aluno.length  
   // mesmo a variavel do array aluno ser CONST, nada me impede de vir aqui dentro da funcao e 
   // e chegar no aluno de posicao tal e adicionar um valor dentro da variavel
      
   aluno[0].blablabla = "alo"
    // aqui vc esta adicionado um atributo a este objeto dentro do array (imprima para ver)
    //Nem precisei passar os parametros para fazer isto. 

    //Agora voltei os paramentros para a a funcao e para a chamada da funcao , pois assim posso chamar
    //varios alunos. 
    // Vou modificar mais  aluno
    aluno[2].raca = "negra" // imprima para ver

    return media
   
    
}

const media1 = calculaMedia()
console.log(media1)

console.log(aluno[2])

// Note que mesmo sem passar o paramentro na Funcao (no exemplo foi o paramentro "aluno;"), 
//como dentro da funcao exite uma variavel Global
// Uma funcaco consegue acessar o escopo global 
// Por que mesmo sem passar paramentros na funcao o algoritmo trouxe o resultado

// Se a  variavel GLOBAL foi declarada com "let" em vez de "const" isso QUER DIZER QUE O VALOR
// DESTA VARIAVEL PODERA SER MODIFICADA DENTRO DA FUNCAO.

