var productData = {
  prod: [
    {
      category: "electronics",
      products: [
        {
          id: 1,
          name: "iphone",
          price: 200,
        },
        {
          id: 2,
          name: "ipad",
          price: 300,
        },
      ],
    },
    {
      category: "stationary",
      products: [
        {
          id: 1,
          name: "pen",
          price: 20,
        },
        {
          id: 2,
          name: "pencil",
          price: 10,
        },
      ],
    },
  ],
};


var electroniceProd = productData.prod.find((pr)=>pr.category=="electronics").products.filter((prod)=>{
    return prod.price>200
})
console.log(electroniceProd)