import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CatalogPage from '../pages/catalog-page';
import AppLayout from '../components/layout/app-layout';
import ProductPage from '../pages/product-page';
import BasketPage from '../pages/basket-page';
import {RoutePath} from './route-path/route-path.ts';
import NotFoundPage from '../pages/not-found-page';
import {useAppSelector} from './hooks/hooks.ts';
import {getCameraLoadingStatus} from '../store/slice/camera-slice/service/camera-selectors.ts';
import Loader from '../components/ui/loader';

const App = () => {
  const isLoading = useAppSelector(getCameraLoadingStatus);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Index} element={<AppLayout/>}>
          <Route index element={<CatalogPage/>}/>
          <Route path={RoutePath.Camera} element={<ProductPage/>}/>
          <Route path={RoutePath.Basket} element={<BasketPage/>}/>
        </Route>
        <Route path={RoutePath.NotFound} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
