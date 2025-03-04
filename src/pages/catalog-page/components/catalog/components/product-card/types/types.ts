import {Camera} from '../../../../../../../store/slice/camera-slice/types/types.ts';
import {MouseEventHandler} from 'react';

export type ProductCardProps = {
  props: Camera;
} & CatalogProps;

export type CatalogProps = {
  handleModalOpenClick: MouseEventHandler<HTMLElement>;
}

export type CatalogCallItemProps = {
  handleModalCloseClick: () => void;
  isModalOpen: boolean;
}
