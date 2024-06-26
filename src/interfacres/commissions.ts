export interface Commissions {
  user_id: number;
  user_type: string;
  type: string;
  date: string;
  operation: Operation;
}

export interface Operation {
  amount: number;
  currency: string;
}

export interface FormattedCommission {
  user_id: number;
  date: string;
  commission: number;
}
