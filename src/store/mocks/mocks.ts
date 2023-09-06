
import {commerce, image, datatype, finance, internet, lorem} from 'faker';
import {Camera} from '../slice/camera-slice/types/types.ts';
import {ReviewType} from '../slice/review-slice/types/types.ts';

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

const getFakeReview = (): ReviewType => (
  {
    id: datatype.number({min: 100000, max: 199999}).toString(),
    createAt: datatype.datetime().toLocaleString(),
    cameraId: +(datatype.number({min: 100000, max: 199999})),
    userName: internet.userName(),
    advantage: commerce.productDescription(),
    disadvantage: commerce.productDescription(),
    review: lorem.sentence(),
    rating: datatype.number({min: 1, max: 5}),
  }
);

export {getFakeCamera, getFakeReview};
