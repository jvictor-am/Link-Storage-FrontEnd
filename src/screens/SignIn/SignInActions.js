export const SIGN_IN = 'SIGN_IN';

export const signInAction = (data) => {
  return { type: SIGN_IN, payload: data };
};
