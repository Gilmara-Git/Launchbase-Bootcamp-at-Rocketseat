//vamos ver como condicionais funcionam

const aluno01 = 'Gil'
const notaAluno01 = 5.8

const aluno02 = 'Sheila'
const notaAluno02 = 2

const aluno03 = 'Marcos'
const notaAnluno03 = 5

const media = (notaAluno01 + notaAluno02 + notaAnluno03 )/3

//-----------------------------------------------------
//Se a media for > que 5 , parabenizar a turma
//if (media >5) {
//retorna true
//} else {
//retorna false

//}

//console.log(media<5)
//O codigo assim retorna , TRUE or FALSE
//-------------------------------------------------------

//Agora vamos fazer o que o exercico pediu: Parabenizar a turma se a media for >5

if (media > 5) {

    console.log(`A media da turma foi ${media}. Parabens!!`) // aqui foi inserida uma TEMPLATE STRING PARA 
    // SER POSSIVEL COLOCAR A VARIAVEL.
} else {

    console.log('A media foi menor que 5.')
}










