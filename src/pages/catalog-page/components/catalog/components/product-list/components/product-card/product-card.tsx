import {ProductCardProps} from './types/types.ts';
import {Link} from 'react-router-dom';

const ProductCard = ({props, handleModalOpenClick, handleActiveCardMouseOver}: ProductCardProps) => {
  const {name, price, rating, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, reviewCount, id: cameraId} = props;

  return (
    <div className="product-card"
      onMouseEnter={() => handleActiveCardMouseOver(cameraId)}
      data-testid="product-card"
    >
      <div className="product-card__img">
        <picture>
          <source type="image/webp"
            srcSet={`${previewImgWebp}, ${previewImgWebp2x}`}
          />
          <img src={previewImg}
            srcSet={previewImg2x}
            width="280"
            height="240"
            alt={name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="17"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
          <svg width="17"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn"
          type="button"
          onClick={() => handleModalOpenClick(cameraId)}
          data-testid="modal-open-button"
        >Купить
        </button>
        <Link className="btn btn--transparent"
          to={`camera/${cameraId}`}
        >Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
