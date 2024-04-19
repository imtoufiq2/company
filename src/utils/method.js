export function fetchWithWait({ dispatch, action }) {
  return new Promise((resolve, reject) => {
    dispatch({ ...action, resolve, reject });
  });
}
