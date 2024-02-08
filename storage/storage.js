function storeDataInLocalStorage() {

    localStorage.setItem("name", "Amit")
    //sessionStorage.setItem("name", "Amit")
}

function removeData(){

    //localStorage.removeItem("name")
    localStorage.clear()
    //sessionStorage.removeItem("name")
    //sessionStorage.clear()

}
  

function getDataFromLocalStorage() {

    const name = localStorage.getItem("name")
    //const name = sessionStorage.getItem("name")
    console.log(name)

}