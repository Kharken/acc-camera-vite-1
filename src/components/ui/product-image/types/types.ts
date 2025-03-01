import {Camera} from '../../../../store/slice/camera-slice/types/types.ts';

export type ProductImageProps = Pick<Camera, 'previewImgWebp' | 'previewImgWebp2x' | 'previewImg' | 'previewImg2x' | 'name'>
