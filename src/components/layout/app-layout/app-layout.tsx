import Header from '../header';
import Footer from '../footer';
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
