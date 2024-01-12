const fetchData = () => {



    // return 100

    return new Promise((success,failure)=>{

        setTimeout(()=>{

            success({name:"sachin",age:23})

        },4000)


    })


}

var x = fetchData() //promise object
x.then((myData)=>{
    console.log("data...",myData);
})
x.catch((error)=>{
    console.log("error...",error);
})
console.log("x...",x);