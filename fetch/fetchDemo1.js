const fetchData = async() => {

    //built in function
    const res = await fetch("https://node5.onrender.com/user/user",{
        method: "GET",
    })

    console.log(res)
    const data = await res.json()
    console.log(data)

    console.log(data.message)
    console.log(data.data)

    for(let i=0;i<data.data.length;i++){
        console.log(data.data[i].name)
    }


}

fetchData()