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
