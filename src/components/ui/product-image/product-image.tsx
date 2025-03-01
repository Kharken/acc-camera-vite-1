import {ProductImageProps} from './types/types.ts';

const ProductImage = ({previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, name}: ProductImageProps) => (
  <picture>
    <source type="image/webp"
      srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}
    />
    <img src={previewImg}
      srcSet={`${previewImg2x} 2x`}
      width="560"
      height="480"
      alt={name}
    />
  </picture>
);

export default ProductImage;
