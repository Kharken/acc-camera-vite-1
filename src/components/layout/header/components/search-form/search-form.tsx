import ReactFocusLock from 'react-focus-lock';
import {useAppSelector} from '../../../../../app/hooks/hooks.ts';
import {getCamerasList} from '../../../../../store/slice/camera-slice/service/camera-selectors.ts';
import SearchFormItem from './components/search-form-item';
import {CSSProperties, useEffect, useRef, useState} from 'react';
import {Camera} from '../../../../../store/slice/camera-slice/types/types.ts';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const SearchForm = () => {
  const camerasList = useAppSelector(getCamerasList);
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState<Camera[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const navigate = useNavigate();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (searchResults){
      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setCurrentIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
          break;

        case 'ArrowUp':
          e.preventDefault();
          setCurrentIndex((prev) => Math.max(prev - 1, -1));
          break;

        case 'Escape':
          setSearchResults(null);
          setCurrentIndex(-1);
          inputRef.current?.blur();
          break;

        case 'Enter':
          navigate(`camera/${searchResults[currentIndex].id}`);
      }
    }
  };

  useEffect(() => {
    if (value.length > 2) {
      const filteredCameras = camerasList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredCameras);
      setCurrentIndex(-1); // Сброс индекса при новом поиске
    } else {
      setSearchResults(null);
    }
  }, [value, camerasList]);


  const listClassName = !searchResults ? '' : 'list-opened';
  const buttonResetVisibilityStyle: CSSProperties = value ? {
    display: 'block',
    opacity: 1,
  } : {};

  const handleClearInputButtonClick = () => {
    setValue('');
  };

  return (
    <ReactFocusLock>
      <div className={`form-search ${listClassName}`}
        onKeyDown={handleKeyDown}
      >
        <form>
          <label>
            <svg className="form-search__icon"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-lens"></use>
            </svg>
            <input value={value}
              className="form-search__input"
              type="text"
              autoComplete="off"
              placeholder="Поиск по сайту"
              onChange={(evt) => {
                setValue(evt.target.value);
              }}

              ref={inputRef}
            />
          </label>
          <ul className="form-search__select-list" ref={resultsRef}>
            {searchResults && searchResults.map((item: Camera, index) => (
              <SearchFormItem key={item.id} id={item.id} value={item.name} ref={(el) => {
                itemsRef.current[index] = el;
              }}
              />))}
          </ul>
        </form>
        {buttonResetVisibilityStyle &&
          <button
            className="form-search__reset"
            style={buttonResetVisibilityStyle}
            type="reset"
            onClick={handleClearInputButtonClick}
          >
            <svg width="10"
              height="10"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-close"></use>
            </svg>
            <span className="visually-hidden">Сбросить поиск</span>
          </button>}
      </div>
    </ReactFocusLock>
  );
};

export default SearchForm;
