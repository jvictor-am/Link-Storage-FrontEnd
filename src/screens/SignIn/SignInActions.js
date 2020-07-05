import { apiPost } from '../../helpers/api';

export const SIGN_IN = 'SIGN_IN';

export const signInAction = (data) => {
  const payload = apiPost('/auth/signIn', data);

  return { type: SIGN_IN, payload };
};
