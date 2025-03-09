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
      <input
        type="text"
        value={phone}
        onChange={handleInputValueChange}
        placeholder="+7(9XX)XXX-XX-XX"
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  );
};

export default PhoneItem;
