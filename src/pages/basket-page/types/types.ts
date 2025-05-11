import {Camera} from '../../../store/slice/camera-slice/types/types.ts';

export type BasketItemType = {
  props: Camera;
  basketStorageData: Camera[];
  handleModalOpenClick: (id: number) => void;
}

export type BasketRemoveModalItemProps = {
  handleModalCloseClick: () => void;
  isModalOpen: boolean;
  activeCard: number;
  basketData: Camera[];
  clickButtonRemoveItemHandler: (id: number) => void;
}
