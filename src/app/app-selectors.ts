import { AppRootStateType } from 'common/utils/types';

export const selectIsInitialized = (state: AppRootStateType) => state.app.isInitialized;
