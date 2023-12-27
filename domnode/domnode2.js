
const products =[
    {
        id:1,
        name:'Iphone 12',
        price: 1200,
    },
    {
        id:2,
        name:'Iphone 11',
        price: 1000,
    }
]

function loadData(){

    const div = document.getElementById('products');
    for(let i=0;i<products.length;i++){

        const ul = document.createElement('ul'); //2

        const idLi = document.createElement('li'); //2 
        idLi.innerHTML = products[i].id;

        const nameLi = document.createElement('li');
        nameLi.innerHTML = products[i].name;

        const priceLi = document.createElement('li');
        priceLi.innerHTML = products[i].price;

        ul.appendChild(idLi);
        ul.appendChild(nameLi);
        ul.appendChild(priceLi);

        div.appendChild(ul);
    }

}