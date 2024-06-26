import { FC } from 'react';

import { twMerge } from 'tailwind-merge';

import { TableColumn } from '../../interfacres/table';

interface Props {
  columns: TableColumn[];
}

export const TableHead: FC<Props> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ id, title, className }) => (
          <th
            key={id}
            className={twMerge(
              'text-mediumBlue text-sm font-normal text-left p-2 select-none last:text-right',
              className
            )}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};
