import ReactFocusLock from 'react-focus-lock';
import {CatalogCallItemProps} from '../product-card/types/types.ts';
import {useEffect, useRef} from 'react';
import {useAppSelector} from '../../../../../../app/hooks/hooks.ts';
import {getCamerasList} from '../../../../../../store/slice/camera-slice/service/camera-selectors.ts';
import PhoneItem from './components';

const CatalogCallItem = ({handleModalCloseClick, isModalOpen, activeCard}: CatalogCallItemProps) => {
  const camerasList = useAppSelector(getCamerasList);
  const currentActiveCard = camerasList.find((item) => item.id === activeCard);
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    if (isModalOpen && focusRef.current) {
      focusRef.current.focus();
    }

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
  }, [handleModalCloseClick, isModalOpen, focusRef]);

  return (
    <ReactFocusLock>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay"
            onClick={handleModalCloseClick}
          >

          </div>
          <div className="modal__content">
            <p className="title title--h4">Свяжитесь со мной</p>
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
            <PhoneItem />
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
    </ReactFocusLock>
  );
};

export default CatalogCallItem;
