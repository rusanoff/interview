export const maxPurchases = (prices, balance) => {
  let sum = 0;

  return [...prices]
    .sort((a, b) => {
      return a - b;
    })
    .reduce((acc, price) => {
      sum += price;

      if (sum <= balance) {
        acc++;
      }

      return acc;
    }, 0);
};
