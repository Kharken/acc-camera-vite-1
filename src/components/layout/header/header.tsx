
import Logo from '../../ui/logo';
import HeaderNav from './components/header-nav';
import {useAppSelector} from '../../../app/hooks/hooks.ts';
import {getCurrentCameraLoadingStatus} from '../../../store/slice/camera-slice/service/camera-selectors.ts';
import {RefProps} from '../../../app/types/types.ts';
import SearchForm from './components/search-form';


const Header = ({childRef}: RefProps) => {
  const isLoading = useAppSelector(getCurrentCameraLoadingStatus);


  return(
    <header className={isLoading ? 'visually-hidden' : 'header'} id="header" ref={childRef} data-testid="header">
      <div className="container">
        <Logo classNameProp={'header'} xlinkHrefProp={''}/>
        <HeaderNav/>
        <SearchForm/>
      </div>
    </header>
  );
};

export default Header;
