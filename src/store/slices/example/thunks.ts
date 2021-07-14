import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from '@store/types';
import { exampleRequest } from '@api/example';
import { exampleActions } from './slice';

export const exampleThunk = (): AppThunk => (dispatch, getState) => {
  const {
    example: { count },
  } = getState();
  console.log(count);
  dispatch(exampleActions.increment());
};

export const exampleAsyncThunk = createAsyncThunk('example/fetchExample', async (id: string) => {
  const data = await exampleRequest(id);
  return data;
});
