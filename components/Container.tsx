import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`container container-centered max-w-6xl ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
