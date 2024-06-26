import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import {
  asyncGetCashInConfig,
  asyncGetCashOutJuridicalConfig,
  asyncGetCashOutNaturalConfig,
} from './action';
import { TasksSliceState } from './slice';
import { CashIn, CashOutJuridical, CashOutNatural } from '../../interfacres/tasks';

export function getCashInConfigReducer(builder: ActionReducerMapBuilder<TasksSliceState>) {
  builder.addCase(asyncGetCashInConfig.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(asyncGetCashInConfig.fulfilled, (state, { payload }: PayloadAction<CashIn>) => {
    state.cashIn = payload;
    state.isLoading = false;
  });

  builder.addCase(asyncGetCashInConfig.rejected, (state) => {
    state.isLoading = false;
  });
}

export function getCashOutNaturalConfigReducer(builder: ActionReducerMapBuilder<TasksSliceState>) {
  builder.addCase(asyncGetCashOutNaturalConfig.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    asyncGetCashOutNaturalConfig.fulfilled,
    (state, { payload }: PayloadAction<CashOutNatural>) => {
      state.cashOutNatural = payload;
      state.isLoading = false;
    }
  );

  builder.addCase(asyncGetCashOutNaturalConfig.rejected, (state) => {
    state.isLoading = false;
  });
}

export function getCashOutJuridicalConfigReducer(
  builder: ActionReducerMapBuilder<TasksSliceState>
) {
  builder.addCase(asyncGetCashOutJuridicalConfig.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    asyncGetCashOutJuridicalConfig.fulfilled,
    (state, { payload }: PayloadAction<CashOutJuridical>) => {
      state.cashOutJuridical = payload;
      state.isLoading = false;
    }
  );

  builder.addCase(asyncGetCashOutJuridicalConfig.rejected, (state) => {
    state.isLoading = false;
  });
}
