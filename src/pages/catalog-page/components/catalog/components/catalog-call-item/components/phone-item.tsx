import {ChangeEvent, useState} from 'react';

const PhoneItem = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);

    if (/[^0-9+\-()\s]/.test(value)) {
      setError('Ввод букв не допускается');
      return;
    }

    const symbolsCountRegex = /^(?:\D*\d){11}\D*$/;
    if (!symbolsCountRegex.test(value)) {
      setError('Введено неверное количество символов');
      return;
    }

    const formatRegex = /^(\+7|8)(\s*\(?\s*9\d{2}\s*\)?\s*)(\s*[- ]?\s*\d{3}\s*[- ]?\s*)(\d{2}\s*[- ]?\s*)(\d{2})$/;
    if (!formatRegex.test(value)) {
      setError('Неверный формат');
      return;
    }

    let cleaned = value.replace(/[^\d+]/g, '');
    if (cleaned.startsWith('8')) {
      cleaned = `+7${ cleaned.slice(1)}`;
    }

    if (!cleaned.startsWith('+79') || cleaned.length !== 12) {
      setError('Номер должен быть в формате +79XXXXXXXXX');
      return;
    }

    setError('');
  };

  return (
    <>
      <div className={`custom-input form-review__item ${error ? 'is-invalid' : ''}`}>
        <label>
          <span className="custom-input__label">Телефон
            <svg width="9"
              height="9"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-snowflake"></use>
            </svg>
          </span>
          <input
            type="text"
            value={phone}
            onChange={handleInputValueChange}
            placeholder="+7(9XX)XXX-XX-XX"
          />
        </label>
        {error && <p className='custom-input__error'>{error}</p>}
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
        >
          <svg width="24"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-add-basket"></use>
          </svg>
          Заказать
        </button>
      </div>


    </>
  );
};

export default PhoneItem;
