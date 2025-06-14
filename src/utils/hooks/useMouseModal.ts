import {InitialModalState} from '../../pages/catalog-page/types/types.ts';
import {useState} from 'react';


export const useMouseModal = () => {
  const initialModalState: InitialModalState = {
    activeCard: 0,
    isModalOpen: false,
  };
  const [activeModal, setActiveModal] = useState(initialModalState);

  const handleActiveCardMouseOver = (id: number) => {
    setActiveModal({...activeModal, activeCard: id});
  };

  const handleModalOpenClick = (id: number) => {
    setActiveModal({...activeModal, activeCard: id, isModalOpen: true});
    document.body.classList.add('scroll-lock');
  };

  const handleModalCloseClick = () => {
    setActiveModal({...activeModal, activeCard: 0, isModalOpen: false});
    document.body.classList.remove('scroll-lock');
  };

  const handleModalEscapeKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      handleModalCloseClick();
    }
  };

  return {activeModal, handleModalCloseClick, handleModalOpenClick, handleActiveCardMouseOver, handleModalEscapeKeyDown};
};
