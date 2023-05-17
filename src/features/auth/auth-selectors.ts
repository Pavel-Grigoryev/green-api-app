import { AppRootStateType } from 'common/utils/types';

export const selectIsLoggedIn = (state: AppRootStateType) => state.auth.isLoggedIn;
export const selectId = (state: AppRootStateType) => state.auth.id;
export const selectApiToken = (state: AppRootStateType) => state.auth.apiToken;
export const selectWhatsAppId = (state: AppRootStateType) => state.auth.whatsAppId;
