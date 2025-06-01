import {ChangeEvent} from 'react';
import {CamerasCategory, CamerasFilterGroups} from '../components/catalog-filter/const/const.ts';
import {EventHandler, FilterInputChangeHandler, FilterStateProps} from '../types/types.ts';

export const filterInputChangeHandler = (setFn: FilterInputChangeHandler): EventHandler => function (evt: ChangeEvent<HTMLInputElement>): void {
  const {value, checked, dataset, type, name} = evt.target;
  if (type === 'radio') {
    const categoryKey = value as keyof typeof CamerasCategory;
    setFn((prevState) => ({
      ...prevState,
      category: CamerasCategory[categoryKey],
    }));
  } else if (type === 'checkbox' && dataset.groupName === CamerasFilterGroups.type) {
    setFn((prevState): FilterStateProps => ({
      ...prevState,
      type: checked ? [...prevState.type, value] : prevState.type.filter((item) => item !== value),
    }));
  } else if (type === 'checkbox' && evt.target.dataset.groupName === CamerasFilterGroups.level) {
    setFn((prevState) => ({
      ...prevState,
      level: checked ? [...prevState.level, value] : prevState.level.filter((item) => item !== value),
    }));
  } else if (name === 'price') {
    setFn((prevState) => ({
      ...prevState,
      priceFrom: value,
    }));
  } else if (name === 'priceUp') {
    setFn((prevState) => ({
      ...prevState,
      priceTo: value,
    }));
  }
};
