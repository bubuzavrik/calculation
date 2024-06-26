import { expect } from 'chai';

import { Commissions, FormattedCommission } from '../interfacres/commissions';
import { CashIn, CashOutJuridical, CashOutNatural } from '../interfacres/tasks';
import {
  getCashInCommission,
  getCashOutJuridicalCommission,
  getCashOutNaturalCommission,
} from '../utils/calculate-commission';

describe('getCashInCommission', () => {
  it('calculates commission correctly for Cash In transactions', () => {
    const transaction: Commissions = {
      user_id: 1,
      user_type: 'natural',
      type: 'cash_in',
      date: '2023-01-01',
      operation: {
        amount: 1000,
        currency: 'EUR',
      },
    };

    const config: CashIn = {
      percents: 0.5,
      max: {
        amount: 5,
        currency: 'EUR',
      },
    };

    const expectedCommission: FormattedCommission = {
      user_id: 1,
      date: '2023-01-01',
      commission: 5,
    };

    const result = getCashInCommission(transaction, config);
    expect(result).to.deep.equal(expectedCommission);
  });
});

describe('getCashOutJuridicalCommission', () => {
  it('calculates commission correctly for Cash Out transactions (juridical)', () => {
    const transaction: Commissions = {
      user_id: 2,
      user_type: 'juridical',
      type: 'cash_out',
      date: '2023-01-01',
      operation: {
        amount: 5000,
        currency: 'EUR',
      },
    };

    const config: CashOutJuridical = {
      percents: 1,
      min: {
        amount: 10,
        currency: 'EUR',
      },
    };

    const expectedCommission: FormattedCommission = {
      user_id: 2,
      date: '2023-01-01',
      commission: 50,
    };

    const result = getCashOutJuridicalCommission(transaction, config);
    expect(result).to.deep.equal(expectedCommission);
  });
});

describe('getCashOutNaturalCommission', () => {
  it('calculates commission correctly for Cash Out transactions (natural)', () => {
    const transaction: Commissions = {
      user_id: 3,
      user_type: 'natural',
      type: 'cash_out',
      date: '2023-01-01',
      operation: {
        amount: 200,
        currency: 'EUR',
      },
    };

    const config: CashOutNatural = {
      percents: 0.3,
      week_limit: {
        amount: 1000,
        currency: 'EUR',
      },
    };

    const expectedCommission: FormattedCommission = {
      user_id: 3,
      date: '2023-01-01',
      commission: 0,
    };

    const result = getCashOutNaturalCommission(transaction, config);
    expect(result).to.deep.equal(expectedCommission);
  });

  it('calculates commission correctly when exceeding weekly limit', () => {
    const transaction: Commissions = {
      user_id: 4,
      user_type: 'natural',
      type: 'cash_out',
      date: '2023-01-01',
      operation: {
        amount: 1100,
        currency: 'EUR',
      },
    };

    const config: CashOutNatural = {
      percents: 0.3,
      week_limit: {
        amount: 1000,
        currency: 'EUR',
      },
    };

    const expectedCommission: FormattedCommission = {
      user_id: 4,
      date: '2023-01-01',
      commission: 0.3,
    };

    const result = getCashOutNaturalCommission(transaction, config);
    expect(result).to.deep.equal(expectedCommission);
  });
});
