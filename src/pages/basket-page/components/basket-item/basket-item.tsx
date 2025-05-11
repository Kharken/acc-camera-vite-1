import {BasketItemType} from '../../types/types.ts';
import {ChangeEvent, useState} from 'react';


const BasketItem = ({props, basketStorageData, clickButtonRemoveItemHandler}: BasketItemType) => {
  const {name, id, price, vendorCode,type, category, level, previewImgWebp, previewImgWebp2x, previewImg2x, previewImg} = props;

  const basketItemData = basketStorageData.filter((item) => item.id === id);
  const initialCountState = basketItemData.length;
  // TODO: доделать удаление из корзины
  const [value, setValue] = useState(initialCountState);

  const increaseCount = () => {
    setValue((prevState) => (prevState + 1));
  };

  const decreaseCount = () => {
    setValue((prevState) => (prevState - 1));
  };

  const changeInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(+evt.target.value);
  };

  const blurValueCheckHandler = () => {
    if (value <= 1) {
      setValue(1);
    } else if (value >= 99) {
      setValue(99);
    }
  };


  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp"
            srcSet={`./${previewImgWebp}, ../${previewImgWebp2x}`}
          />
          <img src={previewImg}
            srcSet={previewImg2x}
            width="140"
            height="120"
            alt={name}
          />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{type} {category}</li>
          <li className="basket-item__list-item">{level} уровень</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
      <div className="quantity">
        <button className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          onClick={decreaseCount}
          disabled={value <= 1}
        >
          <svg width="7"
            height="12"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden"
          htmlFor="counter1"
        >
        </label>
        <input type="number"
          onChange={changeInputHandler}
          onBlur={() => blurValueCheckHandler()}
          id="counter1"
          value={value}
          min="1"
          max="99"
          aria-label="количество товара"
        />
        <button className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          onClick={increaseCount}
          disabled={value >= 99}
        >
          <svg width="7"
            height="12"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{value * price} ₽
      </div>
      <button className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={() =>clickButtonRemoveItemHandler(id)}
      >
        <svg width="10"
          height="10"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
};

export default BasketItem;
