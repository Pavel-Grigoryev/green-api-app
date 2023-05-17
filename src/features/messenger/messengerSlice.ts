import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AppRootStateType, ThunkErrorType } from 'common/utils/types';
import { handleAsyncServerNetworkError } from 'common/utils/error-utils';
import { appActions } from '../../app';
import { DeleteDataType, messengerApi, MessengerDataType } from './messengerApi';
import { AuthDataType } from '../auth/authApi';

// thunks

export const sendMessageTC = createAsyncThunk<
  { chatId: string; message: string },
  { currentChatNumber: string; message: string },
  ThunkErrorType
>('messenger/sendMessageTC', async ({ currentChatNumber, message }, thunkAPI) => {
  const chatId = currentChatNumber.replace(/\D/g, '');
  const state = thunkAPI.getState() as AppRootStateType;
  const date: MessengerDataType = {
    id: state.auth.id,
    apiToken: state.auth.apiToken,
    chatId,
    message,
  };
  try {
    await messengerApi.sendMessage(date);
    return { chatId, message };
  } catch (error) {
    const err = error as Error | AxiosError;
    return handleAsyncServerNetworkError(err, thunkAPI);
  } finally {
    thunkAPI.dispatch(appActions.setAppInitializedAC(true));
  }
});

export const receiveMessageTC = createAsyncThunk<
  { chatId: string; id: string; message: string } | null,
  undefined,
  ThunkErrorType
>('messenger/receiveMessageTC', async (param, thunkAPI) => {
  const state = thunkAPI.getState() as AppRootStateType;
  const date: AuthDataType = {
    id: state.auth.id,
    apiToken: state.auth.apiToken,
  };
  try {
    const res = await messengerApi.receiveMessage(date);
    if (res.data?.receiptId) {
      const delData: DeleteDataType = { ...date, receiptId: res.data?.receiptId.toString() };
      await messengerApi.deleteMessage(delData);
    }
    if (res.data?.body.messageData.textMessageData.textMessage) {
      const chatId = res.data.body.senderData.chatId.replace(/\D/g, '');
      const id = res.data.receiptId.toString();
      const message = res.data.body.messageData.textMessageData.textMessage;
      return { chatId, id, message };
    }
    return null;
  } catch (error) {
    const err = error as Error | AxiosError;
    return handleAsyncServerNetworkError(err, thunkAPI);
  } finally {
    thunkAPI.dispatch(appActions.setAppInitializedAC(true));
  }
});
export const slice = createSlice({
  name: 'messenger',
  initialState: [] as MessengerStateType,
  reducers: {
    createChatAC(state, action: PayloadAction<string>) {
      state.unshift({ chatId: action.payload, messages: [] });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessageTC.fulfilled, (state, action) => {
        const index = state.findIndex((chat) => chat.chatId === action.payload.chatId);
        if (index > -1) {
          state[index].messages.push({
            id: nanoid(),
            status: 'send',
            message: action.payload.message,
          });
        }
      })
      .addCase(receiveMessageTC.fulfilled, (state, action) => {
        if (action.payload) {
          const index = state.findIndex((chat) => chat.chatId === action.payload?.chatId);
          if (index > -1) {
            state[index].messages.push({
              id: action.payload.id,
              status: 'receive',
              message: action.payload.message,
            });
          }
        }
      });
  },
});

// Async actions

export const asyncMesengerActions = { sendMessageTC, receiveMessageTC };

// types

type ChatType = {
  chatId: string;
  messages: MessageType[];
};

type MessageType = {
  id: string;
  status: MessageStatusType;
  message: string;
};

export type MessageStatusType = 'send' | 'receive';

type MessengerStateType = ChatType[];
