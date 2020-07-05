import { apiPost } from '../helpers/api';

export const SIGN_UP = 'SIGN_UP';

export const signUpAction = (data) => {
  const payload = apiPost('/auth/signUp', data);
  return { type: SIGN_UP, payload };
};
