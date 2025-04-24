import {Camera} from '../../../../../../../../../store/slice/camera-slice/types/types.ts';
import {SortParams} from '../../../../../../../types/types.ts';
import {SetStateAction, Dispatch} from 'react';

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
