export const RESETKEY = 'RESETKEY';

export const resetKey = (key) => {
  return { type: RESETKEY, key: key };
};
