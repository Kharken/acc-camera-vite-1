import Header from '../../blocks/header';
import Footer from '../../blocks/footer';
import {Outlet} from 'react-router-dom';

const AppLayout = () => (
  <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </>
);

export default AppLayout;
