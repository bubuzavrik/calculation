import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const selectState = (x: RootState) => x.tasksReducer;

export const selectCashIn = createSelector(selectState, ({ cashIn }) => cashIn);

export const selectCashOutNatural = createSelector(
  selectState,
  ({ cashOutNatural }) => cashOutNatural
);

export const selectCashOutJuridical = createSelector(
  selectState,
  ({ cashOutJuridical }) => cashOutJuridical
);

export const selectIsLoading = createSelector(selectState, ({ isLoading }) => isLoading);
