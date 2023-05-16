import { slice } from './appSlice';
import * as appSelectors from './app-selectors';

const appReducer = slice.reducer;
const { actions } = slice;

const appActions = {
  ...actions,
};

export { appReducer, appActions, appSelectors };
