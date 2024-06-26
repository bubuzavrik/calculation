import { getISOWeek } from 'date-fns';

import { Commissions } from '../interfacres/commissions';
import {
  CashIn,
  CashOutJuridical,
  CashOutNatural,
  WeekData,
  WeeksTotal,
} from '../interfacres/tasks';

const calculateCommission = (amount: number, percent: number) => (amount * percent) / 100;

export const getCashInCommission = (
  { date, user_id, ...transaction }: Commissions,
  config: CashIn
) => {
  const commission = calculateCommission(transaction.operation.amount, config.percents);
  return { date, user_id, commission: Math.min(commission, config.max.amount) };
};

export const getCashOutCommission = (
  transaction: Commissions,
  naturalConfig: CashOutNatural,
  juridicalConfig: CashOutJuridical
) =>
  transaction.user_type === 'natural'
    ? getCashOutNaturalCommission(transaction, naturalConfig)
    : getCashOutJuridicalCommission(transaction, juridicalConfig);

export const getCashOutJuridicalCommission = (
  { date, user_id, ...transaction }: Commissions,
  config: CashOutJuridical
) => {
  const commission = calculateCommission(transaction.operation.amount, config.percents);
  return { date, user_id, commission: Math.max(commission, config.min.amount) };
};

const weeksTotal: WeeksTotal = {};

export const getCashOutNaturalCommission = (
  { user_id, operation: { amount }, date }: Commissions,
  { percents, week_limit: { amount: limit } }: CashOutNatural
) => {
  const weekNumber = getISOWeek(date);

  weeksTotal[user_id] ??= {};
  weeksTotal[user_id][weekNumber] ??= { total: 0, freeUsed: 0 };

  const userWeekData = weeksTotal[user_id][weekNumber];
  const { commission, userData } = getUpdatedUserWeekData(amount, percents, limit, userWeekData);

  weeksTotal[user_id][weekNumber] = userData;

  return { date, user_id, commission };
};

const getUpdatedUserWeekData = (
  amount: number,
  percents: number,
  limit: number,
  userData: WeekData
) => {
  let commission = 0;

  if (userData.freeUsed < limit) {
    const remainingFree = limit - userData.freeUsed;
    commission = amount > remainingFree ? calculateCommission(amount - remainingFree, percents) : 0;
  } else {
    commission = calculateCommission(amount, percents);
  }

  return {
    commission,
    userData: { freeUsed: userData.freeUsed + amount, total: userData.total + amount },
  };
};
