---
to: src/store/slices/<%= h.changeCase.camel(name) %>/thunks.ts
---
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from '@store/types';
import { <%= h.changeCase.camel(name) %>Actions } from './slice';

export const <%= h.changeCase.camel(name) %>Thunk = (): AppThunk => (dispatch, getState) => {
  // const {} = getState();
  // dispatch(<%= h.changeCase.camel(name) %>Actions.someAction())
};

export const <%= h.changeCase.camel(name) %>AsyncThunk = createAsyncThunk('<%= h.changeCase.camel(name) %>/fetchExample', async () => {
  // fetch here
});
