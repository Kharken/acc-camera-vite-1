import {useAppSelector} from '../../../../../../app/hooks/hooks.ts';
import {getCamerasList} from '../../../../../../store/slice/camera-slice/service/camera-selectors.ts';
import ProductCard from './components/product-card';
import {CatalogProps} from './components/product-card/types/types.ts';

const ProductList = ({handleModalOpenClick, handleActiveCardMouseOver}: CatalogProps) => {
  const camerasList = useAppSelector(getCamerasList);

  return (
    <div className="cards catalog__cards">
      {camerasList && camerasList.map((item) => (
        <ProductCard key={item.id}
          props={item}
          handleModalOpenClick={handleModalOpenClick}
          handleActiveCardMouseOver={handleActiveCardMouseOver}
        />))}
    </div>
  );
};

export default ProductList;
