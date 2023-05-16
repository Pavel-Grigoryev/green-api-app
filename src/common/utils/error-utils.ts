import axios, { AxiosError } from 'axios';
import { appActions } from 'app';

export const handleAsyncServerNetworkError = (
  err: Error | AxiosError,
  thunkAPI: ThunkAPIType,
  showError = true
) => {
  if (axios.isAxiosError<AxiosError<{ message: string }>>(err)) {
    if (showError) {
      thunkAPI.dispatch(appActions.setAppErrorAC(err.message));
    }
    //  thunkAPI.dispatch(setAppStatusAC({status: "failed"}));
  }
  return thunkAPI.rejectWithValue({ errors: err.message });
};

// Types
// original type:
// BaseThunkAPI<S, E, D extends Dispatch = Dispatch, RejectedValue = undefined>
type ThunkAPIType = {
  dispatch: (action: any) => any;
  rejectWithValue: Function;
};
