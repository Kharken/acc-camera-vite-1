
type CalculateDiscountParams = {
  totalItems: number;
  totalPrice: number;
  promoItems: number;
};

export const calculateDiscount = ({totalItems, promoItems, totalPrice}: CalculateDiscountParams): number => {

  let baseDiscount = 0;
  const discountedItems = totalItems - promoItems;

  if (discountedItems === 2) {
    baseDiscount = 3;
  } else if (discountedItems >= 3 && discountedItems <= 5) {
    baseDiscount = 5;
  } else if (discountedItems >= 6 && discountedItems <= 10) {
    baseDiscount = 10;
  } else if (discountedItems > 10) {
    baseDiscount = 15;
  }

  let priceReduction = 0;
  if (totalPrice >= 10000 && totalPrice < 20000) {
    priceReduction = 1;
  } else if (totalPrice >= 20000 && totalPrice < 30000) {
    priceReduction = 2;
  } else if (totalPrice >= 30000) {
    priceReduction = 3;
  }

  const finalDiscount = Math.max(0, baseDiscount - priceReduction);
  return (totalPrice * finalDiscount) / 100;
};
