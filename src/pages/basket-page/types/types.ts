import {Camera} from '../../../store/slice/camera-slice/types/types.ts';

export type BasketItemType = {
  props: Camera;
  basketStorageData: Camera[];
  clickButtonRemoveItemHandler: (id: number) => void;
}
