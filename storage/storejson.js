const user = {
    id:1,
    name:"raj"
}

const sotreData = ()=>{

    localStorage.setItem("user",JSON.stringify(user))
}
const getData = ()=>{


    var user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    console.log(user.name)
}