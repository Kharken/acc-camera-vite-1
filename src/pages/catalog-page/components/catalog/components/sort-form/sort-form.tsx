import {SortFormProps, SortOrder, SortType} from '../product-list/components/product-card/types/types.ts';

const SortForm = ({sortType, sortOrder, handleInputChange}: SortFormProps) => {
  const handleTypeChange = (type: SortType) => {
    handleInputChange((prev) => ({ ...prev, type }));
  };

  const handleOrderChange = (order: SortOrder) => {
    handleInputChange((prev) => ({ ...prev, order }));
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio"
                id="sortPrice"
                name="sort"
                checked={sortType === 'price'}
                onChange={() => handleTypeChange('price')}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPopular"
                name="sort"
                checked={sortType === 'popularity'}
                onChange={() => handleTypeChange('popularity')}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input type="radio"
                id="up"
                name="sort-icon"
                checked={sortOrder === 'increase'}
                onChange={() => handleOrderChange('increase')}
                aria-label="По возрастанию"
              />
              <label htmlFor="up">
                <svg width="16"
                  height="14"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input type="radio"
                id="down"
                name="sort-icon"
                aria-label="По убыванию"
                checked={sortOrder === 'decrease'}
                onChange={() => handleOrderChange('decrease')}
              />
              <label htmlFor="down">
                <svg width="16"
                  height="14"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SortForm;
