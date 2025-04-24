
import {CatalogProps} from './components/product-list/components/product-card/types/types.ts';
import ProductList from './components/product-list';
import SortForm from './components/sort-form';


const Catalog = ({handleModalOpenClick, handleActiveCardMouseOver}: CatalogProps) => (
  <div className="catalog__content" data-testid="catalog-content">
    <SortForm/>
    <ProductList handleModalOpenClick={handleModalOpenClick} handleActiveCardMouseOver={handleActiveCardMouseOver}/>
  </div>
);

export default Catalog;
