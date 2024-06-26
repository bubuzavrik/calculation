import { FC } from 'react';

import { TableData } from './TableData';
import { TableRow } from './TableRow';

interface Props {
  colSpan: number;
}

export const TableNoData: FC<Props> = ({ colSpan }) => {
  return (
    <TableRow>
      <TableData colSpan={colSpan} className='last:text-center'>
        No data
      </TableData>
    </TableRow>
  );
};
