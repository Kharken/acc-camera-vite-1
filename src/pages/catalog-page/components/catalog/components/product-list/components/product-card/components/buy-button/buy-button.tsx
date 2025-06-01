import {BuyButtonProps} from '../../types/types.ts';

const BuyButton = ({handleModalOpenClick, cameraId}: BuyButtonProps) => (
  <button className="btn btn--purple product-card__btn"
    type="button"
    onClick={() => handleModalOpenClick(cameraId)}
    data-testid="modal-open-button"
  >
    Купить
  </button>
);

export default BuyButton;
