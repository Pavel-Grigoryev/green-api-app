import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.green-api.com/',
});

export const authApi = {
  login(data: AuthDataType) {
    return instance.get<AuthResponseType>(`waInstance${data.id}/getStateInstance/${data.apiToken}`);
  },
};

// Types

export type AuthDataType = {
  id: string;
  apiToken: string;
};

export type AuthResponseType = {
  stateInstance: string;
};
