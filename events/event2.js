
count = 0;
function zoom(){
    var img = document.getElementById("image");
    img.style.width = "400px";
    count++;
    if(count == 2){
        img.style.width = "200px";
        count = 0;
    }

}