import { useEffect } from 'react';
import { calculateDiscount } from '../../utils/functions/calculate-discount';
import {getPromoItemsCount} from '../../utils/functions/get-promo-items-count.ts';

import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks.ts';
import { getBasketCameraList } from '../../store/slice/basket-slice/service/basket-selectors.ts';
import BasketItem from './components/basket-item';
import { getUniqueList } from '../../utils/functions/get-unique-list.ts';
import { CAMERA_CART_LOCALSTORAGE_KEY } from '../../utils/const/const.ts';
import { getFromLocalStorage } from '../catalog-page/utils';
import { Camera } from '../../store/slice/camera-slice/types/types.ts';
import { setBasketData } from '../../store/slice/basket-slice/service/basket-slice.ts';
import RemoveModalItem from './components/remove-modal-item';
import { useMouseModal } from '../../utils/hooks/useMouseModal.ts';
import {getPromoList} from '../../store/slice/promo-slice/service/promo-selectors.ts';

const BasketPage = () => {
  const dispatch = useAppDispatch();
  const basketStorageData = useAppSelector(getBasketCameraList);
  const promoList = useAppSelector(getPromoList);

  const basketTotalPrice =
    basketStorageData.reduce((acc, item) => acc + item.price, 0) || 0;
  const totalItems = basketStorageData.length;
  const promoItemsCount = getPromoItemsCount(basketStorageData, promoList);

  const discount = calculateDiscount({
    totalItems,
    totalPrice: basketTotalPrice,
    promoItems: promoItemsCount,
  });


  useEffect(() => {
    const handleStorageUpdate = (e: StorageEvent) => {
      if (e.key === CAMERA_CART_LOCALSTORAGE_KEY) {
        const newData = getFromLocalStorage<Camera>(
          CAMERA_CART_LOCALSTORAGE_KEY,
        );
        dispatch(setBasketData(newData));
      }
    };

    window.addEventListener('storage', handleStorageUpdate);
    return () => window.removeEventListener('storage', handleStorageUpdate);
  }, [dispatch]);
  const { activeModal, handleModalCloseClick, handleModalOpenClick } =
    useMouseModal();

  const basketData = getUniqueList(basketStorageData, 'id');

  const clickButtonRemoveItemHandler = (id: number) => {
    const updated = basketData.filter((item) => item.id !== id);
    dispatch(setBasketData(updated));
    handleModalCloseClick();
  };

  return (
    <>
      <div className="page-content" data-testid="basket-page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="index.html">
                  Главная
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="catalog.html">
                  Каталог
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">
                  Корзина
                </span>
              </li>
            </ul>
          </div>
        </div>
        <section className="basket">
          <div className="container">
            <h1 className="title title--h2">Корзина</h1>
            <ul className="basket__list">
              {basketData.map((item) => (
                <BasketItem
                  basketStorageData={basketStorageData}
                  props={item}
                  key={item.id}
                  handleModalOpenClick={handleModalOpenClick}
                />
              ))}
            </ul>
            <div className="basket__summary">
              <div className="basket__promo"></div>
              <div className="basket__summary-order">
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Всего:</span>
                  <span className="basket__summary-value">
                    {basketTotalPrice} ₽
                  </span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text">Скидка:</span>
                  <span
                    className={`basket__summary-value ${discount > 0 ? 'basket__summary-value--bonus' : ''}`}
                  >
                    {discount.toFixed(0)} ₽
                  </span>
                </p>
                <p className="basket__summary-item">
                  <span className="basket__summary-text basket__summary-text--total">
                    К оплате:
                  </span>
                  <span className="basket__summary-value basket__summary-value--total">
                    {(basketTotalPrice - discount).toFixed(0)} ₽
                  </span>
                </p>

                <button className="btn btn--purple" type="submit">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {activeModal.isModalOpen && (
        <RemoveModalItem
          handleModalCloseClick={handleModalCloseClick}
          isModalOpen={activeModal.isModalOpen}
          activeCard={activeModal.activeCard}
          basketData={basketData}
          clickButtonRemoveItemHandler={clickButtonRemoveItemHandler}
        />
      )}
    </>
  );
};

export default BasketPage;
