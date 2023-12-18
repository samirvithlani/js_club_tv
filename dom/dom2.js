function changeColor(){

    var h1 = document.getElementsByTagName("h1")
    
    for(let i=1;i<h1.length;i+=2){
        h1[i].style.color = "yellow"
    }
    for(let i=0;i<h1.length;i+=2){
        h1[i].style.color = "blue"
    }    

}