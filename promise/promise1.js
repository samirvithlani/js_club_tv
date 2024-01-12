const fetchData = () => {


    //Promise is calass in js

    // setTimeout(() => {
    // console.log('fetching data...');
    // }, 3000);

    // console.log('done!');


    //resolve and reject are the two functions
    //when promise get resolved then resolve function will be called  and it will go to then block
    //when promise get rejected then reject function will be called  and it will go to catch block
    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            //resolve('fetching data...'); //this funcion will be called after 3 sec
            reject("error while fetching data")
        },3000)

    })
    console.log(promise);
    //console.log('done!');
    promise.then((data)=>{
        console.log("'",data);
        console.log('done!');
    })
    promise.catch((error)=>{
        console.log("'",error);
        console.log('done!');
    })



}
fetchData();