import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks/hooks.ts';
import {
  getCurrentCamera,
  getCurrentCameraLoadingStatus
} from '../../store/slice/camera-slice/service/camera-selectors.ts';
import {useEffect, useState} from 'react';
import {fetchCurrentCamera, fetchReviewData} from '../../store/service/api-action/api-action.ts';
import {RoutePath} from '../../app/route-path/route-path.ts';
import ProductImage from '../../components/ui/product-image';
import Loader from '../../components/ui/loader';
import {getReviewLoadingStatus} from '../../store/slice/review-slice/service/review-selectors.ts';
import Review from '../../components/blocks/review';

const ProductPage = () => {
  const {id: cameraId} = useParams();
  const currentCamera = useAppSelector(getCurrentCamera);


  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isCurrentCameraLoading = useAppSelector(getCurrentCameraLoadingStatus);
  const isReviewLoading = useAppSelector(getReviewLoadingStatus);

  const isLoading = isCurrentCameraLoading || isReviewLoading;

  useEffect(() => {
    if (cameraId){
      dispatch(fetchCurrentCamera(cameraId));
      dispatch(fetchReviewData(cameraId));
    } else {
      navigate(RoutePath.NotFound);
    }
  }, [cameraId, dispatch, navigate]);

  const [isActive, setIsActive] = useState<boolean>(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  if (isLoading) {
    return <Loader/>;
  }


  return (
    <div className="page-content">
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link"
                href="index.html"
              >Главная
                <svg width="5"
                  height="8"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link"
                href="catalog.html"
              >Каталог
                <svg width="5"
                  height="8"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </a>
            </li>
            <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">{currentCamera && currentCamera.name}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content__section">
        <section className="product">
          <div className="container">
            <div className="product__img">
              {currentCamera &&
                <ProductImage previewImgWebp={currentCamera.previewImgWebp}
                  previewImgWebp2x={currentCamera.previewImg2x}
                  name={currentCamera.name}
                  previewImg={currentCamera.previewImg}
                  previewImg2x={currentCamera.previewImg2x}
                />}
            </div>
            <div className="product__content">
              <h1 className="title title--h3">{currentCamera && currentCamera.name}</h1>
              <div className="rate product__rate">
                <svg width="17"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="17"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="17"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="17"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-full-star"></use>
                </svg>
                <svg width="17"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <p className="visually-hidden">Рейтинг: {currentCamera && currentCamera.rating}</p>
                <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{currentCamera && currentCamera.reviewCount}</p>
              </div>
              <p className="product__price"><span className="visually-hidden">Цена:</span>{currentCamera && currentCamera.price} ₽</p>
              <button className="btn btn--purple"
                type="button"
              >
                <svg width="24"
                  height="16"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-add-basket"></use>
                </svg>
                Добавить в корзину
              </button>
              <div className="tabs product__tabs">
                <div className="tabs__controls product__tabs-controls">
                  <button className={`tabs__control ${!isActive ? 'is-active' : ''}`}
                    type="button"
                    onClick={handleClick}
                  >Характеристики
                  </button>
                  <button className={`tabs__control ${isActive ? 'is-active' : ''}`}
                    type="button"
                    onClick={handleClick}
                  >Описание
                  </button>
                </div>
                <div className="tabs__content">
                  <div className={`tabs__element ${!isActive ? 'is-active' : ''}`}>
                    <ul className="product__tabs-list">
                      <li className="item-list"><span className="item-list__title">Артикул:</span>
                        <p className="item-list__text"> {currentCamera && currentCamera.vendorCode}</p>
                      </li>
                      <li className="item-list"><span className="item-list__title">Категория:</span>
                        <p className="item-list__text">{currentCamera && currentCamera.category}</p>
                      </li>
                      <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                        <p className="item-list__text">{currentCamera && currentCamera.type}</p>
                      </li>
                      <li className="item-list"><span className="item-list__title">Уровень:</span>
                        <p className="item-list__text">{currentCamera && currentCamera.level}</p>
                      </li>
                    </ul>
                  </div>
                  <div className={`tabs__element ${isActive ? 'is-active' : ''}`}>
                    <div className="product__tabs-text">
                      <p>
                        {currentCamera && currentCamera.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="page-content__section">
        <section className="review-block">
          <div className="container">
            <div className="page-content__headed">
              <h2 className="title title--h3">Отзывы</h2>
            </div>
            <Review/>
            <div className="review-block__buttons">
              <button className="btn btn--purple"
                type="button"
              >Показать больше отзывов
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
