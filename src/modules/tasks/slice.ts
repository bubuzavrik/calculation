import { createSlice } from '@reduxjs/toolkit';

import { TASKS_SLICE_NAME } from './action';
import {
  getCashInConfigReducer,
  getCashOutJuridicalConfigReducer,
  getCashOutNaturalConfigReducer,
} from './reducers';
import { CashIn, CashOutJuridical, CashOutNatural } from '../../interfacres/tasks';

export interface TasksSliceState {
  isLoading: boolean;
  cashIn: CashIn | null;
  cashOutNatural: CashOutNatural | null;
  cashOutJuridical: CashOutJuridical | null;
}

export const initialState: TasksSliceState = {
  cashIn: null,
  cashOutNatural: null,
  cashOutJuridical: null,
  isLoading: false,
};

const tasksSlice = createSlice({
  name: TASKS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getCashInConfigReducer(builder);
    getCashOutNaturalConfigReducer(builder);
    getCashOutJuridicalConfigReducer(builder);
  },
});

export const tasksReducer = tasksSlice.reducer;
