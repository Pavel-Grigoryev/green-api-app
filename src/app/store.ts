import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { messengerReducer } from 'features/messenger';
import { loadState, saveState } from 'common/utils/localstorage-utils';
import { authReducer } from '../features/auth';
import { appReducer } from './index';

const authPreloadedState = loadState();

const preloadedState = {
  auth: authPreloadedState,
};
export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  messenger: messengerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

store.subscribe(() => {
  saveState(store.getState().auth);
});
// @ts-ignore
window.store = store;
