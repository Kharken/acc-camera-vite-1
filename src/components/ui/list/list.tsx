import {ReactNode} from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
}

const List = <T extends { id: string | number }>({
  items,
  renderItem,
  className
}: ListProps<T>) => (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.id}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );

export default List;
