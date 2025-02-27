import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CatalogPage from '../pages/catalog-page';
import AppLayout from '../components/layout/app-layout';
import ProductPage from '../pages/product-page';
import BasketPage from '../pages/basket-page';
import {RoutePath} from './route-path/route-path.ts';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.Index} element={<AppLayout/>}>
        <Route index element={<CatalogPage/>}/>
        <Route path={RoutePath.Camera} element={<ProductPage/>}/>
        <Route path={RoutePath.Basket} element={<BasketPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
