const fetchData = async() => {
    


    const response =  await fetch("https://reqres.in/api/users?page=2",{
        method:"GET"
    })
    console.log(response)
    const data  = await response.json()

    console.log(data)
    console.log(data.page)
    console.log(data.per_page)
    console.log(data.total)
    console.log(data.data)

    //console.log(data.data[0]first_name)
    for(let i=0;i<data.data.length;i++){
        console.log(data.data[i].first_name)
    }

}
fetchData()