import { SAVE_PAN, VERIFY_LATER, VERIFY_PAN } from "../types/kyc";



export const verifyPan = (payload) => ({
  type: VERIFY_PAN,
  payload,
});

export const savePan = (payload) => ({
    type: SAVE_PAN,
    payload,
  });
  
  export const verifyLater = (payload) => ({
    type: VERIFY_LATER,
    payload,
  });