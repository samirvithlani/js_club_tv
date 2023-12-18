function changeColor(){

        var box = document.getElementsByClassName("box")
        for(let i = 0; i < box.length; i++){
            box[i].style.backgroundColor = "yellow"
        }

        var button = document.getElementsByClassName("button")
        for(let i=0;i<button.length;i++){
            button[i].className = "button1"
        }

}