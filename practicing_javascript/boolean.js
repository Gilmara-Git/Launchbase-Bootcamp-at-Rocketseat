
// Vamos aprender sobre o conceito de boolean e como utilizar

// Marcar aluno como reprovado se nota < 5 
// E tambem enviar uma mensagem

// a gente pode pegar aqui no objeto de aluno

const alunosDaTurmaA = [ 
    {
        nome: "Mayk", 
        nota:  9.8,
        //reprovado: true // vou chamar um console.log(typeof alunodaTurmaA[0].reprovado) so para ver que e do tipo boolean
        //Eu quero que o meu programa analise isto para mim.
},
{
        nome: "Diego", 
        nota:  10

},
{
        nome: "Fulano", 
        nota:  2
},
{
        nome: "Mais um aluno", 
        nota:  10
}

]

//console.log(typeof alunosDaTurmaA[0].reprovado)


const alunosDaTurmaB = [ 
    {
        nome: "Cleiton", 
        nota:  10,
    },
 {      nome: "Robson", 
        nota:  10
},
{
        nome: "Siclano", 
        nota:  0
},
{
        nome: "Novo Aluno", 
        nota:  5
}

]

//function para marcar alunos das turmas como reprovado - SOMENTE ISSO
function marcarComoReprovado(aluno) {
            aluno.reprovado=false;
            if(aluno.nota < 5) {
                aluno.reprovado = true;

        }
      }  
      // Vou chamar o console.table para mostrar os elementos do meu array de forma bonita
            //console.table(alunos)
     

    // vou chamar a funcao
    //marcarComoReprovado(alunosDaTurmaB)
    //marcarComoReprovado(alunosDaTurmaB)

    

// Fizemos a primeira parte agora e enviar a mensagem

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} esta reprovado!`)// aluno.nome, porque estamos pegando no parametro
            }        // o objeto do aluno

    }

    function alunoReprovado (alunos){ //QUANDO ELE COLOCOU O "FOR"  -ele colocou ALUNOS no parametro.
        for (let aluno of alunos) {  //isso aqui e coisa moderna no JS
            // isso quer dizer: para cada aluno de aluno faz algo. Cada aluno dentro do array
            marcarComoReprovado(aluno);
            enviarMensagemReprovado(aluno)
        }
    }

    //agora vamos chamar a funcao alunoReprovado
        alunoReprovado(alunosDaTurmaA)
        alunoReprovado(alunosDaTurmaB)

        //Usamos boolean para fazer checagem nos "ifs" e ou marcar alguma coisa
        //Conceito muito importante que a gente precisa