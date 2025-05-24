import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from '../../../../../../app/route-path/route-path.ts';


const CatalogAddItem = ({isOpen, setIsOpen}) => {
  const navigate = useNavigate();
  useEffect(() => {

    const handleModalEscapeKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen){
      document.addEventListener('keydown', handleModalEscapeKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleModalEscapeKeyDown);
    };
  }, [setIsOpen, isOpen]);

  return (
    <div className={isOpen ? "modal is-active modal--narrow" : "modal modal--narrow"}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon"
            width="86"
            height="80"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-success"></use>
          </svg>
          <div className="modal__buttons">
            <a className="btn btn--transparent modal__btn"
              href="#"
               onClick={() => {
                 setIsOpen(false);
                 document.body.classList.remove('scroll-lock');
               }}
            >
              Продолжить покупки
            </a>
            <button className="btn btn--purple modal__btn modal__btn--fit-width"
            onClick={() => {
              navigate(`/${RoutePath.Basket}`);
              document.body.classList.remove('scroll-lock');
            }}>Перейти в корзину</button>
          </div>
          <button className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
                  onClick={() => {
                    setIsOpen(false);
                    document.body.classList.remove('scroll-lock');
                  }}
          >
            <svg width="10"
              height="10"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};


export default CatalogAddItem;
