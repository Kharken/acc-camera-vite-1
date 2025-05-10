
import {CAMERA_CART_LOCALSTORAGE_KEY} from '../../../utils/const/const.ts';

export const addToLocalStorage = <T>(currentActiveCard: T): T[] => {
  const key = CAMERA_CART_LOCALSTORAGE_KEY;
  const getFromStorageResult = localStorage.getItem(key);
  const data: T[] = getFromStorageResult !== null ? JSON.parse(getFromStorageResult) as T[] : [];
  if (currentActiveCard) {
    data.push(currentActiveCard);
    localStorage.setItem(
      key, JSON.stringify(data));
  }

  return data;
};
