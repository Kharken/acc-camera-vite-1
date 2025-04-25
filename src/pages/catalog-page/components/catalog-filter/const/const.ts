
const PriceValue = {
  'price': 'от',
  'priceUp': 'до'
} as const;


const CamerasCategory = {
  'photocamera': 'Фотоаппарат',
  'videocamera': 'Видеокамера',
} as const;

const CamerasType = {
  'digital': 'Цифровая',
  'film': 'Плёночная',
  'snapshot': 'Моментальная',
  'collection': 'Коллекционная',
} as const;

const CamerasLevel = {
  'zero': 'Нулевой',
  'non-professional': 'Любительский',
  'professional': 'Профессиональный',
} as const;

const CamerasFilterGroups = {
  level: 'Уровень',
  type: 'Тип камеры',
};

export { PriceValue, CamerasType, CamerasCategory, CamerasLevel, CamerasFilterGroups };
