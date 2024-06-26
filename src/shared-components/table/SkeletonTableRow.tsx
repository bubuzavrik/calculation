import { FC } from 'react';

import { TableColumn } from '../../interfacres/table';

interface Props {
  columns: TableColumn[];
}

export const SkeletonTableRow: FC<Props> = ({ columns }) => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <tr key={index}>
          {columns.map(({ id }) => (
            <td className='is-loading' key={id}>
              <div className='m-0.5' />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
