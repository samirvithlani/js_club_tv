var ages = [10,22,33,11,33,45,67,43,21,5,6,7,9]
console.log("ages....",ages)
var ind = ages.indexOf(33)
console.log("index....",ind)

ind = ages.lastIndexOf(33)
console.log("index....",ind)



var flag = ages.includes(45)
console.log("flag....",flag)


function sortByValue(a,b){

    return a-b
}

//ages = ages.sort()
ages = ages.sort(sortByValue)
console.log("ages....",ages)

// ages = ages.reverse()
// console.log("ages....",ages)



var lang  = ["hindi","english","japanese","chinese","french","malayalam","telgu"]

console.log("lang....",lang)

//lang = lang.sort()

// function sorrtNamebylen(a,b){

//     return a.length-b.length
// }


lang = lang.sort((a,b)=>a.length-b.length)
console.log("lang....",lang)






