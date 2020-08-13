// Aprendendo estrutura de repeticao

//for 

// Utilizando o codido da aula passada, verificamos que estamos considerando somente 3 alunos
// E se entrar ou sair alunos na classe ?
// Vamos aprender a fazer lacos de repeticao para que seja lido o numero de alunos e 
// usar isso para calcular a MEDIA

const alunosDaTurmaA = [

    {
        nome: "Mayk",
        nota: 1.8

    },
    {
        nome: "Diego",
        nota: 10

    },
    {
        nome: "Fulano",
        nota: 2

    },
    {
        nome: "Mais um aluno",
        nota: 10
    },{

        nome: "Celia",
        nota: 10

    }

]

const alunosDaTurmaB = [

    {
        nome: "Cleiton",
        nota:  10

    },
    {
        nome: "Robson",
        nota: 10

    },
     {
        nome: "Novo Aluno",
        nota: 5

    }
    
]

   // Vou vir aqui dentro da funcao de calculos de media e vou utilizar a estrutura de repeticao "for"
   // for () {}
   ////como os alunos estao dentro de um array... consigo puxar aluno.length

   // Como precisamos calcular coisa de dados vindos do array, precisamos de estrutura de repeticao.
    function calculaMedia (aluno) { 
            let soma = 0 
            for (let i= 0; i < aluno.length; i++) { // i++ = i  = i + 1 
                
               soma = soma + aluno[i].nota
                //uma vez que a estrutura de repeticao ja esta contando os numero de alunos, vamos codar
                //return soma///// ATENCAO RETURN SO USAMOS NO FIM DA FUNCAO, SENAO A FUNCAO PARA NO  RETURN
            } 
          
          const media = soma/ aluno.length
          // para retornar a funcao temos que ter um valor de retorno
          //console.log(media)
          return media

    }

           
       //Uso da funcao

        const media1 = calculaMedia(alunosDaTurmaA)
        const media2 = calculaMedia(alunosDaTurmaB)

        
//console.log(media1)
//console.log(media2)


function enviaMensagem (media, turma) {  
if(media > 5) {

    console.log(`A media da ${turma} foi de ${media}. Parabens!!`) 

} else {

        console.log(`A media da ${turma} e menor que 5.`)
}
} 


//uso da funcao

enviaMensagem (media1,  'TurMA A') // antes era so media, dai criamos o paramentro turma la dentro da funcao
enviaMensagem (media2,  'Turma B') // e assim podemos passar por parametro a turma tambem

