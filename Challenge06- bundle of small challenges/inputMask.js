// Mask example:

// const Mask = {

//     apply(input, func) {
//         setTimeout(()=>{
//             input.value = Mask[func](input.value) //the input will come from the HTML. Same thing with the function(here we only have formatBRL)

//         }, 1)

//     },

//     formatUSA(value){
//         value = value.replace(/\D/g, "")
//         // console.log("estou aqui no format")
//         return value = Intl.NumberFormat("en-US", {
//              style: "currency",
//              currency: "USD"
//          }).format(value/100)

//     }
// }



//REFERENCE TO SOLVE THIS challenge
// https://pt.stackoverflow.com/questions/77505/formatar-mascara-para-cnpj

//const value = '0.8005';
//const value = "14397462000109";
//const value = "03215574489";
// const value= '145628933'


//The (FUNC) function on the apply method will be coming from the HTML/
//Example: onkeydown = Mask.apply(this, formatPercentage)

const Mask = {
  apply(input, func) {
    

    input.value = Mask[func](input.value);
  },

  formatPercentage(value) {
    const formatter = new Intl.NumberFormat("en", { style: "percent" });

    return formatter.format(value);
  },

  formatCNPJ(value){
    if (value.length > 14) return "Digite 14 digitos";
    return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1 $2 $3/$4-$5" );
  },

  formatCPF(value) {
    if (value.length > 11) return "Digite 11 digitos";

    return value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
  },

  formatSocialSecurity(value) {

    if(value.length > 9) return ('Type 9 digits only.')
    
    return value.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3")

}

};

//====================================================================================
/* FUNCTION TO TRANSFORM DECIMAL IN PERCENTAGE*/
// function showPercentage(value){

//     const formatter = new Intl.NumberFormat('en',
//     { style: 'percent'})

//     return formatter.format(value)

// }

//output -> showPercentage(0.8005)
//"80%"

//====================================================================================
/* FUNCTION TO TRANSFOR 14 DIGITS IN CNPJ*/
// const value = "14397462000109"
// function showCNPJ(value){

//     if (value.length > 14) return "Digite 14 digitos";

//     return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1 $2 $3/$4-$5")

// // }

// Result: [showCNPJ(value)
//"14 397 462/0001-09"

// https://pt.stackoverflow.com/questions/77505/formatar-mascara-para-cnpj
// valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1 $2 $3/$4-$5")
// "14 397 462/0001-09"

//====================================================================================
//FUNCTION TO TRANSFORM 11 DIGITS INTO cpf FORMAT

// const value = "03215574489";

// function formatCPF(value) {
//   if (value.length > 11) return "Digite 11 digitos";

//   return value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
// }

// 
//FUNCTION TO TRANSFORM 9 DIGITS INTO  SOCIAL SECURITY NUMBER_FORMAT
// const value= '145628933'

// function formatSocialSecurity(value) {

//     if(value.length > 9) return ('Type 9 digits only.')
    
//     return value.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3")

// }

