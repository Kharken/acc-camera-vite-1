import {useAppSelector} from '../../../app/hooks/hooks.ts';
import {getCamerasList} from '../../../store/slice/camera-slice/service/camera-selectors.ts';
import ProductCard from './components/product-card';


const Catalog = () => {
  const camerasList = useAppSelector(getCamerasList);
  console.log(camerasList);

  return (
    <div className="catalog__content">
      <div className="cards catalog__cards">
        {camerasList && camerasList.map((item) => <ProductCard key={item.id} props={item} />) }
      </div>
    </div>
  );
};

export default Catalog;
