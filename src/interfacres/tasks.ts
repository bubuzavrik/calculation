export interface OperationValue {
  amount: number;
  currency: string;
}

export interface CashIn {
  percents: number;
  max: OperationValue;
}

export interface CashOutNatural {
  percents: number;
  week_limit: OperationValue;
}

export interface CashOutJuridical {
  percents: number;
  min: OperationValue;
}

export interface WeekData {
  total: number;
  freeUsed: number;
}

export interface UserWeekData {
  [weekNumber: string]: WeekData;
}

export interface WeeksTotal {
  [userId: string]: UserWeekData;
}
