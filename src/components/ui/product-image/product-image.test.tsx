import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import ProductImage from './index.ts';
import {ProductImageProps} from './types/types.ts';


describe('Component: ProductImage', () => {
  it('should renders correctly', () => {
    const productImageTestId = 'product-image';
    const productImageProps: ProductImageProps = {
      previewImg: '',
      previewImg2x: '',
      previewImgWebp: '',
      previewImgWebp2x: '',
      name: '',
    };
    const {previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, name} = productImageProps;

    render(<ProductImage previewImgWebp={previewImgWebp} previewImgWebp2x={previewImgWebp2x} previewImg2x={previewImg2x} name={name} previewImg={previewImg}/>);

    const productImage = screen.getByTestId(productImageTestId);

    expect(productImage).toBeInTheDocument();
  });
});
