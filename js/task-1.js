function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  console.log(message);
}

makeTransaction(5, 1000);
