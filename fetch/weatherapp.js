const fetchWeather = async (city) => {

    const appid = "fe4feefa8543e06d4f3c66d92c61b69c"
    const response  = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appid,{
        method: "GET",
    })
    const data = await response.json()
    console.log("data,,,,",data)
    console.log("city...",data.name)
    console.log("mmin temp",data.main.temp_min-273.15)
    console.log("max temp",data.main.temp_max-273.15)


    const cityname = document.getElementById("city")
    cityname.innerHTML = data.name

    const minw = document.getElementById("minw")
    minw.innerHTML = data.main.temp_min-273.15

    const maxw = document.getElementById("maxw")
    maxw.innerHTML = data.main.temp_max-273.15


}




const submitHandler = (e) => {

        e.preventDefault()
        const city = document.getElementById("cityname").value
        fetchWeather(city)


}