import { createAsyncThunk } from '@reduxjs/toolkit';

import { tasksApi } from '../../apis/tasks';
import { showServerError } from '../../utils/modules';

export const TASKS_SLICE_NAME = 'tasks';

export const asyncGetCashInConfig = createAsyncThunk(
  `${TASKS_SLICE_NAME}/getCashInConfig`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await tasksApi.getCashInConfig();
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);

export const asyncGetCashOutNaturalConfig = createAsyncThunk(
  `${TASKS_SLICE_NAME}/getCashOutNaturalConfig`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await tasksApi.getCashOutNaturalConfig();
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);

export const asyncGetCashOutJuridicalConfig = createAsyncThunk(
  `${TASKS_SLICE_NAME}/getCashOutJuridicalConfig`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await tasksApi.getCashOutJuridicalConfig();
      return response.data;
    } catch (e) {
      showServerError(e);
      return rejectWithValue(e);
    }
  }
);
