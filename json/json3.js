var product = {
  id: 101,
  name: "Iphone 15",
  price: 100000,
  description: "This is the latest iphone",
  avaialable: true,

  colors: ["red", "blue", "black", "white"],

  reviews: [
    {
      id: 1,
      givenBy: "Rajan",
      rating: 4,
    },
    {
      id: 2,
      givenBy: "Amit",
      rating: 5,
    },
    {
      id: 3,
      givenBy: "Rahul",
      rating: 3,
    },
  ],
};

console.log(product.name);
var reviewCount = 0;
var reviewAvg = 0.0;
for (let i = 0; i < product.reviews.length; i++) {
  reviewCount++;
  reviewAvg = reviewAvg + product.reviews[i].rating;
}

console.log("Total reviews: " + reviewCount);
console.log("Average rating: " + reviewAvg / reviewCount);
