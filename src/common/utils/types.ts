import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
// import {FieldErrorType} from "api/types";
import { rootReducer } from '../../app/store';

export type RootReducerType = typeof rootReducer;

export type AppRootStateType = ReturnType<RootReducerType>;

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// export type ThunkErrorType = {
//     rejectValue: { errors: Array<string>, fieldsErrors?: Array<FieldErrorType> }
// }
