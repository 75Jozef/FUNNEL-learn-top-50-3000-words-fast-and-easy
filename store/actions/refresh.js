export const REFRESH = 'REFRESH';

export const refresh = (refresh) => {
  return { type: REFRESH, refresh: refresh };
};
