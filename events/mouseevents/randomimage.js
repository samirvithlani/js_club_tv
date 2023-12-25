function randomeImage(){


        var imageArray = [
            "../../images/beach.jpg",
            "../../images/jungle.jpg",
            "../../images/mountain.jpg",
            "../../images/river.jpg",
            "../../images/sea.jpg",
        ]

        //              =  math.floor(0.99999*5) = 4
                        //=  math.floor(0.00000*5) = 0
        var randomIndex = Math.floor(Math.random() * imageArray.length); //0 
        console.log("index...",randomIndex);
        var randomImage = imageArray[randomIndex];
        console.log("url...",randomImage);

        var imageElement = document.getElementById("randomImage");
        imageElement.style.backgroundImage = "url('" + randomImage + "')";
        imageElement.style.backgroundSize = "cover";


}