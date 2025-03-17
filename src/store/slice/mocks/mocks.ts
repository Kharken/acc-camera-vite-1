
import {commerce, image, datatype, finance} from 'faker';
import {Camera} from '../camera-slice/types/types.ts';

const getFakeCamera = (): Camera => (
  {
    id: +(datatype.number({min: 100000, max: 199999})),
    name: commerce.product(),
    vendorCode: finance.iban(),
    type: 'Коллекционная',
    category: 'Фотоаппарат',
    description: commerce.productDescription(),
    level: 'Профессиональный',
    price: +(commerce.price()),
    rating: datatype.number({min: 1, max: 5}),
    reviewCount: datatype.number({min: 0, max: 35}),
    previewImg: image.imageUrl(),
    previewImg2x: image.imageUrl(),
    previewImgWebp: image.imageUrl(),
    previewImgWebp2x: image.imageUrl(),
  }
);

export {getFakeCamera};
