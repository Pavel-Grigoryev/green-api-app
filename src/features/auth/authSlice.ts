import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AppRootStateType, ThunkErrorType } from 'common/utils/types';
import { handleAsyncServerNetworkError } from 'common/utils/error-utils';
import { appActions } from 'app';
import { authApi, AuthDataType, AccStatusRespType, AccSetRespType } from './authApi';
import { FormDataType } from './Login/Login';

// thunks
export const userSettingsTC = createAsyncThunk<AccSetRespType, AuthDataType, ThunkErrorType>(
  'auth/userSettingsTC',
  async (param, thunkAPI) => {
    try {
      const res = await authApi.getAccountSettings(param);
      return res.data;
    } catch (error) {
      const err = error as Error | AxiosError;
      return handleAsyncServerNetworkError(err, thunkAPI);
    }
  }
);
export const loginTC = createAsyncThunk<AccStatusRespType, undefined, ThunkErrorType>(
  'auth/loginTC',
  async (param, thunkAPI) => {
    const state = thunkAPI.getState() as AppRootStateType;
    const date: AuthDataType = {
      id: state.auth.id,
      apiToken: state.auth.apiToken,
    };
    try {
      const res = await authApi.getAccountStatus(date);
      thunkAPI.dispatch(userSettingsTC(date));
      return res.data;
    } catch (error) {
      const err = error as Error | AxiosError;
      return handleAsyncServerNetworkError(err, thunkAPI);
    } finally {
      thunkAPI.dispatch(appActions.setAppInitializedAC(true));
    }
  }
);

export const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    id: '',
    apiToken: '',
    whatsAppId: '',
  },
  reducers: {
    setAuthInitializedAC(state, action: PayloadAction<FormDataType>) {
      state.id = action.payload.id;
      state.apiToken = action.payload.apiToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginTC.fulfilled, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(userSettingsTC.fulfilled, (state, action) => {
        state.whatsAppId = action.payload.wid;
      });
  },
});

export const asyncAuthActions = { loginTC };

// types

export type AuthState = ReturnType<typeof slice.getInitialState>;
