var foods = [
  {
    id: 1,
    name: ["Burger", "Pizza"],
    price: 400,
    quantity: 1,
  },
  {
    id: 2,
    name: ["Burger", "coke"],
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    name: ["Pizza", "coke"],
    price: 300,
    quantity: 1,
  },
];

const generateOrderList = () => {
  const productcontainer = document.getElementById("product-container");

  for (let i = 0; i < foods.length; i++) {
    //3 times

    var foodDiv = document.createElement("div");
    foodDiv.className = "product";

    var foodId = document.createElement("h1");
    foodId.innerHTML = "COMBO ID = " + foods[i].id;

    var foodName = document.createElement("h3");
    foodName.innerHTML = "COMBO NAME: " + foods[i].name;

    var foodPrice = document.createElement("h5");
    foodPrice.innerHTML = "COMBO PRICE: " + foods[i].price;

    var foodQuantity = document.createElement("h5");
    foodQuantity.innerHTML = "COMBO QUANTITY: " + foods[i].quantity;

    var orderBtn = document.createElement("button");
    orderBtn.innerHTML = "ORDER NOW";

    // orderBtn.addEventListener("click",function(){
    //     alert("Your order has been placed successfully");
    // })
    orderBtn.addEventListener("click", () => {
      orderNow(foods[i]);
    });

    foodDiv.appendChild(foodId);
    foodDiv.appendChild(foodName);
    foodDiv.appendChild(foodPrice);
    foodDiv.appendChild(foodQuantity);
    foodDiv.appendChild(orderBtn);

    productcontainer.appendChild(foodDiv);
  }
};

function orderNow(x) {
    console.log(x);
  alert("Your order has been placed successfully" + x.name + " " + x.price  + " " + x.quantity + " " + x.id);
}
