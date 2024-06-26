import { FC } from 'react';

import { FormattedCommission } from '../../interfacres/commissions';
import { TableData } from '../../shared-components/table/TableData';
import { TableRow } from '../../shared-components/table/TableRow';

interface Props {
  data: FormattedCommission;
}

export const CommissionsTableRow: FC<Props> = ({ data: { user_id, date, commission } }) => {
  return (
    <TableRow>
      <TableData>{date}</TableData>
      <TableData className='py-4'>{user_id}</TableData>
      <TableData>{commission}</TableData>
    </TableRow>
  );
};
