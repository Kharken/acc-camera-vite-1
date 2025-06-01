import {Camera} from '../../store/slice/camera-slice/types/types.ts';

export const getPromoItemsCount = (
  basket: Camera[],
  promo: { id: number }[]
): number => {
  const promoIds = new Set(promo.map((item) => item.id));
  return basket.filter((item) => promoIds.has(item.id)).length;
};
