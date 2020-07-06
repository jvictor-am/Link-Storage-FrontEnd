import { apiPost, apiRefreshToken } from '../helpers/api';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const INIT_ACCOUNT = 'INIT_ACCOUNT';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const signUpAction = (data) => {
  const payload = apiPost('/auth/signUp', data);
  return { type: SIGN_UP, payload };
};

export const signInAction = (data) => {
  const payload = apiPost('/auth/signIn', data);

  return { type: SIGN_IN, payload };
};

export const signOutAction = () => {
  return { type: SIGN_OUT, payload: {} };
};

export const initAccount = () => {
  return { type: INIT_ACCOUNT, payload: {} };
};

export const getRefreshToken = () => {
  const payload = apiRefreshToken();
  return { type: REFRESH_TOKEN, payload };
};
