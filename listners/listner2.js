// function myFunction(){

//     console.log("Listner 2");
// }

//multiple listners on same element with same event
var myButton = document.getElementById("myBtn")
myButton.addEventListener("click",()=>{
    console.log("button clicked");
})
function clickEvent(){
    console.log("button clicked with function");
}
myButton.addEventListener("click",()=>{
    clickEvent();
})


// ---------------------------------------------------------
// multiple listners on same element with diiferent events
myButton.addEventListener("dblclick",()=>{
    alert("button double clicked");
})
myButton.addEventListener("mouseenter",()=>{
    
    myButton.innerHTML = "Mouse Enter";
})