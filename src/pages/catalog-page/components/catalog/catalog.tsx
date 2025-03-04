import {useAppSelector} from '../../../../app/hooks/hooks.ts';
import {getCamerasList} from '../../../../store/slice/camera-slice/service/camera-selectors.ts';
import ProductCard from './components/product-card';
import {CatalogProps} from './components/product-card/types/types.ts';


const Catalog = ({handleModalOpenClick}: CatalogProps) => {
  const camerasList = useAppSelector(getCamerasList);

  return (
    <div className="catalog__content">
      <div className="cards catalog__cards">
        {camerasList && camerasList.map((item) => <ProductCard key={item.id} props={item} handleModalOpenClick={handleModalOpenClick}/>) }
      </div>
    </div>
  );
};

export default Catalog;
