
//Aprendendo funcoes e metodos

// Criar um programa que calcula media
// das turmas de alunos e envia 
// mensagem de calculo da media
// Ha mais de uma turma (2)


const alunosDaTurmaA = [

    {
        nome: "Mayk",
        nota: 9.8

    },
    {
        nome: "Diego",
        nota: 10

    },
    {
        nome: "Fulano",
        nota: 2

    }

]

const alunosDaTurmaB = [

    {
        nome: "Cleiton",
        nota:  1

    },
    {
        nome: "Robson",
        nota: 8

    },
    {
        nome: "Siclano",
        nota: 2

    }

]

    // A funcao permite vc reaproveitar um codigo, ou seja em vez de vc escrever 1 situacao 2x, escrevemos somente 1.
    // como irei colocar informacoes dentro da funcao ? Por passagem de parametro.
    // Vou passar "aluno" como PARAMENTRO EM MINHA FUNCAO - calculaMedia

    function calculaMedia (aluno) {

        //Em vez de colocar o valor de media em uma variavel, vamos retornar o valor, pois a funcao faz isso
        //const media = (aluno[0].nota + aluno[1].nota + aluno[2] ) / 3 
          return (aluno[0].nota + aluno[1].nota + aluno[2].nota ) / 3 
///// ATENCAO RETURN SO USAMOS NO FIM DA FUNCAO, SENAO A FUNCAO PARA NO  RETURN


        // para onde ira retornar ? 
    }

        //vamos usar a Funcao calculaMedia, ou seja vamos chamar a funcao pedindo para receber a media
        // do alunos da tuma A e da turma B
        // Como o valor esta sendo retornado la na funcao (return), precisamos criar uma variavel para receber 
        // retorno ou seja o resultado..... nao da para ficar somente calculaMedia(alunosDaTurmaA)

       //Uso da funcao
        const media1 = calculaMedia(alunosDaTurmaA)
        const media2 = calculaMedia(alunosDaTurmaB)

        
//console.log(media1)
//console.log(media2)


//Temos outro desafio neste programa
// Como devera ser analisado se a media e > ou nao que 5, isso precisara ser feito para as 2 turmas
// Entao criaremos outra funcao para nao ter que repetir codigo.


function enviaMensagem (media, turma) {  //media dentro do parametro

if(media > 5) {

    console.log(`A media da ${turma} foi de ${media}. Parabens!!`) //Aqui recebemos a media, entao precisamos da media 
    // dentro do parametro

} else {

        console.log(`A media da ${turma} e menor que 5.`)
}
} 
// como nesta funcao ja esta fazendo um console.log nao precisa de retornar nada nesta caso. 

//uso da funcao
enviaMensagem (media1,  'TurMA A') // antes era so media, dai criamos o paramentro turma la dentro da funcao
enviaMensagem (media2,  'Turma B') // e assim podemos passar por parametro a turma tambem

// Note que passei o parametro de TurMA A de proposito no enviaMensagem (media1, "TurMA A")
// A media1, ja havia sido calculada pelo function calculaMedia, dai passamos estes paramentros para
// outro funcao.