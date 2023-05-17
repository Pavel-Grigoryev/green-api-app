import { createSelector } from 'reselect';
import { AppRootStateType } from 'common/utils/types';

export const selectMessengerState = (state: AppRootStateType) => state.messenger;

export const selectChats = createSelector(selectMessengerState, (items) => {
  return items.map((el) => `+${el.chatId}`);
});
