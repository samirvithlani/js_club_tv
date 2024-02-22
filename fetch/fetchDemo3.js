const getData = async () => {

const response  = await fetch("https://node5.onrender.com/user/user",{
    method:"GET",
})

const data = await response.json()
console.log(data)
console.log(data.message)
console.log(data.data)
// console.log(data.data[0].name)

const output = document.getElementById("output")

for(let i=0;i<data.data.length;i++){
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    h1.innerHTML = data.data[i].name
    h2.innerHTML = data.data[i].email
    
    output.appendChild(h1)
    output.appendChild(h2)
}




}
getData()