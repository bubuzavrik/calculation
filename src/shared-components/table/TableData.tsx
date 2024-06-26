import { DetailedHTMLProps, FC, ReactNode, TdHTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

interface Props
  extends DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
  children?: ReactNode;
  className?: string;
}

export const TableData: FC<Props> = ({ className, children, ...props }) => {
  return (
    <td className={twMerge('p-2 first:text-left last:text-right', className)} {...props}>
      {children}
    </td>
  );
};
