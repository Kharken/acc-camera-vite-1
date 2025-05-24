
import {CAMERA_CART_LOCALSTORAGE_KEY} from '../../../utils/const/const.ts';

export const removeFromLocalStorage = <T>(currentActiveCard: T): T[] => {
  const key = CAMERA_CART_LOCALSTORAGE_KEY;
  const getFromStorageResult = localStorage.getItem(key);
  const data: T[] = getFromStorageResult !== null ? JSON.parse(getFromStorageResult) as T[] : [];
  if (currentActiveCard) {
    data.pop();
    localStorage.removeItem(key);
  }

  return data;
};
