const order = (orderData) => {
    console.log("order placed");
  return "your order of" + orderData.item + "is ready";
};
const orderFood = (time, cb, orderData) => {
    console.log("order in waiting");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb(orderData));
    }, time*1000);
  });
};

orderFood(3, order, { item: "Pizza", price: 2000 })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
