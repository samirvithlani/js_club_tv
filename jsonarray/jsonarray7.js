var data = [
    {
        name:"iphone",
        price:1000,
        colors:["black","white","gold"]
    },
    {
        name:"tshirt",
        price:10,
        colors:["black","white","red"]
    }
]


var  updatedData = data.map((item)=>{

    let colors = item.colors.map((c)=>{
        return c.toUpperCase()
    })
    return {
        name:item.name.toUpperCase(),
        price:item.price*2,
        colors:colors
    }

})
// for(let i=0;i<data.length;i++){

//     let colors = data[i].colors // ["black","white","gold"] // ["black","white","red"]
//     console.log(colors)
//     let obj ={}
//         obj.name = data[i].name.toUpperCase() // "IPHONE"
//         obj.price = data[i].price *2 // 2000
        
//         for(let j=0;j<colors.length;j++){
//             colors[j] = colors[j].toUpperCase() // ["BLACK","WHITE","GOLD"] // ["BLACK","WHITE","RED"]
//         }
//         obj.colors = colors // ["BLACK","WHITE","GOLD"] // ["BLACK","WHITE","RED"]
//         updatedData.push(obj) //
    
// }




console.log(updatedData) // 6 objects