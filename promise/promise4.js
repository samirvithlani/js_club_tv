const bookTicket = ()=>{


    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("ticket booked")
        },3000)

    })

}

// var paymentStatus ="";

// const ticket = bookTicket()
// console.log(ticket)
// // console.log("payment done...")
// ticket.then((data)=>{
//     console.log(data)
//     console.log("payment done...")
//     paymentStatus  = data;
// }).catch((err)=>{
//     console.log(err)
//     console.log("payment failed...")
// })

// console.log("payment...",paymentStatus)


async function fetchTicket (){


    console.log("payment in progress...")
    const ticket = await bookTicket() //resolve -->data [ticket booked] reject []
    console.log(ticket)
    console.log("payment done...")


}

fetchTicket()