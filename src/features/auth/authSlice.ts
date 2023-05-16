import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AppRootStateType, ThunkErrorType } from 'common/utils/types';
import { handleAsyncServerNetworkError } from 'common/utils/error-utils';
import { appActions } from 'app';
import { authApi, AuthDataType, AuthResponseType } from './authApi';
import { FormDataType } from './Login/Login';

// thunks

export const loginTC = createAsyncThunk<AuthResponseType, undefined, ThunkErrorType>(
  'auth/loginTC',
  async (param, thunkAPI) => {
    const state = thunkAPI.getState() as AppRootStateType;
    const date: AuthDataType = {
      id: state.auth.id,
      apiToken: state.auth.apiToken,
    };
    try {
      const res = await authApi.login(date);
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
  },
  reducers: {
    setAuthInitializedAC(state, action: PayloadAction<FormDataType>) {
      state.id = action.payload.id;
      state.apiToken = action.payload.apiToken;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginTC.fulfilled, (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const asyncAuthActions = { loginTC };

// types
