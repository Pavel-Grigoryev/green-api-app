import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.green-api.com/',
});

export const authApi = {
  getAccountStatus(data: AuthDataType) {
    return instance.get<AccStatusRespType>(
      `waInstance${data.id}/getStateInstance/${data.apiToken}`
    );
  },
  getAccountSettings(data: AuthDataType) {
    return instance.get<AccSetRespType>(`waInstance${data.id}/getSettings/${data.apiToken}`);
  },
};

// Types

export type AuthDataType = {
  id: string;
  apiToken: string;
};

export type AccStatusRespType = {
  stateInstance: string;
};

export type AccSetRespType = {
  wid: string;
  countryInstance: string;
  typeAccount: string;
  webhookUrl: string;
  webhookUrlToken: string;
  delaySendMessagesMilliseconds: number;
  markIncomingMessagesReaded: string;
  markIncomingMessagesReadedOnReply: string;
  sharedSession: string;
  proxyInstance: string;
  outgoingWebhook: string;
  outgoingMessageWebhook: string;
  outgoingAPIMessageWebhook: string;
  incomingWebhook: string;
  deviceWebhook: string;
  statusInstanceWebhook: string;
  stateWebhook: string;
  enableMessagesHistory: string;
  keepOnlineStatus: string;
};
