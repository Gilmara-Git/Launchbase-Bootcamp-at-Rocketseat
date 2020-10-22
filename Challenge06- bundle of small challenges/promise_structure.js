const hasMeeting  = true; 

const meeting =  new Promise((resolve, reject)=>{
        if(!hasMeeting) {

            const meetingDetails = {
                name: "Interview with BOA",
                time: "4:15 PM",
                day: "Oct 21st 2020",
                channel: "dial in"
            }
          
    resolve(meetingDetails);

    }else {

    reject(new Error('Meeting already scheduled at that time'))

    }
});    
    
meeting
.then(res => {
    
    console.log("Meeting Information:");
    console.log(res);

})

.catch(err => {

    console.log(err.message);

});


//=======================================================


// Undertanding promise

const boloPronto = false;

const fazerBolo =  new Promise((resolve, reject)=> {

    if(boloPronto){

        resolve("Pode servir o bolo");
    } else { 

        reject("Faltou farinha para fazer o bolo.")
    }

}); 

fazerBolo
.then((res)=>{

    console.log(`Prontinho e quentinho. ${res} `)
    
})

.catch((res)=> {

    console.log(`Sorry, bolo não está pronto! ${res} `)
    
})