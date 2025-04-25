
enum CamerasTypeList {
  'Коллекционная',
  'Моментальная',
  'Цифровая',
  'Плёночная',
}

enum CamerasCategoryList {
  'Видеокамера',
  'Фотоаппарат',
}

enum CamerasLevelList {
  'Нулевой',
  'Любительский',
  'Профессиональный'
}

type CamerasType = keyof typeof CamerasTypeList;
type CamerasCategory = keyof typeof CamerasCategoryList;
type CamerasLevel = keyof typeof CamerasLevelList;

export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: CamerasType;
  category: CamerasCategory;
  description: string;
  level: CamerasLevel;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export type CameraInitialState = {
  camera: Camera[];
  actualCamera: Camera[];
  currentCamera: Camera | undefined;
  isCameraLoading: boolean;
  isCurrentCameraLoading: boolean;
}

