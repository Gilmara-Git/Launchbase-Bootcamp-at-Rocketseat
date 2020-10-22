
function printDouble(number1, number2) {
        // console.log(number1);
        console.log(number2);
        
        return new Promise((resolve)=>{

                setTimeout(()=>{
                resolve((number1 * 2 ) + number2)
                //(number1 * 2 ) + number2  

        }, 0)
        })
     
};



let result;

async function printAll(){
        
result = await printDouble(5, 0)
result = await printDouble(12, result)
result = await printDouble(2, result)

console.log(result)
};

printAll();
