import {BasketRemoveModalItemProps} from '../../types/types.ts';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {RoutePath} from '../../../../app/route-path/route-path.ts';
import {setBasketData} from '../../../../store/slice/basket-slice/service/basket-slice.ts';
import {useAppDispatch} from '../../../../app/hooks/hooks.ts';
import {removeAllFromLocalStorage} from '../../../catalog-page/utils/remove-all-from-local-storage.ts';
import {Camera} from '../../../../store/slice/camera-slice/types/types.ts';

const RemoveModalItem = ({handleModalCloseClick, isModalOpen, activeCard, basketData, clickButtonRemoveItemHandler}: BasketRemoveModalItemProps) => {
  const dispatch = useAppDispatch();

  // TODO: дубликат кода в модалке
  useEffect(() => {

    const handleModalEscapeKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        handleModalCloseClick();
      }
    };
    if (isModalOpen){
      document.addEventListener('keydown', handleModalEscapeKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleModalEscapeKeyDown);
    };
  }, [handleModalCloseClick, isModalOpen]);

  const currentActiveCard = basketData.find((item) => item.id === activeCard) as Camera;

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"
          onClick={handleModalCloseClick}
        >

        </div>
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp"
                  srcSet={currentActiveCard && `./${currentActiveCard.previewImgWebp}, ../${currentActiveCard.previewImgWebp2x}`}
                />
                <img src={currentActiveCard && currentActiveCard.previewImg}
                  srcSet={currentActiveCard && currentActiveCard.previewImg2x}
                  width="140"
                  height="120"
                  alt={currentActiveCard && currentActiveCard.name}
                />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{currentActiveCard && currentActiveCard.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span>
                  <span className="basket-item__number">{currentActiveCard && currentActiveCard.vendorCode}2</span>
                </li>
                <li className="basket-item__list-item">{currentActiveCard && currentActiveCard.type}</li>
                <li className="basket-item__list-item">{currentActiveCard && currentActiveCard.level} уровень</li>
              </ul>
              <p className="basket-item__price">
                <span className="visually-hidden">Цена:</span>{currentActiveCard && currentActiveCard.price} ₽
              </p>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--half-width"
              type="button"
              onClick={() => {
                currentActiveCard && clickButtonRemoveItemHandler(currentActiveCard.id);
                dispatch(setBasketData(removeAllFromLocalStorage(currentActiveCard)));
              }}
            >
              Удалить
            </button>
            <Link className="btn btn--transparent modal__btn modal__btn--half-width"
              to={RoutePath.Index}
              onClick={handleModalCloseClick}
            >
              Продолжить покупки
            </Link>
          </div>
          <button className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={handleModalCloseClick}
          >
            <svg width="10"
              height="10"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveModalItem;
