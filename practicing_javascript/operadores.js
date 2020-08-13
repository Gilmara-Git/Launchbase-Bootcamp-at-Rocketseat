
//===========================================================//
//                OPERADORES DE COMPARACAO                   //

//   >   Maior
//   <   Menor                                
//   >=  Maior ou igual
//   <=  Menor ou igual
//   ==  Igual a
//   === Igual e do mesmo tipo
//   !=  Diferente de
//   !== Diferente, inclusive do tipo 
//
//=====================================================================//
//                            OPERADORES LOGICOS 
//
//    &&   - "E" -> As duas condicoes devem ser verdadeiras para que a condicao final seja verdadeira
//               -> Se somente uma for verdadeira, entao e falso
//               -> Se duas condicoes forem falsas ISSO A TORNA FALSA, logo nao e considerada na condicao "if".  
//    ||  - "OU" -> Uma das condicoes deve ser verdadeira para que o condicao final seja verdadeira
//    !   - "NAO" -> NEGA/inverte uma condicao. Ex: idade = 17    If (idade>=18) / true.  If (!(idade>=18))
//

//Para ser verdadeiro as 2 condicoes tem que ser verdadeira
//console.log( 5==5) && (6==6) //true
//console.log (5!=5) && (3==3) //false
//console.log (5!=5) && (3!==3) //false

//Para ser verdadeiro 1 condicao tem que ser verdadeira
//console.log( 5==5) || (6==6) //true
//console.log (5!=5) ||  (3==3) //false
//console.log (5!=5) || (3!==3) //false
//console.log (!(5!=5)) || (3!==3) //true

//console.log(5<6) //true
//console.log (!(5<6))//false

//agora vamos usar isso no Desafio 1 la embaixo e melhor o codigo, aglomerando os operadores
//logicos na condicao de "if" 

//====================================================================//
//                       OPERADORES ARITMETICOS //
//   * - Multiplicacao
//   / - Divisao
//   % - Resto da divisao
//   + - Adicao
//   -   Subtracao
//====================================================================//

console.log(2 + 1) //3
console.log(2 - 1) //1
console.log(2 * 1) // 2
console.log(2 / 1) //2 


//====================================================================//





//vamos praticar

//variaveis true ou false (boolean) retornaram destas comparacoes
// Ja vou comparar e imprimir
//console.log(5>4)//true
//console.log(5<4)//false
//console.log(5>=4)//true
//console.log(5<=4)//false
//console.log (5==4)//false
//console.log (5==5)//true
//console.log (5=="5") //true -esta comparando somente o numero
//console.log (5==="5")//false - esta comparando o numero e o tipo ( os tipos sao diferentes . Number e string)
//console.log (5==="4")//false - esta comparando o valor e o tipo (valor e false)
//console.log (5==="oi")//false - esta comparando o valor e o tipo (tipo e string) false
//console.log (5!=4)//true
//console.log (5!=5)//false
//console.log (5!=="4")///true - esta comparando valor e tipo ( os tipos sao diferentes . Number e string)
//console.log (5!=="oi") //true - esta comparand valor e tipo  ( os tipos sao diferentes . Number e string)



//////////////////////Desafio 01 ////////////////
//Verificar se idade e maior ou =  18
//Se sim, deixar entrar, senao, bloquear entrada
//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos

//const idade = 17

//console.log(idade>18)

//if (idade >=18) {

 //   console.log("Deixar entrar.")
//} else {

    //console.log("Bloquear a entrada.")

    //}

    //if (idade ==17) {

        //console.log("Volte quando completar 18 anos.")
    //} 

    //////////////////////Desafio 01 novamente ////////////////

    // Desse jeito a pessoa de 16 podera entrar, entao temos que fazer || em vez de &&
    //const idade = 16    
    
      //if (!(idade >= 18) && idade===17) {

        //console.log("Bloquer a entrada")

      //} else {
        //console.log("Permitir a entrada")
        //}   
    
//Vamos fazer com ||
//const idade = 19    
    
  //    if (!(idade >= 18) || idade===17) { // se as 2 condicoes sao falsas, entao nao entao no if e sim no else

   //    console.log("Bloquer a entrada")

//      } else {
  //      console.log("Permitir a entrada")
    //    }   
    



  


