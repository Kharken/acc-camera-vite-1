
import {CatalogProps} from './components/product-list/components/product-card/types/types.ts';
import ProductList from './components/product-list';
import SortForm from './components/sort-form';
import {useState} from 'react';
import {SortParams} from '../../types/types.ts';
import {useAppSelector} from '../../../../app/hooks/hooks.ts';
import {getCamerasList} from '../../../../store/slice/camera-slice/service/camera-selectors.ts';


const Catalog = ({handleModalOpenClick, handleActiveCardMouseOver}: CatalogProps) => {
  const camerasList = useAppSelector(getCamerasList);
  const initialState: SortParams = {
    type: 'price',
    order: 'increase'
  };
  const [sortParams, setSortParams] = useState<SortParams>(initialState);

  const sortedCamerasList = [...camerasList].sort((a, b) => {
    const modifier = sortParams.order === 'increase' ? 1 : -1;

    if (sortParams.type === 'price') {
      return (a.price - b.price) * modifier;
    }

    if (sortParams.type === 'popularity') {
      return (a.rating - b.rating) * modifier;
    }

    return 0;
  });


  return (
    <div className="catalog__content"
      data-testid="catalog-content"
    >
      <SortForm sortOrder={sortParams.order} sortType={sortParams.type} handleInputChange={setSortParams}/>
      <ProductList
        handleModalOpenClick={handleModalOpenClick}
        handleActiveCardMouseOver={handleActiveCardMouseOver}
        sortedCamerasList={sortedCamerasList}
      />
    </div>
  );
};

export default Catalog;
