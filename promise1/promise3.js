const fetchData = () => {



    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "subramanian" })
        },4000)
    })

//    return 100

}

// var x = fetchData()
// console.log(x)
// x.then((data) => {
//     console.log(data)
// })
// x.catch((err) => {
//     console.log(err)
// })

fetchData().then((data) => {

    console.log(data)
    
}).catch((err) => {

    console.log(err)
})