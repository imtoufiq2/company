import { GET_IFSC } from "../types/addBank";

export const getIfsc = (payload) => ({
  type: GET_IFSC,
  payload,
});
