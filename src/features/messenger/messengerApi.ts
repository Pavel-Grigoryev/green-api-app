import axios from 'axios';
import { AuthDataType } from '../auth/authApi';

const instance = axios.create({
  baseURL: 'https://api.green-api.com/',
});

export const messengerApi = {
  sendMessage(data: MessengerDataType) {
    return instance.post<SendMessType>(`waInstance${data.id}/sendMessage/${data.apiToken}`, {
      chatId: `${data.chatId}@c.us`,
      message: data.message,
    });
  },
  receiveMessage(data: AuthDataType) {
    return instance.get<RecieveMessType | null>(
      `waInstance${data.id}/ReceiveNotification/${data.apiToken}`
    );
  },
  deleteMessage(data: DeleteDataType) {
    return instance.delete<DeleteMessType>(
      `waInstance${data.id}/deleteNotification/${data.apiToken}/${data.receiptId}`
    );
  },
};

// Types

export type MessengerDataType = {
  id: string;
  apiToken: string;
  message: string;
  chatId: string;
};

export type DeleteDataType = {
  id: string;
  apiToken: string;
  receiptId: string;
};

export type SendMessType = {
  idMessage: string;
};

export type RecieveMessType = {
  receiptId: number;
  body: RootObjectBody;
};
export type RootObjectBodyInstanceData = {
  idInstance: number;
  wid: string;
  typeInstance: string;
};
export type RootObjectBodySenderData = {
  chatId: string;
  sender: string;
  senderName: string;
};
export type RootObjectBodyMessageDataTextMessageData = {
  textMessage: string;
};
export type RootObjectBodyMessageData = {
  typeMessage: string;
  textMessageData: RootObjectBodyMessageDataTextMessageData;
};
export type RootObjectBody = {
  typeWebhook: string;
  instanceData: RootObjectBodyInstanceData;
  timestamp: number;
  idMessage: string;
  senderData: RootObjectBodySenderData;
  messageData: RootObjectBodyMessageData;
};

export type DeleteMessType = {
  result: boolean;
};
