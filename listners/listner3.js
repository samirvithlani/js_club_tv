const image = document.getElementById("image");
image.addEventListener("mouseenter",()=>{

    image.style.opacity = "0.7";

})
image.addEventListener("mouseleave",()=>{
    image.style.opacity = "1";
})

image.addEventListener("click",()=>{
    image.style.width = "200px";
    image.style.height = "200px";
})