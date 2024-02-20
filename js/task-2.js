function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const message = ` Shipping to ${country} will cost ${totalPrice} credits`;
  console.log(message);
}

getShippingMessage("Ukraine", 300, 20);
