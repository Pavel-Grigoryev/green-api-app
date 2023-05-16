import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    isInitialized: false,
    error: null as null | string,
  },
  reducers: {
    setAppInitializedAC(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },
    setAppErrorAC(state, action: PayloadAction<null | string>) {
      state.error = action.payload;
    },
  },
});
