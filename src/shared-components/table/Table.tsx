import { FC, ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

import { SkeletonTableRow } from './SkeletonTableRow';
import { TableHead } from './TableHead';
import { TableColumn } from '../../interfacres/table';

export type Props = {
  children: ReactNode;
  columns: TableColumn[];
  className?: string;
  wrapperClassName?: string;
  isLoading?: boolean;
};

export const Table: FC<Props> = ({ children, columns, className, wrapperClassName, isLoading }) => {
  return (
    <div className={twMerge('overflow-x-auto', wrapperClassName)}>
      <table className={twMerge('whitespace-nowrap w-full', className)}>
        <TableHead columns={columns} />
        <tbody>{isLoading ? <SkeletonTableRow columns={columns} /> : children}</tbody>
      </table>
    </div>
  );
};
