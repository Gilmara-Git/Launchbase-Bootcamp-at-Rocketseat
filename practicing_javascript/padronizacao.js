// Devemos retirar comentarios desnecessarios
// Padronizar o uso de , ; (alguns lugares pode ou nao utilizar) Se for utilizar use em todas as situacoes
// Ctrl + A para selecionar todo o codigo e faz shift tab
//Quando o codigo chegar no canto estara sem identacao
// Ctrl shift p  >  select "Format Selection" -  para identar seu codigo inteiro
//toda vez que for comecar um bloco da um espaco de 1 linha
// Pegar todas as partes de execucao de codigo e colocar abaixo das funcoes
//Coloque os objetos/ arrays primeiro
// mudar as variaveis para ingles  -  ctrl f  -  acha a variavel e digita o nome em ingles (replace)



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
    },
    {
        nome: "Mais um aluno",
        nota: 10
    }

]

const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Robson",
        nota: 10
    },
    {
        nome: "Siclano",
        nota: 0
    },
    {
        nome: "Novo Aluno",
        nota: 5
    }

]


function marcarComoReprovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true

    }
}



function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} esta reprovado!`)
    }        

}

function alunosReprovados(alunos) {
    for (let aluno of alunos) {

        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
}

alunosReprovados(alunosDaTurmaA)
alunosReprovados(alunosDaTurmaB)
