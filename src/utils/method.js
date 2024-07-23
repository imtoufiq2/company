// export function fetchWithWait({ dispatch, action  }) {
//   // console.log("returnToken",returnToken())
//   return new Promise((resolve, reject) => {
//     dispatch({ ...action, resolve, reject });
//   });
// }


export function fetchWithWait({ dispatch, action }) {
  return new Promise((resolve, reject) => {
    dispatch({ ...action, resolve, reject });
  });
}