import {Camera} from '../../camera-slice/types/types.ts';

export type PromoCamera = Pick<Camera, 'id' | 'name' | 'previewImgWebp' | 'previewImgWebp2x' | 'previewImg' | 'previewImg2x'>;

export type PromoInitialState = {
  promo: PromoCamera[];
}
