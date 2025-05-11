import Catalog from './components/catalog';
import CatalogCallItem from './components/catalog/components/catalog-call-item';
import {useState} from 'react';
import {FilterStateProps} from './types/types.ts';
import CatalogFilter from './components/catalog-filter';
import {filterInputChangeHandler} from './utils';
import {useMouseModal} from '../../utils/hooks/useMouseModal.ts';

const CatalogPage = () => {

  const { activeModal, handleModalCloseClick, handleModalOpenClick, handleActiveCardMouseOver} = useMouseModal();


  const initialFilterState: FilterStateProps = {
    category: '',
    type: [],
    level: [],
    priceFrom: '',
    priceTo: '',
  };

  const [filter, setFilter] = useState(initialFilterState);

  const handleFilterInputChange = filterInputChangeHandler(setFilter);

  const handleFilterResetChange = () => {
    setFilter(initialFilterState);
  };


  return (
    <div data-testid="catalog-page">
      <div className="banner"
        data-testid="catalog-page-banner"
      >
        <picture>
          <source type="image/webp"
            srcSet="img/content/banner-bg.webp, img/content/banner-bg@2x.webp 2x"
          />
          <img src="img/content/banner-bg.jpg"
            srcSet="img/content/banner-bg@2x.jpg 2x"
            width="1280"
            height="280"
            alt="баннер"
          />
        </picture>
        <p className="banner__info">
          <span className="banner__message">Новинка!</span>
          <span className="title title--h1">Cannonball&nbsp;Pro&nbsp;MX&nbsp;8i</span>
          <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
          <a className="btn"
            href="#"
          >Подробнее
          </a>
        </p>
      </div>
      <div className="page-content"
        data-testid="catalog-page-content"
      >
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link"
                  href="index.html"
                >Главная
                  <svg width="5"
                    height="8"
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <CatalogFilter onChangeHandler={handleFilterInputChange} filter={filter} setFilter={setFilter} onChangeResetHandler ={handleFilterResetChange}/>
              <Catalog handleModalOpenClick={handleModalOpenClick}
                handleActiveCardMouseOver={handleActiveCardMouseOver}
                filter={filter}
              />
            </div>
          </div>
        </section>
      </div>
      {activeModal.isModalOpen &&
        <CatalogCallItem
          handleModalCloseClick={handleModalCloseClick}
          isModalOpen={activeModal.isModalOpen}
          activeCard={activeModal.activeCard}
        />}
    </div>
  );
};


export default CatalogPage;
