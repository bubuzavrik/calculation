import { ReactNode } from 'react';

export interface TableColumn {
  id: string;
  title: string | ReactNode;
  className?: string;
}
