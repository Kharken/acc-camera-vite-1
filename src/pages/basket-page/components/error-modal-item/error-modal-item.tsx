import {useScrollLock} from '../../../../utils/hooks/useScrollLock';

const ErrorModalItem = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useScrollLock();

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={onClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Ошибка</p>
          <p>{message}</p>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={onClose}
            >
            Вернуться к покупкам
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModalItem;
