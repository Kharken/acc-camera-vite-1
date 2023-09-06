import React from 'react';

import Header from '../header';
import Footer from '../footer';
import {Outlet, useLocation} from 'react-router-dom';
import ButtonUp from '../../ui/button-up';
import {useRef} from 'react';

const AppLayout = () => {
  const location = useLocation();
  const productLocation = location.pathname.includes('/camera/');

  const headerRef: React.MutableRefObject<HTMLAnchorElement | null> = useRef(null);

  return (
    <div className={'wrapper'}>
      <Header childRef={headerRef}/>
      <main>
        <Outlet/>
      </main>
      {productLocation && <ButtonUp childRef={headerRef}/>}
      <Footer/>
    </div>
  );
};

export default AppLayout;
