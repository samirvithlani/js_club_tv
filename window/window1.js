const getLocation = () => {
    const lat =document.getElementById('lat')
    const long =document.getElementById('long')
    window.navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos)
        console.log(pos.coords)
        console.log(pos.coords.latitude)
        console.log(pos.coords.longitude)
        lat.innerHTML = pos.coords.latitude
        long.innerHTML = pos.coords.longitude
    })
}