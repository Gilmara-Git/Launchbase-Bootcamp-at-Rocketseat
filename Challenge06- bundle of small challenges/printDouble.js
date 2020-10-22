/* FUNCTION printdouble and FUNCTION printAll before implementing Async - Await and Promise*/

// function printDouble(number){
//     setTimeout(
//       () => {
//         console.log(number * 2)
//       }, 
//       Math.floor(Math.random() * 100) + 1
//     )
//   }
  
//   function printAll(){
//     printDouble(5)
//     printDouble(10)
//     printDouble(22)
//     printDouble(1)
//     printDouble(89)
//   }
  
//   printAll()


/*FUNCTIONS after implementing async - await  and Promise  */
/* This makes all the printDouble function within printAll be executed in its order.*/

function printDouble(number){

    return new Promise ((resolve) => {
        
        setTimeout(()=> {

            resolve(console.log(number * 2 ));
            

        }, Math.floor(Math.random() *100) +1 )

       
    })

   };

async function printAll(){
    
    await printDouble(2);
    await printDouble(9);
    await printDouble(20);
    await printDouble(277);
    await printDouble(3);
    await printDouble(1);
}

printAll();