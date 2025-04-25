
import {CatalogProps, FilterProps} from './components/product-list/components/product-card/types/types.ts';
import ProductList from './components/product-list';
import SortForm from './components/sort-form';
import {useEffect, useState} from 'react';
import {SortParams} from '../../types/types.ts';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks/hooks.ts';
import {getCamerasList} from '../../../../store/slice/camera-slice/service/camera-selectors.ts';
import {getFilteredList} from '../../../../utils/get-filtered-list.ts';
import {setActualCamera} from '../../../../store/slice/camera-slice/service/camera-slice.ts';


const Catalog = ({handleModalOpenClick, handleActiveCardMouseOver, filter}: CatalogProps & FilterProps) => {
  const dispatch = useAppDispatch();
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

  const sortedAndFilteredCamerasList = getFilteredList(sortedCamerasList, filter);

  useEffect(() => {
    dispatch(setActualCamera(sortedAndFilteredCamerasList));
  }, [dispatch, sortedAndFilteredCamerasList]);

  return (
    <div className="catalog__content"
      data-testid="catalog-content"
    >
      <SortForm
        sortOrder={sortParams.order}
        sortType={sortParams.type}
        handleInputChange={setSortParams}
      />
      {sortedAndFilteredCamerasList &&
        <ProductList
          handleModalOpenClick={handleModalOpenClick}
          handleActiveCardMouseOver={handleActiveCardMouseOver}
          sortedCamerasList={sortedAndFilteredCamerasList}
        />}
    </div>
  );
};

export default Catalog;
