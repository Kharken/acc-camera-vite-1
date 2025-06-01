import {Camera} from '../../../../../../../../../store/slice/camera-slice/types/types.ts';
import {FilterStateProps, SortParams} from '../../../../../../../types/types.ts';
import {SetStateAction, Dispatch} from 'react';

export type ProductCardProps = {
  props: Camera;
  handleModalOpenClick: (id: number) => void;
  handleActiveCardMouseOver: (id: number) => void;
};

export type CatalogProps = {
  handleModalOpenClick: (id: number) => void;
  handleActiveCardMouseOver: (id: number) => void;
}

export type FilterProps = {
  filter: FilterStateProps;
}

export type CatalogCallItemProps = {
  handleModalCloseClick: () => void;
  isModalOpen: boolean;
  activeCard: number;
}

export type SortType = 'price' | 'popularity';

export type SortOrder = 'increase' | 'decrease';

export type SortFormProps = {
  sortType: SortType;
  sortOrder: SortOrder;
  handleInputChange: Dispatch<SetStateAction<SortParams>>;
}

export type ProductListProps = {
  handleModalOpenClick: (id: number) => void;
  handleActiveCardMouseOver: (id: number) => void;
  sortedCamerasList: Camera[];
}

export type BuyButtonProps = {
  handleModalOpenClick: (id: number) => void;
  cameraId: number;
}
