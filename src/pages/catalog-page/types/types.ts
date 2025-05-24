import {ChangeEvent} from 'react';
import React from 'react';

export type InitialModalState = {
  activeCard: number;
  isModalOpen: boolean;
}

export type PhoneItemProps = {
  activeCard: number;
  handleModalCloseClick: () => void;
}

export type SortParams = {
  type: 'price' | 'popularity';
  order: 'increase' | 'decrease';
}

export type FilterStateProps = {
  category: string;
  type: string[];
  level: string[];
  priceFrom: string;
  priceTo: string;
}

export type CameraTypeProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
}

export type CameraLevelProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
}

export type CameraCategoryProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
}

export type CatalogFilterProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  onChangeResetHandler: () => void;
  filter: FilterStateProps;
  setFilter: React.Dispatch<React.SetStateAction<FilterStateProps>>;
}

export type PriceRangeProps = {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
  setFilter: React.Dispatch<React.SetStateAction<FilterStateProps>>;
}

export type CatalogAddItemProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type FilterInputChangeHandler = (value: React.SetStateAction<FilterStateProps>) => void;

export type EventHandler = (evt: ChangeEvent<HTMLInputElement>) => void;
