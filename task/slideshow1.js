const images = ["jungle.jpg","mountain.jpg","river.jpg","sea.jpg"]
let currentIndex = 0

const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const image = document.getElementById("image")
prevButton.addEventListener("click",()=>{

    console.log("prev clicked")

    //3 = (3-1+4)%4 = 2
    currentIndex = (currentIndex-1+images.length)%images.length;
    image.src = "../images/"+images[currentIndex]


})

nextButton.addEventListener("click",()=>{
    console.log("next clicked")
    currentIndex = (currentIndex+1)%images.length;
    image.src = "../images/"+images[currentIndex]
})

//set interval

// setInterval(()=>{
//     currentIndex = (currentIndex+1)%images.length;
//     image.src = "../images/"+images[currentIndex]
// },2000)