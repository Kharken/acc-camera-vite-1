

import ProductCard from './components/product-card';
import {ProductListProps} from './components/product-card/types/types.ts';

const ProductList = ({handleModalOpenClick, handleActiveCardMouseOver, sortedCamerasList}: ProductListProps) => (
  <div className="cards catalog__cards">
    {sortedCamerasList && sortedCamerasList.map((item) => (
      <ProductCard key={item.id}
        props={item}
        handleModalOpenClick={handleModalOpenClick}
        handleActiveCardMouseOver={handleActiveCardMouseOver}
      />))}
  </div>
);

export default ProductList;
