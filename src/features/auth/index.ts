import { slice, asyncAuthActions } from './authSlice';
import * as authSelectors from './auth-selectors';

const authReducer = slice.reducer;
const action = slice.actions;

const authAction = {
  ...asyncAuthActions,
  ...action,
};

export { authReducer, authAction, authSelectors };
