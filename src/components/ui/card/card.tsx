
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Card = ({ className, children, onClick }: CardProps) => (
  <div className={`card ${className || ''}`} onClick={onClick}>
    {children}
  </div>
);

export default Card;
