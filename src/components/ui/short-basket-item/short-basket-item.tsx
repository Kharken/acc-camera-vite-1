
import { Camera } from '../../../store/slice/camera-slice/types/types';

type ShortBasketItemProps = {
  camera: Camera;
}

const ShortBasketItem = ({ camera }: ShortBasketItemProps) => {
  const { name, vendorCode, type, category, level, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;

  return (
    <div className="basket-item basket-item--short">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="140" height="120" alt={name} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{type} {category}</li>
          <li className="basket-item__list-item">{level} уровень</li>
        </ul>
      </div>
    </div>
  );
};

export default ShortBasketItem;
