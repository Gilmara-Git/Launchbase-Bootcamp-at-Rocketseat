
//1033894080000

function age(timestamp) {

    const today = new Date() // This is not a construtor. It is an object that contains date. Como nao estou
                            // passando paramentro pega a data de HOJE, ano atual, mes atual
    const birthDate = new Date(timestamp) // Aqui pode-se passar o timestamp quando eu crio um objeto de data

    let age = today.getFullYear() - birthDate.getFullYear()

    const month = today.getMonth() - birthDate.getMonth() //verificando se month e 1-, 0 ou > 0

    if (month <0 || month == 0 && today.getDate() <= birthDate.getDate() ) { 
        //mayk nao colocou <=birthday, mas tem que colocar para funcionar. 
        //Ele nao colocou aqui , mas la nas funcoes (instructor.js ele colocou)

        age = age -1 
    } 

    return age 


}








// Year - 2020 - 1984 = 36 ano atual - ano nascimento 
// Month - 07  - 08   = -1 estamos em julho e a pessoa faz aniversario em agosto
// Month - 07 - 07  = 0   estamos em julho e a pessoa faz aniversaio em julho
// Month - 07 - 06  = 1   estamos em julho e a pessoa fEZ aniversario em julho

//A mesma logica vai para o dia

// Day - 01 - 12 = -11  hoje e 1 e aniversario e 12 
// Day - 13 - 12 = 1 hoje e 13 e aniversai foi ontem
// Day - 12 - 12 = 0 hoje e 12 e anivesario e hoje











