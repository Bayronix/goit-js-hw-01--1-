function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const message = `Shipping to ${country} will cost ${totalPrice} credits`;
  return message;
}

const country = "Ukraine";
const price = 300;
const deliveryFee = 20;

console.log(getShippingMessage(country, price, deliveryFee));
