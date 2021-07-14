import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '@app-types/common';
import { exampleAsyncThunk } from './thunks';

interface State {
  count: number;
  status: RequestStatus;
  error: string | null;
  result: { data: string } | null;
}

const initialState: State = {
  count: 0,
  status: RequestStatus.Idle,
  error: null,
  result: null,
};
const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(exampleAsyncThunk.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(exampleAsyncThunk.fulfilled, (state, { payload }) => {
      state.status = RequestStatus.Success;
      state.result = payload;
    });
    builder.addCase(exampleAsyncThunk.rejected, (state) => {
      state.status = RequestStatus.Error;
      state.error = 'Error';
    });
  },
});

export const exampleReducer = slice.reducer;
export const exampleActions = slice.actions;
