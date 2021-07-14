---
to: src/store/slices/<%= h.changeCase.camel(name) %>/slice.ts
---
import { createSlice } from '@reduxjs/toolkit';

interface State {
}

const initialState: State = {
};

const slice = createSlice({
  name: '<%= h.changeCase.camel(name) %>',
  initialState,
  reducers: {
  },
});

export const <%= h.changeCase.camel(name) %>Reducer = slice.reducer;
export const <%= h.changeCase.camel(name) %>Actions = slice.actions;
