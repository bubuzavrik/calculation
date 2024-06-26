import { FC, ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
};

export const TableRow: FC<Props> = ({ children, className }) => {
  return (
    <tr
      data-test='table-row'
      className={twMerge('border-b last:border-0 border-b-neutral-300', className)}
    >
      {children}
    </tr>
  );
};
