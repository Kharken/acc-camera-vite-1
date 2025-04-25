import {FilterStateProps} from '../pages/catalog-page/types/types.ts';
import {Camera} from '../store/slice/camera-slice/types/types.ts';
import {CamerasLevel, CamerasType} from '../pages/catalog-page/components/catalog-filter/const/const.ts';

export const getFilteredList = (list: Camera[], state: FilterStateProps): Camera[] => {
  let result = [...list];
  const levelList = state.level as Array<keyof typeof CamerasLevel>;
  const typeList = state.type as Array<keyof typeof CamerasType>;
  const priceMin = parseInt(state.priceFrom, 10);
  const priceMax = parseInt(state.priceTo, 10);

  if (state.category) {
    result = result.filter((item) => item.category === state.category);
  }

  if (levelList.length > 0) {
    result = result.filter((item) =>
      levelList.some((level) => item.level === CamerasLevel[level])
    );
  }

  if (typeList.length > 0) {
    result = result.filter((item) =>
      typeList.some((type) => item.type === CamerasType[type])
    );
  }

  if (priceMin && !priceMax) {
    result = result.filter((item) => item.price >= priceMin);
  }

  if (!priceMin && priceMax) {
    result = result.filter((item) => item.price <= priceMax);
  }

  if (priceMin && priceMax) {
    result = result.filter((item) => item.price >= priceMin && item.price <= priceMax);
  }

  return result;
};
