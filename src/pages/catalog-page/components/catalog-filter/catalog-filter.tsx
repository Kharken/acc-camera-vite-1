import PriceRange from './components/price-range';
import CameraType from './components/camera-type';
import CameraCategory from './components/camera-category';
import CameraLevel from './components/camera-level';
import {CatalogFilterProps} from '../../types/types.ts';

const CatalogFilter = ({onChangeHandler, filter, onChangeResetHandler, setFilter}: CatalogFilterProps) => (
  <div className="catalog-filter" data-testid="catalog-filter">
    <form action="#">
      <h2 className="visually-hidden">Фильтр</h2>
      <PriceRange onChangeHandler={onChangeHandler} setFilter={setFilter} filter={filter}/>
      <CameraCategory onChangeHandler={onChangeHandler} filter={filter}/>
      <CameraType onChangeHandler={onChangeHandler} filter={filter}/>
      <CameraLevel onChangeHandler={onChangeHandler} filter={filter}/>
      <button
        className="btn catalog-filter__reset-btn"
        type="reset"
        onClick={onChangeResetHandler}
      >
          Сбросить фильтры
      </button>
    </form>
  </div>
);

export default CatalogFilter;
