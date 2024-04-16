import { GET_MOBILE_NUMBER } from "../types/login";

export const getMobileNumber = (payload) => ({
  type: GET_MOBILE_NUMBER,
  payload,
});
