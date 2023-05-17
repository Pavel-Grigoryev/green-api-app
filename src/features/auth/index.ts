import { slice, asyncAuthActions } from './authSlice';
import * as authSelectors from './auth-selectors';

const authReducer = slice.reducer;
const action = slice.actions;

const authActions = {
  ...asyncAuthActions,
  ...action,
};

export { authReducer, authActions, authSelectors };
