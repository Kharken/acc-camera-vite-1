import {FooterNav} from '../types/types.ts';
import {getEnumTextKeys} from '../../../../../../utils/get-enum-text-keys.ts';

enum FooterMenuListOne {
  'Каталог',
  'Гарантии',
  'Доставка',
  'О компании',
}

enum FooterMenuListTwo {
  'Курсы операторов',
  'Блог',
  'Сообщество',
}

enum FooterMenuListThree {
  'FAQ',
  'Задать вопрос',
}

export const FooterNavItemList: FooterNav[] = [
  {
    title: 'Навигация',
    menuList: getEnumTextKeys(FooterMenuListOne),
  },
  {
    title: 'Ресурсы',
    menuList: getEnumTextKeys(FooterMenuListTwo),
  },
  {
    title: 'Поддержка',
    menuList: getEnumTextKeys(FooterMenuListThree),
  },
];
