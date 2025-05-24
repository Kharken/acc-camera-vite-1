
import { useState, useCallback } from 'react';

interface ModalState {
  isOpen: boolean;
  activeItem?: any;
}

export const useModal = (initialState: ModalState = { isOpen: false }) => {
  const [modalState, setModalState] = useState<ModalState>(initialState);

  const openModal = useCallback((item?: any) => {
    setModalState({ isOpen: true, activeItem: item });
  }, []);

  const closeModal = useCallback(() => {
    setModalState({ isOpen: false, activeItem: undefined });
  }, []);

  return {
    isOpen: modalState.isOpen,
    activeItem: modalState.activeItem,
    openModal,
    closeModal
  };
};
