import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CatalogPage from '../pages/catalog-page';
import AppLayout from '../components/layout/app-layout';
import ProductPage from '../pages/product-page';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<CatalogPage/>}/>
        <Route path='camera/:id' element={<ProductPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
