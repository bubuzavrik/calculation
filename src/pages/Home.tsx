import { useEffect, useState } from 'react';

import { COMMISSION_COLUMNS } from '../constants/commission';
import data from '../input.json';
import { Commissions, FormattedCommission } from '../interfacres/commissions';
import { useAppDispatch, useAppSelector } from '../modules/store';
import {
  asyncGetCashInConfig,
  asyncGetCashOutJuridicalConfig,
  asyncGetCashOutNaturalConfig,
} from '../modules/tasks/action';
import {
  selectCashIn,
  selectCashOutJuridical,
  selectCashOutNatural,
} from '../modules/tasks/selectors';
import { CommissionsTableRow } from '../page-components/home/CommissionsTableRow';
import { Table } from '../shared-components/table/Table';
import { TableNoData } from '../shared-components/table/TableNoData';
import { getCashInCommission, getCashOutCommission } from '../utils/calculate-commission';

export const Home = () => {
  const dispatch = useAppDispatch();

  const cashIn = useAppSelector(selectCashIn);
  const cashOutNatural = useAppSelector(selectCashOutNatural);
  const cashOutJuridical = useAppSelector(selectCashOutJuridical);

  const [formattedCommissions, setFormattedCommissions] = useState<FormattedCommission[]>([]);

  useEffect(() => {
    if (!cashIn || !cashOutNatural || !cashOutJuridical) return;

    const formattedCommissions = data.map((commission: Commissions) => {
      switch (commission.type) {
        case 'cash_in':
          return getCashInCommission(commission, cashIn);
        case 'cash_out':
          return getCashOutCommission(commission, cashOutNatural, cashOutJuridical);
        default:
          return 0;
      }
    });

    setFormattedCommissions(formattedCommissions as FormattedCommission[]);
  }, [cashIn, cashOutNatural, cashOutJuridical]);

  useEffect(() => {
    dispatch(asyncGetCashInConfig());
    dispatch(asyncGetCashOutNaturalConfig());
    dispatch(asyncGetCashOutJuridicalConfig());
  }, [dispatch]);

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <div className='w-1/2 p-8 rounded-md bg-sky-50'>
        <Table columns={COMMISSION_COLUMNS}>
          {formattedCommissions?.length ? (
            formattedCommissions.map((commission: FormattedCommission, index) => (
              <CommissionsTableRow key={`${commission.user_id}-${index}`} data={commission} />
            ))
          ) : (
            <TableNoData colSpan={COMMISSION_COLUMNS.length} />
          )}
        </Table>
      </div>
    </div>
  );
};
