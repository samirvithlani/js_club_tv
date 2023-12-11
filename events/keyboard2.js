function getInput(event){

    //console.log("function called....")
    //console.log(event)
    console.log(event.key)
    var output = document.getElementById("output")
    output.innerHTML = event.key

}