import axios, { AxiosResponse } from 'axios';

import { User } from '@/interfaces/User';
import { LoginPropsType } from '@/schemas/loginSchema';

import { deleteToken, setToken } from './defaults';

export const registerUser = async (credential: LoginPropsType) => {
  const { data: user } = await axios.post<any, AxiosResponse<User>>(
    '/users/signup',
    credential,
  );
  setToken(user.token);

  return user;
};

export const loginUser = async (credential: LoginPropsType) => {
  const { data: user } = await axios.post<any, AxiosResponse<User>>(
    '/users/signin',
    credential,
  );
  setToken(user.token);

  return user;
};

export const logoutUser = async () => {
  await axios.post('/users/signout');
  deleteToken();

  return true;
};

export const refreshUser = async (oldToken: string) => {
  const { data: user } = await axios.get<any, AxiosResponse<User>>(
    '/users/whoami',
    {
      headers: {
        Authorization: `Bearer ${oldToken}`,
      },
    },
  );
  setToken(user.token);

  return user;
};
