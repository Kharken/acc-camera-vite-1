import {Swiper, SwiperSlide} from 'swiper/react';
import {useAppDispatch, useAppSelector} from '../../../../app/hooks/hooks.ts';
import {getSimilarCamerasList} from '../../../../store/slice/camera-slice/service/camera-selectors.ts';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../../../catalog-page/components/catalog/components/product-card';
import {openModal, setActiveCard} from '../../../../store/slice/camera-slice/service/camera-slice.ts';

const SimilarCamera = () => {
  const dispatch = useAppDispatch();
  const similarCameraList = useAppSelector(getSimilarCamerasList);

  const handleActiveCardMouseOver = (id: number | null) => {
    dispatch(setActiveCard(id));
  };

  const handleModalOpenClick = (id: number | null) => {
    dispatch(openModal(id));
    dispatch(setActiveCard(id));
    document.body.classList.add('scroll-lock');
  };

  return (
    <Swiper
      navigation
      modules={[Navigation]}
      slidesPerView={3}
      spaceBetween={30}
    >
      {similarCameraList && similarCameraList.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCard props={item} handleActiveCardMouseOver={handleActiveCardMouseOver} handleModalOpenClick={handleModalOpenClick}/>
        </SwiperSlide>))}
    </Swiper>
  );
};

export default SimilarCamera;


