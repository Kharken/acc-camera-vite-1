
type CalculateDiscountParams = {
  totalItems: number;
  totalPrice: number;
  isPromo?: boolean;
};

export const calculateDiscount = ({totalItems, totalPrice, isPromo = false}: CalculateDiscountParams): number => {
  if (isPromo) {
    return 0;
  }

  let baseDiscount = 0;

  if (totalItems === 2) {
    baseDiscount = 3;
  } else if (totalItems >= 3 && totalItems <= 5) {
    baseDiscount = 5;
  } else if (totalItems >= 6 && totalItems <= 10) {
    baseDiscount = 10;
  } else if (totalItems > 10) {
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
