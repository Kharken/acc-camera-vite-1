
import {useScrollLock} from '../../../../utils/hooks/useScrollLock';

const SuccessModalItem = ({ onClose }: { onClose: () => void }) => {
  useScrollLock();

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за покупку</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={onClose}
            >
            Вернуться к покупкам
            </button>
          </div>
          <button className="cross-btn" type="button" onClick={onClose} aria-label="Закрыть попап">
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};


export default SuccessModalItem;
