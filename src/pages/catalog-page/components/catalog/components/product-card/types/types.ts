import {Camera} from '../../../../../../../store/slice/camera-slice/types/types.ts';

export type ProductCardProps = {
  props: Camera;
} & CatalogProps;

export type CatalogProps = {
  handleModalOpenClick: (id: number) => void;
  handleActiveCardMouseOver: (id: number) => void;
}

export type CatalogCallItemProps = {
  handleModalCloseClick: () => void;
  isModalOpen: boolean;
  activeCard: number;
}
