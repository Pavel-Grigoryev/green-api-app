import { slice, asyncMesengerActions } from './messengerSlice';
import * as messengerSelectors from './messenger-selectors';

const messengerReducer = slice.reducer;
const action = slice.actions;

const messengerActions = {
  ...action,
  ...asyncMesengerActions,
};

export { messengerReducer, messengerActions, messengerSelectors };
