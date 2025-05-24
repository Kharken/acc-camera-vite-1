import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from '../../../../../../app/route-path/route-path.ts';
import {CatalogAddItemProps} from '../../../../types/types.ts';
import { Camera } from '../../../../../../mock/cameras.ts'; // Import Camera type

// Create the ShortBasketItem component
interface ShortBasketItemProps {
  camera: Camera;
}

function ShortBasketItem({ camera }: ShortBasketItemProps) {
  return (
    <div className="basket-item basket-item--short">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x} 2x`} />
          <img src={camera.previewImg} srcSet={`${camera.previewImg2x} 2x`} width="140" height="120" alt={camera.name} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{camera.name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{camera.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{camera.type} {camera.category}</li>
          <li className="basket-item__list-item">{camera.level} уровень</li>
        </ul>
      </div>
    </div>
  );
}

const CatalogAddItem = ({isOpen, setIsOpen, camera}: CatalogAddItemProps & {camera: Camera}) => {
  const navigate = useNavigate();
  useEffect(() => {

    const handleModalEscapeKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen){
      document.addEventListener('keydown', handleModalEscapeKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleModalEscapeKeyDown);
    };
  }, [setIsOpen, isOpen]);

  return (
    <div className={isOpen ? "modal is-active modal--narrow" : "modal modal--narrow"}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon"
            width="86"
            height="80"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-success"></use>
          </svg>
          <div className="modal__buttons">
            <a className="btn btn--transparent modal__btn"
              href="#"
               onClick={() => {
                 setIsOpen(false);
                 document.body.classList.remove('scroll-lock');
               }}
            >
              Продолжить покупки
            </a>
            <button className="btn btn--purple modal__btn modal__btn--fit-width"
            onClick={() => {
              navigate(`/${RoutePath.Basket}`);
              document.body.classList.remove('scroll-lock');
            }}>Перейти в корзину</button>
          </div>
          <button className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
                  onClick={() => {
                    setIsOpen(false);
                    document.body.classList.remove('scroll-lock');
                  }}
          >
            <svg width="10"
              height="10"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
          <ShortBasketItem camera={camera} />
        </div>
      </div>
    </div>
  );
};


export default CatalogAddItem;
```

```typescript
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from '../../../../../../app/route-path/route-path.ts';
import {CatalogAddItemProps} from '../../../../types/types.ts';
import { Camera } from '../../../../../../mock/cameras.ts';

interface ShortBasketItemProps {
  camera: Camera;
}

function ShortBasketItem({ camera }: ShortBasketItemProps) {
  return (
    <div className="basket-item basket-item--short">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x} 2x`} />
          <img src={camera.previewImg} srcSet={`${camera.previewImg2x} 2x`} width="140" height="120" alt={camera.name} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{camera.name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{camera.vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{camera.type} {camera.category}</li>
          <li className="basket-item__list-item">{camera.level} уровень</li>
        </ul>
      </div>
    </div>
  );
}

const CatalogAddItem = ({isOpen, setIsOpen, camera}: CatalogAddItemProps & {camera: Camera}) => {
  const navigate = useNavigate();
  useEffect(() => {

    const handleModalEscapeKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen){
      document.addEventListener('keydown', handleModalEscapeKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleModalEscapeKeyDown);
    };
  }, [setIsOpen, isOpen]);

  return (
    <div className={isOpen ? "modal is-active modal--narrow" : "modal modal--narrow"}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon"
            width="86"
            height="80"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-success"></use>
          </svg>
          <div className="modal__buttons">
            <a className="btn btn--transparent modal__btn"
              href="#"
               onClick={() => {
                 setIsOpen(false);
                 document.body.classList.remove('scroll-lock');
               }}
            >
              Продолжить покупки
            </a>
            <button className="btn btn--purple modal__btn modal__btn--fit-width"
            onClick={() => {
              navigate(`/${RoutePath.Basket}`);
              document.body.classList.remove('scroll-lock');
            }}>Перейти в корзину</button>
          </div>
          <button className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
                  onClick={() => {
                    setIsOpen(false);
                    document.body.classList.remove('scroll-lock');
                  }}
          >
            <svg width="10"
              height="10"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
          <ShortBasketItem camera={camera} />
        </div>
      </div>
    </div>
  );
};


export default CatalogAddItem;